
function welcomeInit() {
	document.addEventListener('click', function(e) {
		if(e.target.classList.contains('authorization-button')) {
			document.querySelector('.authorization-button').classList.add('off');
			document.querySelector('.welcome').classList.add('off');
			document.querySelector('.authorization').classList.remove('off');
		}
	})
}

module.exports = welcomeInit;