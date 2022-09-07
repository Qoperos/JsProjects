const day = document.querySelector('.days');
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

const newYears = "11 sep 2022";

const countDownTimer = () => {

    const newYearData = new Date(newYears);
    const currentDate = new Date();
    const countDown = (newYearData - currentDate); 
    
    const totalSecond = Math.floor(countDown / 1000);
    const minute = Math.floor(totalSecond / 3600) % 24;
    const second = Math.floor(totalSecond) % 60;
    const hour = Math.floor(totalSecond / 3600) % 24;
    const days = Math.floor(totalSecond / 3600 / 24);

    day.innerText = formatTime(days);
    hours.innerText = formatTime(hour);
    minutes.innerText = formatTime(minute);
    seconds.innerText = formatTime(second);
    
}

function formatTime(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return time;
    }
}

setInterval(countDownTimer, 1000);