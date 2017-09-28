function authFormInit() {
    const authForm = document.querySelector('.authorization-form');

    if (authForm) {
        authForm.addEventListener('submit', (e) =>{
            e.preventDefault();
            if (CustomValidate()) {
                const xhr = new XMLHttpRequest();
        
                xhr.open('GET', 'auth.txt');
                xhr.send();

                xhr.addEventListener('load', () =>{
                    alert(xhr.response);
                })
            }
        });

        authForm.addEventListener('click', ()=> {
            document.querySelectorAll('.input-error').forEach(
                (item) => {
                    item.classList.remove('input-error');
                });
            document.querySelectorAll('.error-message').forEach(
                (item) => {
                    item.parentNode.removeChild(item);
                });
        });

    }
}

function addErrorMessage(elem, text) {
    const message= document.createElement('div');

    message.classList.add('error-message');
    message.innerText=text;
    elem.parentNode.parentNode.appendChild(message);
    if (elem.type=='text' || elem.type=='password') {
        elem.classList.add('input-error');
    }
}
function CustomValidate() {
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const radio = document.getElementsByName('radio');

    if (login.value.length == 0) {
        console.log('вы не ввели логин');
        addErrorMessage(login, 'Вы не ввели логин');
    } else
    if (password.value.length == 0) {
        console.log('вы не ввели пароль');
        addErrorMessage(password, 'Вы не ввели пароль');
    } else
    if (!checkbox.checked) {
        console.log('Роботам здесь не место!');
        addErrorMessage(checkbox, 'Роботам здесь не место!');

    } else
    if (!radio[0].checked) {
        console.log('Роботам здесь не место!');
        addErrorMessage(radio[1], 'Роботам здесь не место!');
    } else {

        return true;
    }

    return false;

}

module.exports =authFormInit;