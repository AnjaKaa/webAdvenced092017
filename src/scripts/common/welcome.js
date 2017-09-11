
function welcomeInit() {
	document.addEventListener('click',function(e) {
		if(e.target.classList.contains('authorization_button')) {
			document.querySelector('.authorization_button').style.display='none';
			document.querySelector('.authorization').classList.remove('off');
			document.querySelector('.welcome').classList.add('off');
		}
	})
}

module.exports = welcomeInit;