const count = document.querySelector('h2');
const btn = document.querySelector('.buttons');

btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('sub')) {
        count.innerHTML--;
        numSensor();
    }
    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        numSensor();
    }
    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        numSensor();
    }
});

function numSensor() {
    if (count.innerHTML > 0) {
        count.style.color = '#00ff00';
    } else if (count.innerHTML < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'white';
    }
}