
function welcomeInit() {
	document.addEventListener('click', function(e) {
		if (e.target.classList.contains('authorization-button')) {
			document.querySelector('.authorization-button').classList.add('off');
			document.querySelector('.center-panel__front').classList.add('off');
			document.querySelector('.center-panel__back').classList.remove('off');
			document.querySelector('.center-panel').classList.add('center-panel--rotate');
		}
		if (e.target.classList.contains('to_welcome') || e.target.classList.contains('index__wrap')) {
			document.querySelector('.authorization-button').classList.remove('off');
			document.querySelector('.center-panel__front').classList.remove('off');
			document.querySelector('.center-panel__back').classList.add('off');
			document.querySelector('.center-panel').classList.remove('center-panel--rotate');
		}
	})
}

module.exports = welcomeInit;