const display = document.querySelector('h3');
const input = document.querySelector('input');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let vowelCount = 0;
    let word = input.value.toLocaleLowerCase();

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++;
        }
    }
    display.innerHTML = `${input.value.toUpperCase()} has ${vowelCount} vowels`;
})