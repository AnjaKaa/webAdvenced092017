function arrowDownsInit() {
      let btn = document.querySelector(".main-header__arrow-downs");
      
      if (btn) {
        scroll(btn);
     
     
     
     
      function scroll(btn) {
        btn.addEventListener( "click", function(e) {
          e.preventDefault();
          let wrap= document.querySelector(".flex-wrap-column");
          //window.scrollTo(0, window.innerHeight)
          var
          speed = 0.5, // скорость
          startScroll = window.pageYOffset, // начальная позиция, текущее положение сколла
          finishScroll =  window.innerHeight, // положение элемента по Y относительно окна браузера
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
            if (finishScroll < 0) {
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
    
  }
    
module.exports = arrowDownsInit;