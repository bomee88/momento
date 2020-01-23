const clockContainer = document.querySelector(".js-clock"),
        clockTimes = clockContainer.querySelector("h1");

function getTimes(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTimes.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
    setInterval(getTimes, 1000);
}
getTimes();
init();
