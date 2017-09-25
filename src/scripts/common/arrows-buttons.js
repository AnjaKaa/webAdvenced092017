function arrowDownsInit() {
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