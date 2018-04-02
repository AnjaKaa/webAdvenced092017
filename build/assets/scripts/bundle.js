/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


const spinner = __webpack_require__(1); 
const welcome = __webpack_require__(2);
const parallax = __webpack_require__(3); 
const blog = __webpack_require__(4);
const hamburger = __webpack_require__(5);
const arrowsButton = __webpack_require__(6);
const map = __webpack_require__(7);
const skills = __webpack_require__(8); 
const slider = __webpack_require__(9);

const authForm = __webpack_require__(10);

spinner();
welcome();
parallax();
hamburger();
blog();
arrowsButton();
map();
skills();
slider();
authForm();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function spinnerInit() {
    "use strict";

    const spinner = document.querySelector('.spinner');

    if (spinner) {
        const content = document.querySelector('.content');
        const title = document.querySelector('.spinner__title');
        const sectors = document.querySelectorAll('.spinner__sector');

        spinner.classList.remove('off');
        content.classList.add('content--unload');

        const drawSectors = (percent) => {
            [].slice.call(sectors).forEach((sector, i) => {
                sector.style.strokeDashoffset = (100 - Math.max(percent-25*i, 0)*(4/(4-i)))/100*2*Math.PI*sector.dataset.radius;
            })
        }
       
        const spinnerLoadEnd = () => {
            console.log('ready');
            drawSectors(100);
            title.innerText = '100';
            content.classList.remove('content--unload');
            spinner.style.transition = '0.5s';
            spinner.style.opacity = '0';
            spinner.style.visibility = 'hidden';
            //spinner.classList.add('off');
        }
        
        const spinnerLoad = () => {
            
            const ElementsList = document.getElementsByTagName('*');
            const cntElements = ElementsList.length;
           
            const percent = 100 / cntElements;
            let progress = 0;
            

            let interval = setInterval( () => {
                progress = Math.min( progress + percent, 100);
                title.innerText = Math.round(progress);
                drawSectors( progress );
                
                if ( progress == 100) {
                    clearInterval( interval );
                    spinnerLoadEnd();
                }
            }, 1);

        };

        window.addEventListener('DOMContentLoaded', spinnerLoad);
        //window.addEventListener('load', spinnerLoadEnd);
    }
}

module.exports = spinnerInit;

