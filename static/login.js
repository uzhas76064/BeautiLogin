window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let inputs = form.querySelectorAll('input');
    let signUp = document.querySelector('button.sign-up');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', () => {
            if((inputs[0].value && inputs[1].value === '') || (inputs[0].value === '') || (inputs[1].value === '')) {
                form.querySelector('button').disabled = true
            }
            else if (inputs[i] !== '') {
                form.querySelector('button').disabled = false;
            }
            localStorage.clear();
        });
    }

    signUp.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('../static/register.html');
    });
});