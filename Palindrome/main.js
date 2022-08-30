const display = document.querySelector('h3');
const input = document.querySelector('input');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const word = input.value;
    let start = word.toLowerCase();
    let end = [...start].reverse().join("");
    if (start == end) {
        display.innerHTML = `${word.toUpperCase()} is a Palindrome`;
    } else {
        display.innerHTML = `${word.toUpperCase()} is not a palindrome`;
    }
})