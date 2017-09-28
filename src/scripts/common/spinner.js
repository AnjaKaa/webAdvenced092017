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