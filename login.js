window.addEventListener('DOMContentLoaded', ()=> {
    let form = document.querySelector('.login-form'),
        inputs = form.getElementsByTagName('ínput'),
        statusMessage = document.createElement('div');

    let status = {
        waiting: 'Loading',
        success: 'Login was completed',
        failure: 'Ooops.. Something went wrong!'
    };

    form.addEventListener('submit', event => {
        event.preventDefault();

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'server.php');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        xhr.send(json);

        xhr.addEventListener('readystatechange', () => {
            if(xhr.readyState < 4) {
                statusMessage.innerText = status.loading;
            } else if(xhr.readyState === 4 && xhr.readyState === 200) {
                statusMessage.innerText = status.success;
            } else {
                statusMessage.innerText = status.failure;
            }
        });

        for(let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    });
});

/*window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('.login-form'),
        email = form.querySelector('input[type="email"]'),
        password = form.querySelector('input[type="password"]'),
        loginButton = form.querySelector('.login');

    loginButton.addEventListener('click', () => {
        localStorage.setItem('email', email.value);
        alert(localStorage.getItem('email'));
    });
});*/