/***/ }),
/* 2 */
/***/ (function(module, exports) {


function welcomeInit() {
	"use strict";
	
	document.addEventListener('click', function(e) {
		if (e.target.classList.contains('authorization-button')) {
			document.querySelector('.authorization-button').style.visibility='hidden';
			document.querySelector('.center-panel').classList.add('center-panel--rotate');
			document.querySelector('.center-panel__front').classList.add('off');
			document.querySelector('.center-panel__back').classList.remove('off');
		}
		if (e.target.classList.contains('to_welcome') || e.target.classList.contains('index__wrap')) {
			document.querySelector('.authorization-button').style.visibility='visible';			
			document.querySelector('.center-panel').classList.remove('center-panel--rotate');
			document.querySelector('.center-panel__front').classList.remove('off');
			document.querySelector('.center-panel__back').classList.add('off');
		}
	})
}

module.exports = welcomeInit;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function parallaxInit() {
    
    "use strict";

    const parallaxContainer = document.getElementById('parallax');

    if (parallaxContainer) {
        const layers = parallaxContainer.children;
        const moveLayers = e => {
            const initialX = parallaxContainer.offsetWidth/2 - e.pageX;
            const initialY = parallaxContainer.offsetHeight/2 -e.pageY;
        
            [].slice.call(layers).forEach(function(layer, i) {
                const devider = i/100;
                const positionX = initialX*devider;
                
                const positionY = initialY*devider;
                const coeff=1+devider;

                layer.style.transform = `translate(${positionX}px,${positionY}px) scale(${coeff})`;
                
            });
        }

        window.addEventListener('mousemove', moveLayers);
    }

}

module.exports = parallaxInit;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function blogInit() {
    
    "use strict";
    
    let blog=document.querySelector('.blog__content');
  
    if (blog) {
        let listTextBlock=blog.querySelectorAll('.blog__text-block');

        let menuBlogWrap=document.querySelector('.blog__menu');
        let menuBlog=document.querySelector('.blog-menu');

        listTextBlock.forEach(function(item, i) { 
        // Добавляем пункты меню для каждого текстового блока в блоге
            item.id = 'text'+(i+1).toString();

            let link = document.createElement('a');
            
            link.setAttribute('name', item.id);
            item.appendChild(link);

            let newLi = document.createElement('li');

            newLi.classList.add('blog-menu__item');
            newLi.id = 'menu-'+item.id;

            let newLiLink = document.createElement('a');

            newLiLink.classList.add('blog-menu__link');
            newLiLink.setAttribute('href', '#'+item.id);
            newLiLink.textContent=item.querySelector('.blog__text-title').textContent; 
            newLiLink.addEventListener('click', () => { 
                setActiveTextBlok(item);
            });
            
            newLi.appendChild(newLiLink); 
            // первый пункт активный
            if (i==0) {
                newLi.classList.add('blog-menu__item--active');
            }
            
            menuBlog.appendChild(newLi);
        });
       
        // высота последнего элемента равна высоте списка заголовков
        if (menuBlog.clientHeight==0) {
            listTextBlock[listTextBlock.length-1].style.minHeight='70vh';
        } else {
            listTextBlock[listTextBlock.length-1].style.minHeight=menuBlog.clientHeight+'px';
        }

        // обработчик события прокрутки блога
        document.addEventListener('scroll', function() {

            listTextBlock.forEach(function(item, i) {
            // начало оболасти активности блока
                let startActive=window.pageYOffset;
                // конец области активности блока
                let endActive=startActive+100;
          
                // если верхняя граница текстового блока сверху в верхних 400px блога, то блок активный
                if (startActive <= item.offsetTop && item.offsetTop < endActive) {
                    setActiveTextBlok(listTextBlock[i]);
                }
                if (menuBlogWrap.offsetTop< window.pageYOffset) {
                    menuBlog.style.position='fixed';
                } else {
                    menuBlog.style.position='absolute';
                }
            });
      
        });
    
        // назначаем активный класс для блока и его пункта меню
        function setActiveTextBlok(curTextBlock) {
            listTextBlock.forEach(function(item){
            if (item != curTextBlock){
                //удаляем активный класс у всех остальных текстовых блоков
                item.classList.remove('blog__text-block--active');
                document.querySelector('#menu-'+item.id).classList.remove('blog-menu__item--active');
                }
            });
            
            // добавляем активный класс к текущему текстовому блоку
            curTextBlock.classList.add('blog__text-block--active');  
            document.querySelector('#menu-'+curTextBlock.id).classList.add('blog-menu__item--active');
          
        }

        let buttonMenu = document.querySelector('.button-menu');
        let menuWrap = document.querySelector('.blog-wrap__menu-tablet');
        let menuTablet = document.querySelector('.blog-menu-tablet');

        buttonMenu.addEventListener('click', function() {
            
            if (menuWrap.classList.contains('blog-wrap__menu-tablet--active')) {
                menuWrap.classList.remove('blog-wrap__menu-tablet--active');
                this.classList.remove('button-menu--active');
                menuBlog.innerHTML=menuTablet.innerHTML;
                menuTablet.innerHTML='';
            } else {
                menuWrap.classList.add('blog-wrap__menu-tablet--active');
                this.classList.add('button-menu--active');
                menuTablet.innerHTML=menuBlog.innerHTML;
                menuBlog.innerHTML='';
            }
            
        });

        menuWrap.addEventListener('click', function() {
            this.classList.remove('blog-wrap__menu-tablet--active');
            buttonMenu.classList.remove('button-menu--active');
            menuBlog.innerHTML=this.innerHTML;
            menuTablet.innerHTML='';
        });
    }

}

module.exports = blogInit;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function hamburgerInit() {
  
  "use strict";

  let toggle = document.querySelector(".hamburger");
  if(toggle) {
    toggleHandler(toggle);
  }
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      let menu=document.querySelector(".menu");
      (this.classList.contains("hamburger--active") === true) ? this.classList.remove("hamburger--active") : this.classList.add("hamburger--active");
      (menu.classList.contains("menu--active") === true) ? menu.classList.remove("menu--active") : menu.classList.add("menu--active");
    });
  }
 
}

