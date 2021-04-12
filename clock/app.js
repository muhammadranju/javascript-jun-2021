const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progress = document.getElementById("progress");

setInterval(() => {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    progress.style.width = (sec / 60) * 100 + "%";
    // setInterval(showCurrentTime, 1000);
});
