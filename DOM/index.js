// let hid = document.getElementById("hid");
// hid.style.color = "#f08";
// hid.style.fontFamily = "arial";
// hid.innerHTML;

// const e = require("express");

// let btn = document.getElementById("btn");

// let list = document.getElementById("listItem");

// btn.addEventListener("click", function (e) {
//    console.log("click");
//    let item = list.lastElementChild.cloneNode(true);
//    item.innerHTML = "New item";
//    list.appendChild(item);
// });

// [...list.children].forEach((li) => {
//    li.onclick = function (e) {
//       console.log(e.target);
//       e.target.remove();
//    };
// });

// list.addEventListener("click", function (e) {
//    console.log(this.contains(e.target));
// });

// let name = document.getElementById("name");

// name.addEventListener("keypress", function (e) {
//    if (e.key === "Enter") {
//       document.getElementById(
//          "show-name"
//       ).innerHTML = `Your name is ${e.target.value}`;

//       e.target.value = "";
//    }
// });

let liItem = document.getElementsByTagName("li");

[...liItem].forEach(function (value, index) {
   let text = value.innerHTML;
   value.innerHTML = `(${index + 1}) ${text}`;
});
console.log(liItem);
