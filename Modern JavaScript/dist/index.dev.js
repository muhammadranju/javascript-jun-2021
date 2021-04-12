"use strict";

var DigitalClock = function DigitalClock() {
  var date = new Date();
  var hours = date.getHours();
  var minite = date.getMinutes();
  var secound = date.getSeconds();
  var timeFormet = "AM";

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
  var mainTime = "".concat(hours, ":").concat(minite, ":").concat(secound);
  document.getElementById("time").innerText = mainTime;
  document.querySelector("small").innerText = timeFormet;
  setInterval(DigitalClock, 1000);
};

DigitalClock();