const display = document.querySelector('h3');
const gen = document.getElementById('gen');


gen.addEventListener('click', () => {
    let colorGenerator = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = '#'+ colorGenerator;
    display.innerHTML = "#" + colorGenerator;
})