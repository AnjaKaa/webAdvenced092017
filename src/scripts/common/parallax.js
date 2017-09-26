function parallaxInit() {
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