module.exports = hamburgerInit;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function arrowDownsInit() {
    "use strict";
    
    let btnDown = document.querySelector('.arrow-down');
    let btnUp = document.querySelector('.arrow-up');

    if (btnUp || btnDown ) {
        if (btnDown) {
            scroll(btnDown, 'down');
        }
        if (btnUp) {
            scroll(btnUp, 'up');
        }
    }

    function scroll(btn, direction) {
        btn.addEventListener( 'click', function(e) {
            e.preventDefault();
            // let wrap = document.querySelector(".flex-wrap-column");
            // window.scrollTo(0, window.innerHeight)
            var speed = 0.5, // скорость
                startScroll =  window.pageYOffset, // начальная позиция, текущее положение сколла
                finishScroll = (direction=='down') ? window.innerHeight : window.innerHeight-window.pageYOffset, // положение элемента по Y относительно окна браузера
                start = null; // тут будем считать затраченное время

            function step(time) {
                // в первый кадр запомним время старта
                if (start === null) {
                    start = time;
                }
                var 
                    progress = time - start,     // определить, сколько прошло времени с начала анимации
                    nowScroll = null;              // текущее положение сколла
          
                // в зависимости от того двигаемся вверх или вниз, определим текущее положение сколла
                if (finishScroll <= 0) {
                    nowScroll = Math.max(startScroll - progress / speed, startScroll + finishScroll);
                } else {
                    nowScroll = Math.min(startScroll + progress / speed, startScroll + finishScroll);
                }
                // прокрутим скролл
                window.scrollTo(0, nowScroll);
                // если прокрутка еще не окончена, повторим шаг
                if (nowScroll != startScroll + finishScroll) {
                    requestAnimationFrame(step);     // запланировать отрисовку следующего кадра
                }
            }
            // Начнем плавную прокрутку
            requestAnimationFrame(step);
        });
    }
}
  

    
module.exports = arrowDownsInit;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function googleMapInit() {
    
    "use strict";
    
    // Местоположение: долгота, широта и коэффициент увеличения

    var latitude = 55.769,
        longitude = 37.677,
        mapZoom = 13;
        
    // Стили для разных элементов на карте       
    var style = [
        {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#61dac9'
                },
                {
                    'lightness': 17
                }
            ]
        },
        {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#ffffff'
                },
                {
                    'lightness': 20
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#dedede'
                },
                {
                    'lightness': 17
                }
            ]
        },
        {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#dedede'
                },
                {
                    'lightness': 29
                },
                {
                    'weight': 0.2
                }
            ]
        },
        {
            'featureType': 'road.arterial',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#dedede'
                },
                {
                    'lightness': 18
                }
            ]
        },
        {
            'featureType': 'road.local',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#ffffff'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#f1f1f1'
                },
                {
                    'lightness': 21
                }
            ]
        },
        {
            'elementType': 'labels.text.stroke',
            'stylers': [
                {
                    'visibility': 'on'
                },
                {
                    'color': '#ffffff'
                },
                {
                    'lightness': 16
                }
            ]
        },
        {
            'elementType': 'labels.text.fill',
            'stylers': [
                {
                    'saturation': 36
                },
                {
                    'color': '#333333'
                },
                {
                    'lightness': 40
                }
            ]
        },
        {
            'elementType': 'labels.icon',
            'stylers': [
                {
                    'visibility': 'off'
                }
            ]
        },
        {
            'featureType': 'transit',
            'elementType': 'geometry',
            'stylers': [
                {
                    'color': '#f2f2f2'
                },
                {
                    'lightness': 19
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry.fill',
            'stylers': [
                {
                    'color': '#fefefe'
                },
                {
                    'lightness': 20
                }
            ]
        },
        {
            'featureType': 'administrative',
            'elementType': 'geometry.stroke',
            'stylers': [
                {
                    'color': '#fefefe'
                },
                {
                    'lightness': 17
                },
                {
                    'weight': 1.2
                }
            ]
        }
    ]

    var gm=document.getElementById('google-container');

    if(gm) {
        // Создание точки на карте
        var mapOptions = {
            center: new google.maps.LatLng(latitude, longitude),
            zoom: mapZoom,
            panControl: false,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: style
        }

        // Инициализация карты
        var map = new google.maps.Map(gm, mapOptions);

        // Добавляем свой маркер местонахождения на карту (свою иконку)			
        // var marker = new google.maps.Marker({
        //     position: new google.maps.LatLng(latitude, longitude),
        //     map: map,
        //     visible: true,
        //     icon: marker_url,
        // });

        //Добавляем свои иконки для кнопок увеличить/уменьшить на карту
        function CustomZoomControl(controlDiv, map) { 
            var controlUIzoomIn= document.getElementById('zoom-in'),
                controlUIzoomOut= document.getElementById('zoom-out');
                controlDiv.appendChild(controlUIzoomIn);
                controlDiv.appendChild(controlUIzoomOut);
        
                //Делаем привязку для кнопок увеличить/уменьшить при клике
                google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
                    map.setZoom(map.getZoom()+1)
                });
                google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
                    map.setZoom(map.getZoom()-1)
                });
        }

        var zoomControlDiv = document.createElement('div');
        var zoomControl = new CustomZoomControl(zoomControlDiv, map);

        //Помещаем кнопки увеличить/уменьшить на карту в левый верхний угол
        map.controls[google.maps.ControlPosition.LEFT_CENTER].push(zoomControlDiv);
    }
}

