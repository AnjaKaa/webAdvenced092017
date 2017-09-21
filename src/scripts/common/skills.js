function skillsInint() {
    let skillsList = document.querySelectorAll('.skill__sector');
       
    skillsList.forEach( function(item) {
        load(item); 
    })
}

function load(item) {
    window.addEventListener( 'load', function(e) {
        var speed = 0.5, // скорость
            startLoad = item.getAttribute('stroke-dashoffset'), // начальная позиция
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
            item.setAttribute('stroke-dashoffset',nowLoad);
            // если прокрутка еще не окончена, повторим шаг
            if (nowLoad !=  finishLoad) {
                requestAnimationFrame(step);     // запланировать отрисовку следующего кадра
            }
        }
        // Начнем плавную прокрутку
        requestAnimationFrame(step);
            
    });
}

module.exports=skillsInint;