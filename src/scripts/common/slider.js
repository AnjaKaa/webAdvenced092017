function sliderInint() {
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