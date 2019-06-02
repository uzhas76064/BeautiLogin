window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let inputs = form.querySelectorAll('input');

    for(let i = 0; i < inputs.length; i++) {
        //console.log(inputs[i]);
        inputs[i].addEventListener('keyup', () => {
            if(inputs[i].value === '') {
                form.querySelector('button').disabled = true
            }
            else if (inputs[i] !== '') {
                form.querySelector('button').disabled = false;
            }
        });
    }
});