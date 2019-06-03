window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let inputs = form.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', () => {
            if((inputs[0].value && inputs[1].value === '') || (inputs[0].value === '') || (inputs[1].value === '')) {
                form.querySelector('button').disabled = true
            }
            else if (inputs[i] !== '') {
                form.querySelector('button').disabled = false;
            }

            localStorage.setItem('email', inputs[0].value);
            localStorage.setItem('password', inputs[1].value);
        });
    }
});