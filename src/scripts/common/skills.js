function skillsInint() {
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
            circle.setAttribute('r', this.radius);circle.setAttribute('transform', `rotate(-90 ${cx} ${cy})`);
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
    }
    
}

function load(item) {

    function heandler() {
        
        var speed = 1, // скорость
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

    window.addEventListener( 'load', heandler());
    window.addEventListener( 'scroll', () => { heandler();});
    
}

module.exports=skillsInint;