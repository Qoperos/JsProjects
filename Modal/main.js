const btn = document.getElementById('btn');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');



btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

close.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
})