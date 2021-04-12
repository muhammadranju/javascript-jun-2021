"use strict";

// setInterval(() => {
//     const time = document.querySelector(".display #time");
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     let day_night = "AM";
//     if (hours > 12) {
//         day_night = "PM";
//         hours = hours - 12;
//     }
//     if (seconds < 10) {
//         seconds = "0" + seconds;
//     }
//     if (minutes < 10) {
//         minutes = "0" + minutes;
//     }
//     if (hours < 10) {
//         hours = "0" + hours;
//     }
//     time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
// });
setInterval(function () {
  var time = document.querySelector(".display #time");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var day_night = "AM"; // hours = hours > 12 ? (day_night = "PM") : +hours - 12;
  // seconds = seconds < 10 ? (seconds = "0") : +seconds;
  // minutes = minutes < 10 ? (minutes = "0") : +minutes;
  // hours = hours < 10 ? (hours = "0") : +hours;

  if (hours === 0) {
    hours = 12;
  }

  if (hours > 12) {
    day_night = "PM";
    hours = hours - 12;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  time.textContent = "".concat(hours, ":").concat(minutes, ":").concat(seconds, ":").concat(day_night);
});