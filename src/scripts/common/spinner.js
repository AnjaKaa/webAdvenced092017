function spinnerInit() {
    const spinner = document.querySelector('.spinner');

    if (spinner) {
        const content = document.querySelector('.content');

        content.classList.add('content--unload');

        const spinnerLoad = () => {
            const title = document.querySelector('.spinner__title');
            const ElementsList = document.getElementsByTagName('*');
            const cntElements = ElementsList.length;
           
            const percent = 100 / cntElements;
            let progress = 0;
            const sectors = document.querySelectorAll('.spinner__sector');

            let interval = setInterval( () => {
                progress = Math.min( progress + percent, 100);
                drawSectors( progress );
                title.innerText = Math.round(progress);
                if ( progress == 100) {
                    clearInterval( interval );
                    content.classList.remove('content--unload');
                    spinner.style.transition = '0.5s';
                    spinner.style.opacity = '0';
                    spinner.style.visibility = 'hidden';
                    //spinner.classList.add('off');
                }
            }, 5);

            const drawSectors = (percent) => {
                [].slice.call(sectors).forEach((sector, i) => {
                    sector.style.strokeDashoffset = (100 - Math.max(percent-25*i, 0)*(4/(4-i)))/100 *2*Math.PI*sector.dataset.radius;
                })
            }
           
        }
        
        window.addEventListener('load', spinnerLoad);
    }
}

module.exports = spinnerInit;