module.exports = googleMapInit;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function skillsInint() {
    "use strict";

    let skillsList = [
        {
            group: 'Frontend',
            skills: [
                {
                    name: 'HTML5',
                    knowledge: 90
                },
                {
                    name: 'CSS',
                    knowledge: 80
                },
                {
                    name: 'Javascript\n&jQuery',
                    knowledge: 85
                }
            ]    
        },
        {
            group: 'Backend',
            skills: [
                {
                    name: 'PHP',
                    knowledge: 30
                },
                {
                    name: 'mySQL',
                    knowledge: 55
                },
                {
                    name: 'Node.js\n&npm',
                    knowledge: 30
                },
              
                {
                    name: 'Mongo.bd',
                    knowledge: 35
                }
            ]    
        },
        {
            group: 'WorkFlow',
            skills: [
                {
                    name: 'Git',
                    knowledge: 70
                },
                {
                    name: 'Gulp',
                    knowledge: 60
                },
                {
                    name: 'Webpack',
                    knowledge: 50
                },
                {
                    name: 'Bower',
                    knowledge: 30
                }
            ]    
        }
    ]

    class Skill {
        constructor(size, radius, container, percent, name) {
            this.svgns = 'http://www.w3.org/2000/svg';
            this.svg = document.createElementNS(this.svgns, 'svg');
            this.svg.classList.add('skill__circle');
            this.width = size;
            this.height = size;
            this.radius = radius;
            this.percent = percent;
            this.strokeDasharray = 2 * Math.PI * this.radius;
        
            this.svg.setAttribute('width', this.width);
            this.svg.setAttribute('height', this.height);
            this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
        
            this.baseCircle = this.createCircle();
            this.sectorCircle = this.createCircle(true, percent);
            this.title = this.createTitle(name);
            this.add(container);
        }
      
        createCircle(isSector = false, part) {
            const circle = document.createElementNS(this.svgns, 'circle');
            const cx = this.width / 2;
            const cy = this.height / 2;

            circle.setAttribute('cx', cx);
            circle.setAttribute('cy', cy);
            circle.setAttribute('r', this.radius);
            circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
            if (isSector) {
                
                circle.setAttribute('stroke-dasharray', this.strokeDasharray);
                circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
                circle.setAttribute('data-part', part);
                circle.classList.add('skill__sector');
            } else {
                circle.classList.add('skill__base');
            }

            return circle;
        }

        createTitle(name) {
            const title = document.createElement('div');

            title.classList.add('skill__title');
            title.innerText = name;

            return title;
        }
      
        add(container) {
            this.svg.appendChild(this.baseCircle);
            this.svg.appendChild(this.sectorCircle);
            container.appendChild(this.svg);
            container.appendChild(this.title);

            return this;
        }
      
        draw(progress) {
            this.baseCircle.setAttribute(
                'stroke-dashoffset',
                (1 - progress * this.percent) * this.strokeDasharray
            );
        }
    }

    var size = 115,
        radius = 45,
        listWrap=document.querySelector('.skills-list');

    if (listWrap) {
        skillsList.forEach( function(item) {
            let groupWrap=document.createElement('li');
    
            groupWrap.classList.add('skills-list__item', 'skills-row');
            listWrap.appendChild(groupWrap);
    
            let groupTitle=document.createElement('div');
    
            groupTitle.classList.add('skills-row__title');
            groupTitle.innerText=item.group;
            groupWrap.appendChild(groupTitle);
    
            let groupList=document.createElement('ul');
            
            groupList.classList.add('skills-row__list');
            groupWrap.appendChild(groupList);
            
            let skillsListGroup = item.skills;
    
            skillsListGroup.forEach( function(skill) { 
                function part(part, radius) {
                    return 2*Math.PI*radius/100*(100-skill.knowledge);
                }
                
                let skillWrap=document.createElement('li');
    
                skillWrap.classList.add('skills-row__item', 'skill');
                groupList.appendChild(skillWrap);
                let skillItem = new Skill(size, radius, skillWrap, part(skill.knowledge, radius), skill.name);
               
                load(skillItem.svg.lastChild); 
            });
        })
    
    
        function load(item) {

            function heandler() {                
                var speed = 5, // скорость
                    
                    startLoad = item.getAttribute('stroke-dasharray'), // начальная позиция
                    finishLoad = item.dataset.part, // положение элемента 
                    start = null; // тут будем считать затраченное время

                function step(time) {
                    // в первый кадр запомним время старта
                    if (start === null) {
                        start = time;
                    }
                    var progress = time - start,     // определить, сколько прошло времени с начала анимации
                        nowLoad= Math.max(startLoad - progress / speed, finishLoad);

                    // прокрутим скролл
                    item.setAttribute('stroke-dashoffset', nowLoad);
                    // если прокрутка еще не окончена, повторим шаг
                    if (nowLoad != finishLoad) {
                        requestAnimationFrame(step);     // запланировать отрисовку следующего кадра
                    }
                }
                // Начнем плавную прокрутку
                requestAnimationFrame(step);
                    
            }

            var needAnim=true;

            function checkМisibility(elem) {
                var offsetTop = elem.getBoundingClientRect().top;
                var offsetBottom = elem.getBoundingClientRect().bottom;
                var windowMargin = Math.ceil(window.innerHeight/3);
                var windowHeight = window.innerHeight;
                var topBorder = offsetTop - windowMargin;
                var bottomBorder =windowHeight- offsetBottom - windowMargin;

                return topBorder< 0 && bottomBorder<0;
            }
             
            window.addEventListener( 'load', ()=>{heandler();});

            var isScrolling =false;

            window.addEventListener( 'scroll', () => {
                if (isScrolling == false ) {
                    window.requestAnimationFrame(function() {
                        if(checkМisibility(listWrap)) {
                            if(needAnim) {
                                heandler();
                                console.log('animate skill');
                                needAnim=false;
                            }                        
                        } else {
                            needAnim=true;
                        }
                      isScrolling = false;
                    });
                }
                isScrolling = true;
             });
        }
        
    }
}

