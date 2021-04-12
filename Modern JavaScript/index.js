const DigitalClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minite = date.getMinutes();
    let secound = date.getSeconds();
    let timeFormet = "AM";

    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        timeFormet = "PM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minite = minite < 10 ? "0" + minite : minite;
    secound = secound < 10 ? "0" + secound : secound;

    let mainTime = `${hours}:${minite}:${secound}`;
    document.getElementById("time").innerText = mainTime;
    document.querySelector("small").innerText = timeFormet;
    setInterval(DigitalClock, 1000);
};

DigitalClock();
