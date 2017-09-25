
function welcomeInit() {
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