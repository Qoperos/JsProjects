const input = document.querySelector('.input');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let word = input.value;
    input.select();
    input.setSelectionRange(0, word.length);
    document.execCommand('copy');
    btn.innerHTML = 'Copied';
    setTimeout(() => {
        location.reload();
    }, 1000);
})