module.exports=skillsInint;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function sliderInint() {
    
    "use strict";
    
    let slider = document.querySelector('.slider__list');

    if (slider) {
        sliderHadler(slider);
    }

    function sliderHadler(slider) {
       
        let btnPrev=document.querySelector('.slider__buttons--prev');
        
        let btnNext=document.querySelector('.slider__buttons--next');

        document.addEventListener('click', function(e){
            if  (e.target===btnPrev) { 
                changeSlider(slider, 'up');
            }
            if  (e.target===btnNext) { 
                 changeSlider(slider, 'down');
            }
        });
        
    
    }
    function changeSlider(slider, direction) {
        let curSlide = document.querySelector('.slider__item--active');
        curSlide.classList.remove('slider__item--active');
        if (direction == 'up') {
            let prevSibling = (curSlide.previousElementSibling)?curSlide.previousElementSibling:slider.lastElementChild;
           
            prevSibling.classList.add('slider__item--active');
           
        } else {
            let nextSibling = (curSlide.nextElementSibling)?curSlide.nextElementSibling:slider.firstElementChild;
           
            nextSibling.classList.add('slider__item--active');
        }
    }

}
    
module.exports=sliderInint;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function authFormInit() {
    const authForm = document.querySelector('.authorization-form');

    if (authForm) {
        authForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            if (CustomValidate()) {
                const xhr = new XMLHttpRequest();
        
                xhr.open('GET', 'auth.txt');
                xhr.send();

                xhr.addEventListener('load', () =>{
                    alert(xhr.response);
                })
            }
        });

        authForm.addEventListener('click', ()=> {
            document.querySelectorAll('.input-error').forEach(
                (item) => {
                    item.classList.remove('input-error');
                });
            document.querySelectorAll('.error-message').forEach(
                (item) => {
                    item.parentNode.removeChild(item);
                });
        });

    }
}

function addErrorMessage(elem, text) {
    const message= document.createElement('div');

    message.classList.add('error-message');
    message.innerText=text;
    elem.parentNode.parentNode.appendChild(message);
    if (elem.type=='text' || elem.type=='password') {
        elem.classList.add('input-error');
    }
}
function CustomValidate() {
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const radio = document.getElementsByName('radio');

    if (login.value.length == 0) {
        console.log('вы не ввели логин');
        addErrorMessage(login, 'Вы не ввели логин');
    } else
    if (password.value.length == 0) {
        console.log('вы не ввели пароль');
        addErrorMessage(password, 'Вы не ввели пароль');
    } else
    if (!checkbox.checked) {
        console.log('Роботам здесь не место!');
        addErrorMessage(checkbox, 'Роботам здесь не место!');

    } else
    if (!radio[0].checked) {
        console.log('Роботам здесь не место!');
        addErrorMessage(radio[1], 'Роботам здесь не место!');
    } else {

        return true;
    }

    return false;

}

module.exports =authFormInit;

/***/ })
/******/ ]);