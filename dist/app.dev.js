"use strict";

var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var progress = document.getElementById("progress");

function showCurrentTime() {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
  progress.style.width = sec / 60 * 100 + "%";
}

setInterval(showCurrentTime, 1000);