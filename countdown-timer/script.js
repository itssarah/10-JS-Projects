const newYears = '18 Apr 2022';

const secondsEl = document.getElementById('seconds');
const minsEl = document.getElementById('mins');
const hoursEl = document.getElementById('hours');
const daysEl = document.getElementById('days');

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours =  Math.floor(totalSeconds / 3600) % 24;
    const minutes =  Math.floor(totalSeconds / 60) % 60;
    const seconds =  Math.floor(totalSeconds) % 60;
     
    secondsEl.innerHTML = formatTime(seconds);
    minsEl.innerHTML = formatTime(minutes);
    hoursEl.innerHTML = formatTime(hours);
    daysEl.innerHTML = formatTime(days);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);

