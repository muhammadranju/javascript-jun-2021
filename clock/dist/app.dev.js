"use strict";

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var progress = document.getElementById("progress");
setInterval(function () {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
  progress.style.width = sec / 60 * 100 + "%"; // setInterval(showCurrentTime, 1000);
});