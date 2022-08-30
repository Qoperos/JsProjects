const display = document.querySelector('h3');
const input = document.querySelector('input');
const gen = document.getElementById('gen');

input.addEventListener('input', () => {
    let inputNum = input.value;
    if (isNaN(inputNum)) {
        display.innerHTML = "Please enter a number";
    } else {
        gen.addEventListener('click', () => {
            let num = Math.floor(Math.random() * inputNum) + 1;
            display.innerHTML = num;
        })  
    }
});