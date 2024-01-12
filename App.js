"use strict";

// const { clearConfigCache } = require("prettier");

// const e = require("express");

// const { text } = require("body-parser");

// const myName = "Md Ranju Islam";
// const myAge = 18;
// const iamIs = true;
// const myMatherName = "Modina Khatun";
// const myFatherName = "Mosharof Hossain";
// console.log(
//     "My Father Name is" + myFatherName,
//     "My Father Name is" + myMatherName
// );

// console.log("This=>", typeof myFatherName, "data type");
// console.log("This is =>", typeof iamIs, "data type");

// const names1 = 1799301290;
// const names2 = 1629395793;
// const names3 = 1860755449;
// const names4 = 1799301298;

// const num1 = names2;

// if (isNaN(num1)) {
//     console.log("Plz enter your number or value");
// } else if (num1 == names1) {
//     console.log(isNaN("You con't use this number", names1));
// } else if (num1 == names2) {
//     console.log("You con't use this number", names2);
// } else if (num1 == names3) {
//     console.log("You con't use this number", names3);
// } else {
//     console.log("Successfull end you....");
// }

// console.log(true - false);
// console.log(true + true);
// console.log("Technical");
// Technical;

// const x = 20;
// const y = 20;
// console.log(`This are same values is ${x == y}`);

// const x = 20;
// const y = 15;

// console.log(x > y && x > 0);

// const x = "Md Ranju ";
// const y = "Islam";
// console.log(x + y);

// console.log(5 + "ranju");

// const a = 5;
// const b = 10;
// const c = a + b;
// console.log(c);

// if ((s = 0)) {
//     console.log("You win the game");
// } else {
//     console.log("You los the game");
// }
// const name = 18;
// console.log(name >= 18 ? "You can vote" : "You can't vote");

// var x = 0;

// while (x <= 100) {
//     console.log(
//         `This is while loop and this computer in HACKED by md ranju you need back contact me
// ${x++}`
//     );
// }

// var x = 10;
// do {
//     console.log(`This is do while loop: ${x++}`);
// } while (x <= 10);

// for (let x = 0; x <= 10; x++) {
//     console.log(`This is for loop: ${x}`);
//     x++;
// }
// for (let x = 1; x <= 10; x++) {
//     let num = 7;
//     console.log(`${num} * ${x} = ${num * x} :)`);
// }
// for ($x = 1; $x <= 10; $x++) {
//     $num = 1;
//     console.log(`8 * ${$x} = ${$num * $x} :)`);
// }
// var a = 20,
//     b = 30;
// var x = a + b;
// function add(a, b) {
//     var a, b;
//     var total = a + b;
//     console.log(total, x);
// }
// add(x);
// add(10, 20);
// add(12, 23);

// const anyFun = function (a, b) {
//     return (total = a + b);
// };
// let any = anyFun(11, 23);
// console.log(any);
// console.log(anyFun(10, 20));

// $song = "ranju";
// console.log($song);

// /*Fat Arrow function=======================================*/
// console.log(sub());
// function sub() {
//     let a = 10,
//         b = 15;
//     let c = a + b;
//     return c;
// }

// const sub = () => {
//     let a = 10,
//         b = 15;
//     let c = a + b;
//     return c;
// };
// console.log(sub());

// var myName = ["Md", "Ranju", "Islam", "Amin", "Hossain"];
// console.log(myName.indexOf("Md"));

// var myName = ["Md", "Ranju", "Islam", "Amin", "Hossain"];
// console.log(myName.lastIndexOf("Ranju"));

// const fode = ["appel", "banana", "oringe", "lemon"];
// fode.push("mango");
// console.log(fode);

// const fode = ["lemon", "oringe", "banana", "appel"];
// fode.unshift("mango");
// console.log(fode);

// const fode = ["lemon", "oringe", "banana", "appel"];

// const newFode = fode.splice(fode.length, 1, "painapal", "masmalo");
// console.log(fode);
// console.log(newFode);

// const fode = ["lemon", "oringe", "banana", "appel", "painapal"];
// const indexOfFode = fode.indexOf("banana");

// if (indexOfFode != -1) {
//     const newFode = fode.splice(indexOfFode, Infinity);
//     console.log(fode);
//     console.log(newFode);
// } else {
//     console.log("No data found");
// }

// const array1 = [1, 2, 4, 19, 26];
// let newArr = array1.map((elament, index, ar) => {
//     return elament > 9;
// });
// console.log(array1);
// console.log(newArr);

// let myName = "Ranju";

// for (let name = 0; name <= 5; name++) {
//     for (let name2 = 0; name2 <= 5; name2++) {
//         console.log(name2);
//         console.log("*");
//     }
// }

// let myName = "Ranju";

// for (let name = 1; name <= 5; name++) {
//     for (let name2 = 0; name2 <= name; name2++) {
//         document.write("*");
//         document.write(name2);
//     }
//     document.write("<br/>");
// }

// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2));

// let add = (a, b) => {
//     return a + b;
// };
// console.log(add(20, 30));

// let allName = ["Ranju", "Amin", "Hossain", "Islam", "Muhammad"];
// let allName = ["Ranju"];
// let count = allName.length;
// console.log(count);

// for (let myName = 0; myName < allName.length; myName++) {
//     console.log(allName);
// }

// allName.forEach((arrname) => {
//     console.log(arrname);
// });

// let number = ["Ranju", "Amin", "Hossain", "Islam", "Muhammad"];
// let number = [1, 2, 3, 5, 7];

// let newNumber = number.map((curElm, index, arr) => {
//     return `Index on = ${index} and the value is ${curElm} in to ${arr}`;
// });
// console.log(newNumber);

// number.forEach((newNumber) => {
//     console.log(newNumber);
// });

// let newNumberfor = number.forEach((curElm, index, arr) => {
//     return `Index on = ${index} and the value is ${curElm} in to ${arr}`;
//     return `Index on = ${index} and the value is ${curElm} in to ${arr} `;
// });
// console.log(newNumberfor);

// var c = 10;
// var d = 20;
// console.log(c + d);

// let arr = [25, 36, 49, 64, 81];

// let number = (a, b) => {
//     return a + b;
// };
// console.log(number(10, 20));
// let myName = ["Md", "Ranju", "Islam", "Amin", "Hossain"];

// for (let x = 0; x < myName.length; x++) {
//     console.log(myName);
// }
// let myName = ["Md", "Ranju", "Islam", "Amin", "Hossain"];
// let i = 0;
// while (i < myName.length) {
//     i++;
//     console.log(myName);
// }

// let myName = ["Md", "Ranju", "Islam", "Amin", "Hossain"];

// myName.forEach((arrValue) => {
//     console.log(arrValue);
// });
// let iam = "Md Ranju";

// if (iam == "Md Ranju") {
//     console.log("is't true");
// } else {
//     console.log("is't folce");
// }

// let ytName = "EagolBDGamer";
// let myLenth = ytName.length;
// console.log(myLenth);

// let anyName = 'My Name is Md Ranju Islam "IamaBoy" I live in Bangladesh';
// console.log(anyName);

// let anyName2 = `My Name is Md Ranju Islam 'IamaBoy' I live in Bangladesh`;
// console.log(anyName2);

// let anyName = 'My Name is Md Ranju Islam "IamaBoy" I live in Bangladesh';
// let Sdata = anyName.search("Ranju");
// console.log(Sdata);

// let myTueets =
//     "Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

// let myActulTow = myTueets.slice(0, 280);
// console.log(myActulTow);

// console.log(myActulTow.length);

// let native = "";

// let myArr = [1, 2, 3, 4, 5, 6];

// let result = myArr.reduce((value, value2) => {
//     return value + value2;
// });
// console.log(result);

// const str = "MD RANJU";
// const newStr = str.charAt(4);
// const count = str.length - 1;
// const sum = newStr + count;
// const sub2 = str.charCodeAt(count);
// console.log(sub2);

// let str = "এ";
// let newLant = str.length - 1;
// let total = str.charCodeAt(newLant);
// console.log(total);

// let string = "HELLO WORLD";
// let count2 = string.length - 1;
// console.log(string.charCodeAt(count2));

// (ক = 97), (A = 65);
// (z = 122), (Z = 90);

// let string = "HELLO WORLD";

// console.log(string[10]);

// let str = "HELLO RANJU";
// let upto = str.toLowerCase();
// let upto2 = str.toUpperCase();

// console.log(upto);

// let myName = "MD";
// let myName2 = "RANJU";

// console.log(myName.concat(" ", myName2));
// console.log(myName, myName2);
// console.log(`${myName} ${myName2}`);

// let myName = "MD RANJU";

// console.log(myName.trim());

// let myName = "MD RANJU";

// console.log(myName.trim());

// let myTime = new Date();
// console.log(myTime);

// let myTime = new Date().toLocaleString();
// let myTime = new Date().toLocaleString();
// console.log(myTime);

// console.log(Date.now());

// const nowDate = new Date();
// console.log(nowDate.getDate());
// console.log(nowDate.getDay());

// function goBack() {
//     window.history.back();
// }

// function heyMan() {
//     if (heyMan == true) {
//         document.write("<title>Iam Hey Man</title>");
//     } else {
//         document.write(
//             `<button class="btn btn-primary" onclick="hello()">Hi Ranju</button> `
//         );
//         document.write("Iam Hey Man<br>");
//     }
// }

// function hello() {
//     document.write("Hi Ranju ❤❤❤", "<br>");
// }

// const newMan = () => {};

// const myName = ["Md", "Ranju", "Amin"];

// const myFullname = [...myName, "Hossan", "Ranju"];

// console.log(myName);
// console.log(myFullname);

// if (myName.includes(myFullname) == "Ranju") {
//     console.log("Yes is in here");
// } else {
//     console.log("Sorry is not here");
// }
// const name = "Md Ranju";
// const email = "mdranju23@gmail.com";
// const age = 19;

// const allName = {
//     name,
//     email,
//     age,
//     print() {
//         console.log(
//             `My Name is ${this.name},
//         My Email is ${this.email},
//         My Age is ${this.age}`
//         );
//     },
// };
// console.log(allName);
// Quokka;
// allName.print();

// const arr = [1, 2, 3];
// const arr2 = ([a, b, c] = arr);

// console.log(arr2);

// const obj = {
//     name: "Md Ranju",
//     email: "mdranju23@gmail.com",
// };

// const { name, email } = obj;

// console.log(`This is My Name: ${name} and This is My Email: ${email}`);

// const myObj = ({ name, email }) => {
//     console.log(`My Name is ${name}, My Email ${email}`);
// };
// myObj({ email, name });

// const heyId = document.querySelector("heyId");

// const newrs = () => {
//     alert("Hello");
// };

// newrs.addEventListener("click", newr);

// const myName = "Md Ranju islma";
// console.log(myName);

// const newFun = () => {};

// let a = 1;
// let b = 2;
// [b, a] = [a, b];

// console.log(a, b);

// const myName = {
//     name: "Md Ranju",
//     job: "Graphic Design",
//     stady: "11th",
//     age: 19,
//     myFamilly: {
//         mather: "Mst. Modina  Khatun",
//         father: "Md Moshrof",
//     },
// };
// for (let value in myName) {
//     console.log(`${myName[value]}`);
// }

// const myAge = myName;
// myAge.map((value, index, arr) => {
//     console.log(index);
// });

// console.log(myAge);
// console.log(typeof myAge);

// const MD = ["Ranju", "Islam", "Hossain", "Amin", "Muhammad"];
// MD.push("Md Ranju islam");
// MD.slice(2);
// console.log(MD);

// for (let i = 0; i <= myName.length; i++) {
//     console.log(myName);
// }

// MD.forEach((value, kye, arr) => {
//     console.log(kye, value, arr);
// });

// MD.map((value, kye, arr) => {
//     console.log(kye, value, arr);
// });

// console.log(object);
// const mdRanju = "Md Ranju ";
// let ranju = "Ranju";
// var ranjuIslam = "RanjuIslam";

// if (ranju === ranju) {
//     console.log(`Islam is here`);
// } else {
//     console.log(`${ranju} is not here`);
// }

// ranju = ranju ? ranju + " Hossain" : ranjuIslam;
// console.log(mdRanju, ranju, ranjuIslam);
// console.log(ranju);

// const mD = ["Ranju", "Islam", "Hossain", "Amin", "Muhammad"];

// mD.map((value, kye, arr) => {
//     console.log(kye, value);
// });

// let fastName = prompt("Enter your fast name");
// let lastName = prompt("Enter your last name");

// let fullName = fastName + lastName;
// document.write(fullName);
// console.log(fullName);
// document.write("<br/>");

// let len = fullName.length;
// document.write(len);
// console.log(len);
// document.write("<br/>");

// let toUpper = fullName.toUpperCase(fullName);
// document.write(toUpper);
// console.log(toUpper);
// document.write("<br/>");

// let towNum = fullName.charAt(2);
// document.write(towNum);
// console.log(towNum);
// document.write("<br/>");

// let towNumUP = towNum.toUpperCase(towNum);
// document.write(towNumUP);
// console.log(towNumUP);

// console.log("md Ranju islam");
// document.write("MY Name Is Md Ranju Islam");
// let newArr = [
//     "My Name is Md Ranju Islam",
//     "My Father Name is Md Mosharof Hossain",
//     "MY Mather Name is MST Modina Khatun",
//     "My Brather Name Is Momin Islam",
//     "MY Sister Name is Mosomie Kahtun",
//     "My SisterInlow Name Is MST Sermin Khtun ",
//     "MY Vatija Name Is Md Abdul Rahim ",
//     "This Is MY Holl Familly Name",
// ];

// newArr.map((name, index) => {
//     console.log(index, name);
// });

// newArr.forEach((value, kye) => {
//     console.log(kye, value);
// });

// var firstNumber = parseFloat(prompt("Enter 1st your number"));
// var secondNumber = parseFloat(prompt("Enter 2nd your number"));

// firstNumber = parseInt(firstNumber, 10);
// secondNumber = parseInt(secondNumber, 10);
// var sub;

// /*---------------Addition---------------*/
// sub = firstNumber + secondNumber;
// document.write(`
// Addition is: ${firstNumber} + ${secondNumber} = ${sub} <br/>`);

// /*---------------Subtraction---------------*/
// sub = firstNumber - secondNumber;
// document.write(
//     `Subtraction is: ${firstNumber} - ${secondNumber} = ${sub}<br/>`
// );

// /*---------------Multiplication---------------*/
// sub = firstNumber * secondNumber;
// document.write(
//     `Multiplication is: ${firstNumber} * ${secondNumber} = ${sub}<br/>`
// );

// /*---------------Division---------------*/
// sub = firstNumber / secondNumber;
// document.write(`Division is: ${firstNumber} / ${secondNumber} = ${sub}<br/>`);

// /*---------------Modulus---------------*/
// sub = firstNumber % secondNumber;
// document.write(`Modulus is: ${firstNumber} % ${secondNumber} = ${sub}<br/>`);

// /*--------------- fahrenheit to celsius---------------*/

// let mainFar = prompt("Enter fahrenheit");
// document.write(`You enter number is ${mainFar}<br/>`);
// if (mainFar == "") {
//     mainFar = "not found";
// }

// let calss = prompt("Enter celsius");
// let far = mainFar * (9 / 5) + 32;

// document.write(`This is your fahrenheit ${far}<br/>`);
// let celsius = (mainFar - 32) * (5 / 9);

// document.write(`This is your Celsius ${celsius}`);

// setInterval(() => {
//     const time = document.querySelector("#time");
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let day_night = "AM";

//     hour === 0 ? (hour = 12) : hour;

// if (hour === 0) {
//     hour = 12;
// }

// if (hour > 12) {
//     day_night = "PM";
//     hour = hour - 12;
// }
// second < 10 ? (second = "0" + second) : "";
// if (second < 10) {
//     second = "0" + second;
// }
// minute < 10 ? (minute = "0" + minute) : "";
// if (minute < 10) {
//     minute = "0" + minute;
// }
// hour < 10 ? (hour = "0" + hour) : "";

// if (hour < 10) {
//     hour = "0" + hour;
// }

// time.textContent = `${hour}:${minute}:${second}:${day_night}`;
// });

// setInterval(() => {
//     const time = document.querySelector("#time");

//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let D_N = "AM";
//     if (hour > 12) {
//         D_N = "PM";
//         hour = hour - 12;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (hour < 10) {
//         hour = "0" + hour;
//     }

//     time.textContent = `${hour}:${minute}:${second}:${D_N}`;
// });

// let num = prompt("Enter your number");

// if (num % 2 == 0) {
// console.log(`Your code is Even ${num} divided`);
//     document.write(`You can do divided "${num}" is Even => জোড়`);
// } else if (num > 0) {
//     document.write(`Your number is "${num}" is Odd => জিরো`);
// } else {
//     document.write(`You can't do divided "${num}" is Odd => বিজোড়`);
// console.log(`Your cdde is Odd ${num} not divided`);
// }

// let restul = prompt("Enter your Masck");
// if (restul > 100 || restul < 0) {
//     document.write(`Sorry ${restul} is not valid`);
// } else if (restul >= 80 && restul <= 100) {
//     document.write("You have got A+");
// } else if (restul >= 70 && restul <= 79) {
//     document.write("You have got A");
// } else if (restul >= 60 && restul <= 69) {
//     document.write("You have got A-");
// } else if (restul >= 50 && restul <= 59) {
//     document.write("You have got B");
// } else if (restul >= 40 && restul <= 49) {
//     document.write("You have got C");
// } else if (restul >= 33 && restul <= 39) {
//     document.write("You have got D");
// } else if (restul == 0) {
//     document.write(`Sorry ${restul} is not valid`);
// } else if (restul == "") {
//     document.write(`Sorry ${restul} is not valid`);
// } else {
//     document.write("You are Fill");
// }

// setInterval(() => {
//     const time = document.querySelector("#time");
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let D_N = "AM";

//     if (hour > 12) {
//         D_N = "PM";
//         hour = hour - 12;
//     }
// if (hour < 10) {
//     hour = "0" + hour;
// }
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }

//     time.textContent = `${hour}:${minute}:${second}:${D_N}`;
// });

// let latter = prompt("Enter a Letter");
// latter = latter.toLowerCase();

// if (
//     latter == "a" ||
//     latter == "e" ||
//     latter == "e" ||
//     latter == "o" ||
//     latter == "u"
// ) {
//     document.write(`Your latter is "${latter.toUpperCase()}" Vowel`);
// } else if (latter == "") {
//     document.write(`Warning you not enter any value`);
// } else {
//     document.write(`Your latter is "${latter.toUpperCase()}" Consonant`);
// }

// const numBer = prompt("Enter your digit");

// if (numBer == 0) {
//     document.write(`You enter "${numBer}" = Zero`);
// } else if (numBer == 1) {
//     document.write(`You enter "${numBer}" = One`);
// } else if (numBer == 2) {
//     document.write(`You enter "${numBer}" = Two`);
// } else if (numBer == 3) {
//     document.write(`You enter "${numBer}" = Three`);
// } else if (numBer == 4) {
//     document.write(`You enter "${numBer}" = Four `);
// } else if (numBer == 5) {
//     document.write(`You enter "${numBer}" = Five`);
// } else if (numBer == 6) {
//     document.write(`You enter "${numBer}" = Six`);
// } else if (numBer == 7) {
//     document.write(`You enter "${numBer}" = Seven`);
// } else if (numBer == 8) {
//     document.write(`You enter "${numBer}" = Eight`);
// } else if (numBer == 9) {
//     document.write(`You enter "${numBer}" = Nine`);
// } else if (numBer == 10) {
//     document.write(`You enter "${numBer}" = Ten`);
// } else {
//     document.write(` Invalid "${numBer.toUpperCase()}" is not found`);
// }

// switch (numBer) {
//     case "0":
//         document.write(`You enter "${numBer}" = Zero`);
//         break;
//     case "1":
//         document.write(`You enter "${numBer}" = One`);
//         break;
//     case "2":
//         document.write(`You enter "${numBer}" = Two`);
//         break;
//     case "3":
//         document.write(`You enter "${numBer}" = Three`);
//         break;
//     case "4":
//         document.write(`You enter "${numBer}" = Four `);
//         break;
//     case "5":
//         document.write(`You enter "${numBer}" = Five`);
//         break;
//     case "6":
//         document.write(`You enter "${numBer}" = Six`);
//         break;
//     case "7":
//         document.write(`You enter "${numBer}" = Seven`);
//         break;

//     case "8":
//         document.write(`You enter "${numBer}" = Eight`);
//         break;
//     case "9":
//         document.write(`You enter "${numBer}" = Nine`);
//         break;
//     case "10":
//         document.write(`You enter "${numBer}" = Ten`);
//         break;
//     default:
//         document.write(
//             ` Invalid Digit "{${numBer.toUpperCase()}}" is not found`
//         );
// }

// let latter = prompt("Enter your digit");
// latter = latter.toLowerCase();

// switch (latter) {
//     case "a":
//         document.write(`You enter "${latter}" is Vowel😀 `);
//         break;
//     case "e":
//         document.write(`You enter "${latter}" is Vowel😀 `);
//         break;
//     case "i":
//         document.write(`You enter "${latter}" is Vowel😀 `);
//         break;
//     case "o":
//         document.write(`You enter "${latter}" is Vowel😀 `);
//         break;
//     case "u":
//         document.write(`You enter "${latter}" is Vowel😀 `);
//         break;
//     case "":
//         document.write(`Invalid you not enter any value😔`);
//         break;
//     default:
//         document.write(`You enter "${latter}" is Consonant🙂`);
// }

// let latter = prompt("Enter your digit");
// latter = latter.toLowerCase();

// switch (latter) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         document.write(`You enter "${latter}" is Vowel😀 `);
//         break;
//     case "":
//         document.write(`Invalid you not enter any value😔`);
//         break;
//     default:
//         document.write(`You enter "${latter}" is Consonant🙂`);
// }

// for (let i = 0; i <= 10; i++) {
// document.write("Bangladesh <br/>");
//     console.log(i + " Bangladesh");
// }

// let num = prompt("Enter number");
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//     sum = sum + i;
// }
// document.write(sum);

// for (let i = 0; i < 5; i++) {
//     let num = parseInt(prompt("Enter number"));
//     let num2 = parseInt(prompt("Enter number"));
//     let sum = num + num2;
//     document.write("Resutl = " + sum + "<br/>");
// }

// let i = 0;
// while (i < 5) {
//     i++;
//     let num = parseInt(prompt("Enter number"));
//     let num2 = parseInt(prompt("Enter number"));
//     let sum = num + num2;
//     document.write("Resutl = " + sum + "<br/>");
// }

// let i = 0;
// do {
//     i++;
//     let num = parseInt(prompt("Enter number"));
//     let num2 = parseInt(prompt("Enter number"));
//     let sum = num + num2;
//     document.write("Resutl = " + sum + "<br/>");
// } while (i < 5);

// let i = 0;
// do {
//     i++;
//     let num = prompt("Enter number");
// let num2 = prompt("Enter number");
// let sum = num + num2;
//     document.write(i + " Resutl = " + num + "<br/>");
// } while (i < 5);

// let myArr = [
//     "Md Ranju",
//     "Ranju",
//     "Islam",
//     "Hossain",
//     "Amin",
//     "AminHossain",
//     "Muhammad",
//     "Muhammad Ranju",
//     "Ranju Islam",
//     "Ranju Hossain",
// ];

// for (let i = 0; i <= myArr.length; i++) {
//     document.write(i + " " + myArr[0] + "<br/>");
// }

// myArr.forEach((value, kye) => {
// document.write(kye + " " + value + " <br/>");
//     console.log(kye + " " + value);
// });

// myArr.map((value, kye) => {
//     console.log(kye + " " + value);
// document.write(kye + " " + value + " <br/>");
// });

// let i = 1;
// let sum = 60;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         sum = sum + i;
//     }
//     i++;
// }
// document.write(sum);

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 != 0) {
//         continue;
//     }
//     document.write(" " + i);
// }

// let number = prompt("Enter your Number");

// let number2 = number >= 0 ? "You it is Positive " : "Sorry it is Negative";
// document.write(number2);

// function add(num1, num2) {
//     let resutl = num1 + num2;
//     document.write("This is your " + resutl + " Addition<br/>");
// }
// add(2, 3);

// function sub(num1, num2) {
//     let resutl = num1 - num2;
//     document.write("This is your " + resutl + " Subtraction<br/>");
// }
// sub(5, 3);
// function mal(num1, num2) {
//     let resutl = num1 * num2;
//     document.write("This is your " + resutl + " Dultiplication<br/>");
// }
// mal(3, 6);
// function div(num1, num2) {
//     let resutl = num1 / num2;
//     document.write("This is your " + resutl + " Division<br/>");
// }
// div(7, 5);
// function mod(num1, num2) {
//     let resutl = num1 % num2;
//     document.write("This is your " + resutl + " Modulus<br/>");
// }
// mod(4, 5);
// let store = document.write.querySelector(".form-select #sele");
// let myDash = [
//     "Dhaka",
//     "Chittagong",
//     "Khulna",
//     "Rajshahi",
//     "Gazipur",
//     "Sylhet",
//     "Mymensingh",
// ];
// myDash.push("Barisal", "Rangpur", "Comilla", "Narayanganj");
// document.write(myDash + "<br/>");

// for (let i = 0; i < myDash.length; i++) {
//     document.write(i + " " + myDash[i] + "<br/>");
// }

// document.write("<br/>");
// myDash.map((value, kye) => {
//     document.write(kye + " " + value + "<br/>");
// });
// let i = 0;
// while (i < myDash.length) {
//     i++;
//     store.innerHTML = myDash;
// }

// let myDash = [
//     "Dhaka",
//     "Chittagong",
//     "Khulna",
//     "Rajshahi",
//     "Gazipur",
//     "Sylhet",
//     "Mymensingh",
// ];
// console.log(myDash);

// myDash.shift();
// myDash.pop();
// myDash.unshift("My All city");

// myDash.splice(2, 0, "My All");
// let newa = myDash.reverse();

// console.log(newa);

// let numbers = [2, 52, 25, 45, 30, 70, 9, 3, 1];

// numbers.sort((a, b) => {
// return a - b;
//     return b - a;
// });
//  console.log(numbers);

// function Student(name, age, cgp, lang) {
//     this.name = name;
//     this.age = age;
//     this.cgp = cgp;
//     this.lang = lang;
//     this.result = function () {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgp);
//         console.log(this.lang);
//     };
// }

// let student1 = new Student("Md Ranju Islam", 19, 3.96, [
//     "Banglai",
//     "Hindi",
//     "English",
// ]);
// let student2 = new Student("Amin Hossain", 18, 3.68, [
//     "Hindi",
//     "English",
//     "Japanisee",
// ]);
// let student3 = new Student("Muhammad Ranju", 20, 4.68, [
//     "Banglai",
//     "Chinese",
//     "Hindi",
//     "English",
// ]);

// student1.result();
// student2.result();
// student3.result();

// let myDash = [
//     "Dhaka",
//     "Chittagong",
//     "Khulna",
//     "Rajshahi",
//     "Gazipur",
//     "Sylhet",
//     "Mymensingh",
// ];

// myDash.map((value, index) => {
//     document.getElementById("sele").textContent = value;
// });

// for (let i = 0; i < myDash.length; i++) {
//     document.getElementById("sele").innerHTML = myDash[i];
// }

// document.getElementById("hadding1").innerHTML = "Hello";
// document.getElementById("hadding2").innerHTML = "Bye";

// var math = Math.floor(4.8);
// var math = Math.ceil(2.8);
// var math = Math.round(4.3);
// var math = Math.max(4, 5, 8, -9);
// console.log(math);

// let number1 = parseInt(prompt("Enter number"));
// let number2 = parseInt(prompt("Enter number"));

// let max = Math.max(number1, number2);
// document.write(`Your Maximum Number is "${max}"`);

// let random = Math.floor(Math.random() * 1000 + 1);
// console.log(random);

// let youWin = 0;
// let youLoss = 0;

// for (let i = 0; i < 5; i++) {
//     let number = parseInt(prompt("Enter number from up to 1 : 5 "));
//     let randomNumber = Math.floor(Math.random() * 10);

//     if (number == randomNumber) {
//         console.log(`You have win the game ${randomNumber}`);
//         alert(`You have win the game ${randomNumber}`);
//         youWin++;
//     } else {
//         console.log(`You have Lost the game "${randomNumber}"`);
//         youLoss++;
//     }
// }
// document.write(`You Win the game ${youWin}<br/>`);
// document.write(`You Lost the game ${youLoss}`);

// let date = new Date();

// let year = date.getFullYear();
// let year = date.getMonth();
// let year = date.getDay();
// let year = date.toTimeString();
// let year = date.getDate();

// console.log(year);

// let click1 = document.getElementById("click1");
// let click2 = document.getElementById("click2");

// console.log(click1);
// console.log(click2);

// let myimage = document.querySelector("#myImage");

// function myPik2() {
//     myimage.src = "image/light/lightOff.png";
// }

// function myPik1() {
//     myimage.src = "image/light/lightOn.png";
// }

// let images = [
//     "image/1.jpg",
//     "image/2.jpg",
//     "image/3.jpg",
//     "image/4.jpg",
//     "image/5.jpg",
//     "image/6.jpg",
//     "image/7.jpg",
// ];

// let myImage = document.querySelector("#imge");

// let count = 0;
// function next() {
//     count++;
//     if (count >= images.length) {
//         count = 0;
//         myImage.src = images[count];
//     } else {
//         myImage.src = images[count];
//     }
// }

// function prev() {
//     count--;
//     if (count < 0) {
//         count = images.length - 1;
//         myImage.src = images[count];
//     } else {
//         myImage.src = images[count];
//     }
// }

// let myPara = document.querySelector("#paraId");
// function addStyle() {
// myPara.style.color = "red";
// myPara.style.fontSize = "50px";
//     myPara.classList.add("para-style");
// }

// function addRemove() {
//     myPara.classList.remove("para-style");
// }

// let myBtn = document.querySelector("#clickId").addEventListener("click");
// myBtn.classList.add();
// let paraId = document.querySelector("#paraId");
// let myBtn = document.querySelector("#clickId");

// myBtn.addEventListener(
//     "click",
//     (myFun = () => {
// paraId.style.color = "red";
//         paraId.classList.add("para-style");
//     })
// );
// let myBtn2 = document
//     .querySelector("#clickId2")
//     .addEventListener("click", () => {
//         paraId.style.transition = " all 0.3s ease 0s";
//         paraId.classList.remove("para-style");
//     });

// let padraGraph = document.querySelector("#paragraph");
// padraGraph.addEventListener("mouseover", () => {
// padraGraph.style.cursor = "pointer";
//     padraGraph.classList.add("para-style");
// });
// padraGraph.addEventListener("mouseout", () => {
// padraGraph.style.cursor = "pointer";
//     paraId.style.transition = " all 0.3s ease 0s";
//     padraGraph.classList.remove("para-style");
// });
// let len = document.querySelectorAll(".mybutton").length;
// for (let i = 0; i < len; i++) {
//     document.querySelectorAll(".mybutton")[i].addEventListener("click", () => {
//         let btn = this.innerHTML;
//         document.querySelector("h1").innerHTML = btn + " is Clicked";
//     });
// }
// let len = document.querySelectorAll(".mybutton").length;

// for (let i = 0; i < len; i++) {
//     let myBtn = document.querySelectorAll(".mybutton");
//     myBtn[i].addEventListener("click", function () {
//         let text = this.innerHTML;
//         document.querySelector("h1").innerHTML = `${text} is Clicked😁`;
//     });
// }

// let btnlen = document.querySelectorAll(".mybutton").length;
// for (let i = 0; i < btnlen; i++) {
//     document
//         .querySelectorAll(".mybutton")
//         [i].addEventListener("click", function () {
//             let text = this.innerHTML;
//             console.log(text);
//             myAudio(text);
//             myAnimation(text);
//         });
// }

// document.addEventListener("keypress", function (event) {
//     let eve = event.key;
//     myAudio(eve);
//     myAnimation(eve);
// });

// let myAudio = (text) => {
//     switch (text) {
//         case "a":
//             let audio = new Audio("sounds/a.mp3");
//             audio.play();
//             break;
//         case "b":
//             let audio1 = new Audio("sounds/b.mp3");
//             audio1.play();
//             break;
//         case "c":
//             let audio2 = new Audio("sounds/c.mp3");
//             audio2.play();
//             break;
//     }
// };

// function myAnimation(text) {
//     let selectBtn = document.querySelector("." + text);
//     selectBtn.classList.add("nStyle");

//     setTimeout(function () {
//         selectBtn.classList.remove("nStyle");
//         selectBtn.style.transition = "all 0.3s ease 0s";
//     }, 1000);
// }

// for (let i = 0; i < btnlen; i++) {
//     let myBtn = document.querySelectorAll(".mybutton");
//     myBtn[i].addEventListener("click", function () {
//         let text = this.innerHTML;
//         document.querySelector(
//             "h1"
//         ).innerHTML = `Sound "${text}" playing now😁`;
//     });
// }

// let myArea = document.querySelector("#textArea");
// let cound = 0;
// myArea.addEventListener("keypress", function (event) {
//     cound++;
//     let key = event.key;
//     document.querySelector(
//         "p"
//     ).innerHTML = `You must be type 15 character ${key} = ${cound}`;
//     if (cound >= 15) {
//         alert("Stop Now!!! You must be type 15 character ");
//     }
// });

// try {
//     let myArea = document.querySelector("#textArea");
//     let cound = 0;
//     myArea.addEventListener("keypress", function (event) {
//         cound++;
//         let key = event.key;
//         document.querySelector(
//             "p"
//         ).innerHTML = `You must be type 15 character ${key} = ${cound}`;
//         if (cound >= 15) {
//             alert("Stop Now! You must be type 15 character ");
//         }
//     });
// } catch (err) {
//     console.log("Stop Now " + err);
// } finally {
// }

// let chackId = document.querySelector("#chackId");
// let textId = document.querySelector("#textId");

// chackId.addEventListener("click", () => {
//     let val = textId.value;
//     document.querySelector("p").innerHTML = `Your typig is "${val}"`;

//     try {
//         if (val < 5) {
//             throw "You Number is to low";
//         } else if (val > 10) {
//             throw "You Number is to Hi";
//         } else if (val == 0) {
//             throw "You can't to empty";
//         }
//     } catch (err) {
//         console.log(err);
//         document.write(err);
//     }
// });

// const mtFun = (x, y = `Plz enter any number`, ...z) => {
//     console.log(`x = ${x} y = ${y}`);
// };

// mtFun(20);

// <?php

// $server = "localhost";
// $user = "id15641348_localhost";
// $passowrd = "Mdranju123//";
// $databases = "id15641348_designshop";
// $con = mysqli_connect($server, $user, $passowrd, $databases);

// const myObj = (name, age) => {
//     return {
//         name,
//         age,
//     };
// };
// console.log(myObj("Md Ranju", 19));

// const myAbout = {
//     myName() {
//         return "Hello Ia am Md RAnju Islam ";
//     },
// };
// console.log(myAbout.myName());

// let example;

// example = Number(false);
// example = Number("2562");
// example = Number("Md Ranju Islam");
// example = Number(2.01);

// console.log(example);
// console.log(typeof example);
// console.log(example.length);

// let myDash = [
//     "Dhaka",
//     "Chittagong",
//     "Khulna",
//     "Rajshahi",
//     "Gazipur",
//     "Sylhet",
//     "Mymensingh",
// ];

// let myObj = {
//     name: "Md Ranju",
//     age: 19,
//     work: "Graphice Design",
//     salary: "Taka nai FaKa",
// };

//* object is not soppot for of loop  // soppot only for in loop

// for (let x of myObj) {
//     console.log(x);
// }

// for (let value in myObj) {
//     console.log(`${value} : ${myObj[value]}`);
// }

// for (let x = 0; x < myObj.length; x++) {
//     console.log(`${x} : ${myObj[x]}`);
// }
// let myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mySelf = [
//     "Md Ranju ",
//     "I am a Student",
//     "I am Read In 12 Calass ",
//     "My Familly Mamber is 8 Parsion",
//     "My Country Bangladesh",
//     "Now I am Live in Rajshahi",
//     "My Area is Name Is Shreerampur (IslamPur)",
// ];
// for (let x = 0; x < mySelf.length; x++) {
//     console.log(`${x} : ${mySelf[x]}`);
// }

// mySelf.forEach(function (value, kye) {
//     console.log(`${kye} : ${value}`);
// });

// let myNumber = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// let newNumber = [];
// myNumber.forEach(function (value, index, arr) {
// arr[index] = value * 2;
//     newNumber.push(value % value);
// });
// console.log(newNumber);

// let students = [
//     {
//         id: 101,
//         name: "Md Ranju",
//         gpa: 2.65,
//     },
//     {
//         id: 102,
//         name: "Md Amin",
//         gpa: 2.45,
//     },
//     {
//         id: 103,
//         name: "Md Hossain",
//         gpa: 4.81,
//     },
//     {
//         id: 104,
//         name: "Md Islam",
//         gpa: 3.72,
//     },
// ];

// const restul = () => {
//     return students
//         .filter((value) => {
//             return value.gpa >= 2.5;
//         })
//         .map((y) => {
//             return y.id + " : " + y.name + " : " + y.gpa;
//         });
// };
// console.log(restul());

// setInterval(() => {
//     const time = document.querySelector("#time");

//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes;
//     let second = date.getSeconds;
//     let day_night = "AM";

//     if (hour > 12) {
//         day_night = "PM";
//         hour = hour - 12;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (hour < 10) {
//         hour = "0" + hour;
//     }

//     time.textContent = `${hour}:${minute}:${second}:${day_night}`;
// });

// setInterval(() => {
//     const time = document.querySelector("#time");

//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let D_N = "AM";
//     if (hour > 12) {
//         D_N = "PM";
//         hour = hour - 12;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     if (minute < 10) {
//         minute = "0" + minute;
//     }
//     if (hour < 10) {
//         hour = "0" + hour;
//     }

//     time.textContent = `${hour}:${minute}:${second}:${D_N}`;
// });
// console.log("Hello World!");

// let myNumber = "6";
// let myNumber2 = 2;
// let newNumber = Number.parseInt(myNumber);
// let res = newNumber + myNumber2;

// let str = myNumber2.toString();
// console.log(typeof newNumber);
// console.log(typeof str);
// console.log(res);

// console.log(Boolean(-0));
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

// console.log(Boolean(25));
// console.log(Boolean("hfj"));

// let a = 10;
// let b = 6;
// console.log(a % b);
// let mySum = 20;

// console.log(Math.E);

// let passCap = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
// ];
// let passSml = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
// ];
// let passNum = [0, 1, 2, 3, 4, 5, 6, , 7, 8, 9];
// let passHas = [
//     "~",
//     "!",
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//     "&",
//     "*",
//     "(",
//     ")",
//     "_",
//     "-",
//     "=",
//     "=",
//     "{",
//     "}",
//     "[",
//     "]",
//     ";",
//     "'",
//     "<",
//     ">",
//     "|",
//     ":",
//     "/",
//     "+",
// ];

// let allArr = passCap + passSml + passNum + passHas;

// for (let i = 0; i < allArr.length; i++) {
//     console.log(Math.round(Math.random(allArr[i]) * allArr.length + 1));
// }
// console.log(Math.random(passCap));

// let abcl = 4.568;
// console.log(Math.abs(abcl));
// console.log(Math.floor(abcl));
// console.log(Math.ceil(abcl));
// console.log(Math.round(abcl));
// console.log(Math.pow(2, 3));
// console.log(Math.pow(2, 5));

// let date = new Date();
// console.log(date.toLocaleString());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getHours() - 12);
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let hours = date.getHours() - 12;
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let days = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// console.log(`${hours}:${minutes}:${seconds}  ${days}/${month}/${year}`);

// let a = -2.25611;
// let b = -2;

// if (a > b) {
//     console.log("A is gaterdan number B");
// } else if (b > a) {
//     console.log("B is gaterdan number A");
// } else if (a === b) {
//     console.log("Ther are is same number");
// } else {
//     console.log("Not matching");
// }

// let num = 1.3;
// if (num % 2 === 0) {
//     console.log(num + " is Even number");
// } else if (num % 2 == 1) {
//     console.log(num + " is Odd number");
// } else {
//     console.log("Not Match anyone");
// }

// let nums = 0;
// if (nums % 2 === 0) {
//     console.log(nums + " is Even number");
// } else if (nums % 2 == 1) {
//     console.log(nums + " is Odd number");
// } else if (nums === 0) {
//     console.log(nums + " is zero number");
// } else {
//     console.log(nums + " is Not Match");
// }

// let date = new Date();
// let today = date.getDay();

// if (today === 0) {
//     console.log("Today is Sunday");
// } else if (today === 1) {
//     console.log("Today is Monday");
// } else if (today === 2) {
//     console.log("Today is Tuesday");
// } else if (today === 3) {
//     console.log("Today is Wednesday");
// } else if (today === 4) {
//     console.log("Today is Thursday");
// } else if (today === 5) {
//     console.log("today is Friday");
// } else if (today === 6) {
//     console.log("Today is Saturday");
// } else {
//     console.log("Your day is not found");
// }

// switch (today) {
//     case 0:
//         console.log("Today is Sunday");
//         break;
//     case 1:
//         console.log("Today is Monday");
//         break;
//     case 2:
//         console.log("Today is Tuesday");
//         break;
//     case 3:
//         console.log("Today is Wednesday");
//         break;
//     case 4:
//         console.log("Today is Thursday");
//         break;
//     case 5:
//         console.log("Today is Friday");
//         break;
//     case 6:
//         console.log("Today is Saturday");
//         break;
//     default:
//         console.log("Your day is not found");
// }

// let a = 10;
// let b = 20;
// let c = 10;
// let d = 40;

// if (a > b && c > d) {
//     console.log("A is gather than B and C is gather than D");
// } else {
//     console.log("Not matching some one");
// }

// if (a > b || c > d) {
//     console.log("A is gather than B or C is gather than D");
// } else {
//     console.log("Not matching some one");
// }

// if (!(a > b) && !(c > d)) {
//     console.log("A is gather than B or C is gather than D");
// } else {
//     console.log("Not matching some one");
// }

// let n = 3;
// let even = "";
// let odd = "";

// n % 2 === 0 ? (even = `${n} is EVEN NUMBER`) : (odd = `${n} is ODD NUMBER`);
// console.log(even + odd);

// for (let a = 0; a < 10; a++) {
//     console.log(a + 1 + " AMIN || HOOSAIN");
// }

// let i = 0;
// while (i < 10) {
//     console.log(i + 1 + " AMIN || HOOSAIN");
//     i++;
// }

// for (let i = 1; i <= 10; i++) {
//     if (i === 0) {
//         console.log(i + " is not any number");
//     } else if (i % 2 === 0) {
//         console.log(i + " EVEN");
//     } else if (i % 2 === 1) {
//         console.log(i + " ODD");
//     }
// }

//*this is filter for loop is use on find your item
// let myArr = [1, 2, 3, 4, 5, 6, 5, 9, 4, 6, 5, 45, 598, 31];
// let myArr = ["Md", "Mosharof Hossain", "Md Ranju", "Amin Hossain", "Ranju"];

// let find = "Amin Hossain";
// let isfound = false;
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] === find) {
//         console.log(`${myArr[i]} is found index is ${i}`);
//         isfound = true;
//         break;
//     }
// }
// if (!isfound) {
//     console.log("Data not found " + find);
// }

// let num = [1, 2, 3, 4, 5, 6, 74, 8, 9];

// let rev = num.reverse();
// console.log(rev);

// console.log(num, ...num);
// let i = 0;
// while (i <= 100) {
//     console.log(i + " Sorry");
//     i++;
// }

// let myObj = {
//     myName: "Md Ranju",
//     myAge: 19,
//     myStaduey: "12th",
//     myWork: "Design",
// };
// console.log(myObj);
// let myArr = [
//     "My Name is Md Ranju Islam",
//     "My Father Name is Md Mosharof Hossain",
//     "My Mather Name is MST Modina Khatun",
//     "My Brather Name is Md Momin Islam",
//     "My Sis Name is MST Mousomi Kahtun",
// ];

// for (let i in myObj) {
//     console.log(i + " : " + myObj[i]);
// }

// for (let x of myObj) {
//     console.log(x);
// }
// for (let i = 0; i <= myArr.length; i++) {
//     console.log(i + " : " + myArr[i]);
// }

//* Array programming
// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let malt = 2;

// let sum = 0;
// for (let i = 0; i < myArr.length; i++) {
// console.log(` ${i + 1} * ${malt}  = ${myArr[i] * malt}`);
//     console.log(i + 1 + " * " + malt + " = " + myArr[i] * malt);
// }
//* Array EVEn Number
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 2 === 0) {
//         console.log(myArr[i]);
//     }
// }
// console.log(sum);/

//* Array EVEN Number
// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 2 === 1) {
//         console.log(myArr[i]);
//         let res = myArr[i];
//         for (let j = 0; j < res.length; j++) {
//             sum = sum + res[j];
//             console.log(res);
//         }
//     }
// }

// for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] % 2 === 0) {
// console.log(myArr[i]);
//     }
//     let result = myArr[i];
//     for (let i = 0; i < result.length; i++) {
//         sum = sum + result[i];
//         console.log(sum);
//     }
// }

// console.log(sum);
// for (let i = 0; i < myArr.length; i++) {
//     sum = sum + myArr[i];
// }
// console.log(sum);

// let longArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// longArr.splice(3, 0, 9);
// longArr.splice(3, 1, 55);
// longArr.pop();
// longArr.shift();
// longArr.unshift(9);
// console.log(longArr);

// let myallName = [56, 24, 789, 35, 896, 04, 97, 325];
// let find = 896;
// let isHave = false;

// for (let i = 0; i < myallName.length; i++) {
//     if (myallName[i] === find) {
//         console.log(`Data is found on (${find}) index is (${i})`);
//         isHave = true;
//         break;
//     }
// }

// if (!isHave) {
//     console.log(`Data not found in (${find})`);
// }

// let point = {
//     x: 10,
//     y: 20,
//     z: 30,
// };
// point.x = 35;
// let show = ["x"];
// delete point.x;

// console.log(point);

// let point2 = {
//     a: 20,
//     b: 30,
//     c: 40,
//     d: 50,
// };

// let objPoints = "a";
// console.log(objPoints + " : " + objPoints in point2);

// if (objPoints in point2) {
//     console.log(true + " : " + objPoints + " is here");
// } else {
//     console.log(false + " : " + objPoints + " is not here!");
// }

// for (let i in point2) {
// console.log(i);
//     console.log(i + ": " + point2[i] + ",");
// }

// let inputValue = document.getElementById("inputId");

// if (inputValue.value === "") {
//     document.getElementById("inputSpan").innerHTML = "Your name Is required";
// }

//* function programming

// function add(a, b) {
//     console.log(a + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
//     console.log(a % b);
// }

// add(10, 20);

// let arr1 = [4, 4, 9, 4];
// let arr2 = [5, 7, 9, 2, 3];
// let arr3 = [85, 41, 65, 1];

// function sumOfArrays(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// sumOfArrays(arr1);
// sumOfArrays(arr2);
// sumOfArrays(arr3);

// let date = new Date();
// console.log(date.getFullYear);

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getDate())
// function add(a, b) {
//     return a + b;
// }
// console.log(add(5, 65));

// for (var i = 0; i < 10; i++) {
//     console.log("*");
//     for (var j = 0; j < i; j++) {
//         console.log("*");
//     }
// }

// let myObj = {
//     myName: "Md Ranju",
//     myAge: 19,
//     myStaduey: "12th",
//     myWork: "Design",
// };

// console.log(myObj);

// let makeString = JSON.stringify(myObj);
// console.log(makeString);
// console.log(typeof makeString);

// let makeObj = JSON.parse(makeString);
// console.log(typeof makeString);
// console.log(makeObj);

// let myArr = [1, 2, 3, 4, 5];

// let sum = 0;
// myArr.forEach(function (value, index, array) {
//     sum += value;
// });

// console.log(sum);

// let sqrArr = myArr.map(function (value) {
//     return Math.floor(Math.random() * 1000);
// });

// console.log(sqrArr);

// function myMap(arrF, cb) {
//     let newArr = [];
//     for (let i = 0; i < arrF.length; i++) {
//         let temp = cb(arrF[i], i, arrF);
//         newArr.push(temp);
//     }
//     return newArr;
// }

// let qb = myMap(myArr, function (value, index, arr) {
//     return value * value;
// });

// let malt = myMap(myArr, function (value) {
//     return value * 10;
// });

// let divided = myMap(myArr, function (value) {
//     return value / 10;
// });

// console.log(qb);
// console.log(malt);
// console.log(divided);

// let myArr = [58, 96, 67, 7, 3, 6, 5, 1, 2, 4, 9, 6];
// let val = 7;
// let filArr = myArr.filter(function (value) {
//     return value > val;
// });

// console.log(filArr);

// let myObj = [
//     {
//         name: "Ranju",
//         age: 19,
//     },
//     {
//         name: "Amin",
//         age: 18,
//     },
//     {
//         name: "Hossain",
//         age: 20,
//     },
//     {
//         name: "Muhammad",
//         age: 21,
//     },
//     {
//         name: "Kal",
//         age: 22,
//     },
// ];

// myObj.sort((por, nag) => {
//     if (por.name > nag.name) {
//         return 1;
//     } else if (por.name < nag.name) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(myObj);

// myArr.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(myArr);

// function a() {
//     d();
//     console.log("Hello Function A");
// }

// function b() {
//     c();
//     console.log("Hello Function B");
// }
// function c() {
//     console.log("Hello Function C");
// }
// function d() {
//     b();
//     console.log("Hello Function D");
// }

// a();

// function test() {
//     let msg = "I am a function of Closure ";

//     return function () {
//         console.log(msg);
//     };
// }

// let sayMsg = test();

// sayMsg();

// for (let i = 0; i <= 5; i++) {
//     (function (n) {
//         setTimeout(function () {
//             console.log(n);
//         }, 1000 * n);
//     })(i);
// }

// let num1 = 25;
// let num2 = 25;

// let myCal = {
//     add1: num1,
//     abb2: num2,

//     addiFunc: function () {
//         return this.add1 + this.abb2;
//     },
//     maltFunc: function () {
//         return this.add1 * this.abb2;
//     },
// };

// let sub = myCal.addiFunc();
// let man = myCal.maltFunc();

// console.log(sub);
// console.log(man);

// let num = 10;
// for (let i = 1; i <= 10; i++) {
//     let myLoop = `${num} x${i} = ${i * num}`;
// console.log(num + " x" + i + " = " + i * num);
//     console.log(myLoop);
// }
// console.log(typeof num);

// function myFunc(c, d) {
//     console.log(this);
//     console.log(this.a + this.b + c + d);
// }
// myFunc.call({ a: 66, b: 20 }, 10, 30);
// myFunc.apply({ a: 100, b: 200 }, [10, 30]);

// let testBind = myFunc.bind({ a: 100, b: 200 });
// testBind(20, 60);
// let a;
// console.log(a);
// a = 10;

// let test;
// test = "Hello Rajshahi";
// test1 = "Hello Bangladesh";

// console.log(test1, test);

// let test = "Hello";
// console.log(test);
// let test1 = "Hello2";
// console.log(test1);

// function add(myFunc) {
//     return myFunc();
// }
// console.log(
//     add(function () {
//         return "Hello Function";
//     })
// );

// let mySelf = {
//     name: "Md Ranju",
//     age: 19,
//     stady: "12th class",
// };

// console.log(
//     `My Name is ${mySelf.name}, I am ${mySelf.age} years old and I am Stady in ${mySelf.stady}`
// );

// console.log(mySelf.name.padStart(14));
// console.log(mySelf.name.padEnd(14, "*"));

// function my() {
//     console.log(this);
// }
// my();

// let myObj = {
//     name: "Md Ranju",
//     myFun: function () {
//         setTimeout(() => {
//             console.log(`Hello ${this.name}`);
//         }, 100);
//     },
// };
// myObj.myFun();

// let obj = {
//     name: "Md Ranju Islam",
//     age: 19,
//     address: "Rajshahi",
//     nowFun: function () {
//         setTimeout(() => {
// console.log(this.name, this.age);
//         }, 100);
//     },
// };
// obj.nowFun();

// let sqr = (n = 0) => {
//     return n * n;
// };

// let resObj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
// };

// let resObj2 = {
//     ...resObj,
// };

// function addChild(...rest) {
//     for (let i = 0; i < rest.length; i++) {
//         return rest[i];
//     }
// }
// console.log(addChild(1, 2, 3, 4, 5));

// let a = 10;
// let b = 20;

// let objAB = {
//     a,
//     b,
// };
// console.log(objAB);

// let dObj = {
//     name: " Md Ranju",
//     email: "mdranju@gmail.com",
//     address: {
//         city: "Rajshahi",
//         country: "Bangladesh",
//     },
// };

// let {
//     name,
//     email,
//     address: { city, country },
// } = dObj;
// console.log(
//     `My Name is ${name}, My Email address is ${email}, and M    y address is ${city}, ${country}`
// );
// const mySelfAbout =
//     " hi i am md ranju islam my father name is md mosharof hsooain my mother name is mst modina khatun my sister name is momshim khatun my brother name is md momin islam this is my all famlly mambes and ami a last chaild of my mather and father that all my shlf";

// const myArray = [1, 2, 3, 4, , 5, 6];
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === 2) {
//         break;
//     }
// console.log(myArray[i]);
// }

//*After the Namaz i will make a javascript clock Okk Bro!
// setInterval(() => {
//     let time = document.getElementById("timeSpan");
//     let timeU = document.getElementById("timeU");
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     let days = "AM";

//     if (hour > 12) {
//         days = "PM";
//         hour = hour - 12;
//     }
//     if (second < 10) {
//         second = "0" + second;
//     }
//     if (minute < 10) {
//         minute = "0" + minute;
//     }

//     time.innerHTML = `${hour}:${minute}:${days}`;
// });

// var a = { a: 10 },
//     b = { b: 20 };
// let set = new Set([a, b]);
// a = null;
// console.log(set);

// class Reactagel {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     name = "Md Ranju";
//     drow() {
//         console.log("Drowing...");
//     }
// }
// let react1 = new Reactagel(25, 32);
// console.log(react1);

// let jsonObj = "https://jsonplaceholder.typicode.com/users";

// let xhr = new XMLHttpRequest();

// async function fathData() {
//     let res = await fetch(jsonObj);
//     let data = await res.json();
//     let name = data.map((u) => u.name);
//     console.log(name);
// }
// fathData();

// let nowS = `Hello`;
// console.log(nowS);

// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2));

// function sub(a, b) {
//     let result = a - b;
//     console.log(result);
// }

// sub(10, 5);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// function add(arrays) {
//     let sum = 0;
//     for (let i = 0; i < arrays.length; i++) {
//         sum += arrays[i];
//     }
//     console.log(sum);
// }
// add(arr3);

// //*sum with arguments function
// function samson() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
// samson(1, 2, 3, 4, 5);

// //*sum with rest parameter function
// function samson1(...sub) {
//     let sum = 0;
//     for (let i = 0; i < sub.length; i++) {
//         sum += sub[i];
//     }
//     console.log(sum);
// }
// samson1(1, 2, 3, 4, 5);

// function add(a, b, c) {
//     console.log("A:" + a + " B:" + b + " C:" + c);
// }
// add(1, 2);

// function add(a, b, c) {
//     console.log("A:" + a + " B:" + b + " C:" + c);
// }
// add(1, 2, 3);

// function parson(name, email) {
//     return `Name is ${name} and Email is ${email}`;
// }

// console.log(parson("Md Ranju", "mdranju23@gmail.com"));

// let addtiton = function (name, email) {
//     return `Name is ${name} and Email is ${email}`;
// };
// console.log("Loding...");
// setTimeout(function () {
//     console.log(addtiton("Mdranju", "mdranju23@gmail"));
//     console.log("Suscessfuly loaded...");
// }, 5000);

// function samthing(sayNow, name) {
//     function sayHi() {
//         console.log(sayNow + " " + name);
//     }
//     sayHi();
// }
// samthing("Hello", "Ranju");

// function samthing(sayNow, name) {
//     function sayHi() {
//         if (name) {
//             return name.split(" ")[0];
//         } else {
//             return "";
//         }
//     }
//     let massage = sayNow + " " + sayHi();
//     console.log(massage);
// }
// samthing("Good Morning", "Ranju Islam");

// let myName = "Md Ranju";
// let spName = myName.split(" ")[0];
// console.log(spName);

// if (true) {
//     var a = "md Ranju Islam";
// }
// for (let i = 0; i < 10; i++) {
//     var name = "Muhammad Ranju";
// }

// console.log(name);
// console.log(a);
// const myName = "Md Amin";
// function add() {
//     const myName = "Md Ranju";
//     console.log(myName);
// }
// add();
// console.log(myName);
// {
//     var myName = "Ranju";
// }

// console.log(myName);

// function test(num) {
//     function y() {
//         return num % 3 === 0;
//     }
//     function z() {
//         return num % 5 === 0;
//     }
//     if (y() && z()) {
//         console.log(num + " The same number");
//     } else {
//         console.log("Not a valid number");
//     }
// }
// test(30);

// let number = [1, 2, 3, 4];

// //*Nurmal Higer Order Function
// let result = [];
// for (let i = 0; i < number.length; i++) {
//     result.push(number[i] * 2);
// }
// console.log(result);

// //*ForEach Higer Order Function
// let result3 = [];
// number.forEach((value) => {
//     result3.push(value * 2);
// });
// console.log(result3);

// //*Letest Higer Order Function
// let result2 = number.map((value) => value * 2);
// console.log(result2);

// function add(a, b, cb) {
//     console.log("Loding...");
//     setTimeout(() => {
//         console.log(`This is ${a} + ${b} = ${a + b}`);
//     }, 2000);
//     cb();
// }

// function massage() {
//     setTimeout(() => {
//         console.log("Addition Done");
//     }, 3000);
// }
// add(1, 2, massage);

// function sempal(a, b, cb) {
//     let c = a + b;
//     let d = a - b;
//     let result = cb(c, d);
//     return result;
// }

// function add(a, b) {
//     return a + b;
// }

// let newAdd = sempal(5, 3, add);
// console.log(newAdd);

// let newAdd2 = sempal(5, 4, (g, h) => g * h);
// console.log(newAdd2);

// let array = [1, 2, 3, 4, 5];

// function forEach(array, callback) {
//     for (let i = 0; i < array.length; i++) {
//         callback(array[i], i, array);
//     }
// }

// let sum = 0;
// forEach(array, (value, index, arr) => {
//     console.log(value, index, arr);
//     sum += value;
// });
// console.log(sum);

// let array2 = [];
// forEach(array, (value, index, arr) => {
//     array2.push(value * 2);
//     array[index] = value + 5;
// });
// console.log(array2);

// let array = [1, 2, 3, 4, 5];

// function myMap(arr, callback) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let result = callback(arr[i], i, arr);
//         newArr.push(result);
//     }
//     return newArr;
// }
// let myarrMap = myMap(array, function (value) {
//     return value * value * value;
// });
// console.log(myarrMap);

// let myArray = [1, 2, 3, 4, 5, 7, 6, 2, 5, 9, 1];

// function myFilter(array, cb) {
//     let newArr = [];
//     for (let i = 0; i < array.length; i++) {
//         if (cb(array[i], i, array)) {
//             newArr.push(array[i]);
//         }
//     }
//     return newArr;
// }

// let filter = myFilter(myArray, function (value) {
//     if (value == 0) {
//         console.log("Value Acha");
//     }
// });
// console.log(filter);

// let allArr = myArray.filter(function (value) {
//     return value % 2 == 1;
// });

// console.log(allArr);

// function(array, cb, acc) {
//     for(let i = 0; i < array.length; i++){

//     }
// }

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce(function (prev, curr) {
//     return Math.max(prev, curr);
// }, 0);
// console.log(sum);

// let findArr = arr.find((value) => {
//     return value === 3;
// });
// console.log(findArr + " Yes Your number is here");

// function myFind(arr, cb) {
//     for (let i = 0; i < arr.length; i++) {
//         if (cb(arr[i])) {
//             return arr[i];
//         }
//     }
// }

// let arrs = myFind(arr, (value) => {
//     return value === 2;
// });
// console.log(arrs);

// let myArray = [1, 2, 3, 4, -8, 5, 7, -2, 6, 2, -5, 5, 9, 1];

// myArray.sort();
// // console.log(myArray);

// let parsons = [
//     {
//         name: "Md Ranju",
//         age: 19,
//     },
//     {
//         name: "Md AminHossain",
//         age: 18,
//     },
//     {
//         name: "Md Amin",
//         age: 17,
//     },
//     {
//         name: "Md Hossain",
//         age: 16,
//     },
// ];
// myArray.sort((a, b) => {
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1;
//     } else {
//         return 0;
//     }
// });

// console.log(myArray);
// parsons.sort((a, b) => {
//     if (a.age > a.age) {
//         return 1;
//     } else if (a.age < b.age) {
//         return -1;
//     } else {
//         return 0;
//     }
// });
// console.log(parsons);

// function greet(msg) {
//     function greeting(name) {
//         return msg + ", " + name + "!";
//     }
//     return greeting;
// }

// let newGreet = greet("Hello");

// let newGreet2 = newGreet("Ranju");

// console.log(newGreet2);

// function base(b) {
//     return function (n) {
//         let result = 1;
//         for (let i = 0; i < b; i++) {
//             result *= n;
//         }
//         return result;
//     };
// }

// let base10 = base(10);
// console.log(base10(2));

// let numbers = 5;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numbers} x ${i} = ${numbers * i}`);
// }

// function hiMan(N) {
//     if (N === 0) {
//         return;
//     }
//     console.log("I am Calling");
//     hiMan(N - 1);
// }

// hiMan(10);

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i;
// }
// console.log(sum);
// for (let i = 1; i <= 10; i++) {
//     console.log("Hi, I am Md Ranju");
// }

// function a() {
//     b();
//     console.log("Hello I am A Function");
// }
// function b() {
//     d();
//     console.log("Hello I am B Function");
// }

// function c() {
//     console.log("Hello I am C Function");
// }
// function d() {
//     c();
//     console.log("Hello I am D Function");
// }
// a();

// function a() {
//     console.log("Hello I am A Function");
// }
// a();

// if (true) {
//     const a = 55;
// }
// console.log(a);

// function ab(n, r, m) {
//     c();
//     function c() {
//         d();
//         function d() {
//             f(uf());
//             function f(j) {
//                 g();
//                 function g() {
//                     console.log(
//                         `this is parameter number ${n}, this is outsit function ${r} ${m} ${j}`
//                     );
//                 }
//             }
//         }
//     }
// }
// let a = 55;

// function uf() {
//     let name = "Md Ranju";
//     return name;
// }
// ab(5, uf(), a);

// var a = 11;

// function A() {
//     var b = 12;
//     function B() {
//         var c = 23;
//         console.log(c);
//     }
//     function C() {
//         var d = 56;
//         console.log(d);
//     }
//     console.log(b);
//     D(b);
//     B();
//     C();
// }

// function D(n) {
//     return n + a;
// }
// A();

// function Parson(name) {
//     this.name;
// }
// let p1 = new Parson("Md Ranju");
// console.log(p1);

// let sm=10
// for (let i = 1; i <= 10; i++){
//     console.log(`${i} x ${sm} = ${i*sm} `)
// }

// function my(name) {
//     if (!name) {
//         return 'please enter a value'
//     }
//   return name*name
// }
// console.log(my());

// let myObj = {
//     name: 'Md Ranju',
//     myFunb: function() {
//         setTimeout( () =>{
//             console.log(this);
//             console.log(`Hello ${this.name}`)
//         },1000)
//     }
// }
// myObj.myFunb()

// let myObj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     print() {
//         console.log(this);
//     },
// };

// myObj.print();
// console.log(myObj);

// let myObj2 = {
//     ...myObj,
// };
// console.log(myObj2);

// let s1 = Symbol("Hello Demo Symbol");
// let s2 = Symbol(1);

// console.log(s1, s2);

// let myName = "Md Ranju";

// let etr = myName[Symbol.iterator]();

// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());
// console.log(etr.next());

// for (let i of myName) {
//     console.log(i);
// }

// console.log("Hello Bangladesh ");

// class Carcal {
//     constructor(redius) {
//         this.redius = redius;
//         this.fun = function () {
//             console.log("Hello");
//         };
//     }

//     drow() {
//         console.log("Drowing...");
//     }
// }

// let p1 = new Carcal(52);

// console.log(p1.fun());

// function newFunction(man) {
//     console.log(man);
// }
// drow("Md Ranju");

// function drow(h1, cb) {
//     console.log(h1);
//     cb(newFunction("Hi "));
// }

// let myObj = {
//     name: "Hello",
//     age: 19,
// };
// console.log(myObj);

// let myObj2 = Object({ name: "Ranju", age: 19 });
// console.log(myObj2);

// function mySet() {
//     console.log("Hello I am vary week in programming  please help me...:(");
// }

// setTimeout(mySet, 2000);

// console.log("Hello");
// console.log("Hi Md Ranju");

// function myFunc(name) {
//     setTimeout(function () {
//         // return name;
//         console.log(name);
//     }, 2000);
// }

// let jdafd = myFunc("Md Ranju");
// console.log(jdafd);

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             let response = JSON.parse(xhr.response);
//             console.log(response);
//         } else {
//             console.log(xhr.status);
//         }
//     }
// };

// xhr.send();

// function getRequest(url, callback) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);

//     xhr.onreadystatechange = function (e) {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 let response = JSON.parse(xhr.response);
//                 callback(null, response);
//             } else {
//                 callback(xhr.status, null);
//             }
//         }
//     };
//     xhr.send();
// }

// getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         let a = 1;
//         res.forEach((r) => document.write(r.id + " " + r.email + "<br/>"));
//     }
// });

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// console.log(Rectangle);

// let reg1 = new Rectangle(52, 203);

// console.log(reg1);

// class Rectangle2 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// class {
//     eat(name) {
//         return name + " is eating";
//     }
//     sleep(name) {
//         return name + " is sleeping";
//     }
//     paly(name) {
//         return name + " is palying";
//     }
// };

// function Parson(name, age) {
//     // let parson = Object.create(Parson.prototype);
//     this.name = name;
//     this.age = age;
//     // return parson;
// }
// Parson.prototype = {
//     eat() {
//         return this.name + " is eating";
//     },
//     sleep() {
//         return this.name + " is sleeping";
//     },
//     paly() {
//         return this.name + " is palying";
//     },
// };

// let sakib = new Parson("Md Ranju", 19);
// console.log(sakib);

// function Parson(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function MySelf(where, country) {
//     Parson.call(this);
//     this.where = where;
//     this.country = country;
// }
// Parson.prototype = {
//     eat: function () {
//         `${this.name} is eating`;
//     },
// };

// let ranju = new Parson("Ranju", 19);

// console.log(ranju);

// async function fatchData() {
//    try {
//       let res = await fetch("./JsonData/users.json");
//       let data = await res.json();
//       let users = data.map((value) => {
//          return `Name is: ${value.name}`;
//       });
//       console.log(users);
//    } catch (e) {
//       console.log(e);
//    }
// }
// fatchData();

// function add(a, b) {
//    return a + b;
// }

// function malt(a, b, func) {
//    let c = a + b;
//    let d = a - b;

//    return function () {
//       let m = func(a, b);
//       return c * d * m;
//    };
// }

// let newMalt = malt(4, 3, add);
// console.log(newMalt());

// function sample(a, b, cb) {
//    let c = a + b;
//    let d = a - b;
//    let res = cb(c, d);
//    return res;
// }

// let result = sample(5, 8, (a, b) => {
//    return a + b;
// });
// console.log(result);

// function add(b, c) {
//    return b - c;
// }

// let res = sample(5, 8, add);
// console.log(res);

// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function (value) {
//    console.log(value * value);
// });

// let arr = [1, 2, 3, 4, 5];

// function forEcah(array, cb) {
//    for (let i = 0; i < array.length; i++) {
//       cb(array[i], i, array);
//    }
// }

// forEcah(arr, function (value, index, arr) {
//    arr[index] = value + 5;
//    console.log(value + 5);
// });

// console.log(arr);

// const arr8 = require("./app");

// console.log(arr8);

// arr8.forEach(function (value) {
//    console.log(`Hello Mr.${value} nice to meet you`);
// });
// let arr = [1, 2, 3];

// let sqrArr = arr.map(function (value) {
//    return Math.floor(Math.random() * 100000000);
// });

// console.log(arr);
// console.log(sqrArr);

// console.log(global);

// const http = require("http");

// const server = http.createServer((req, res) => {
//    if (req.url === "/") {
//       res.write("Hello Node js");
//       res.end();
//    } else if (req.url === "/about") {
//       res.write("Hello Node js this about page");
//       res.end();
//    } else {
//       res.write('Sorry not found ')
//    }
// });

// server.listen(3000, () => {
//    console.log("Server is runing");
// });

// console.log(module);
// let mac1 = "18:c0:4d:48:6f:d5";
// let mac2 = "18:c0:4d:48:6f:d5";
// console.log(mac1 === mac2);

// const path = require("path");
// const os = require("os");
// const fs = require("fs");

// console.log(os.networkInterfaces());
// console.log(path.parse(__dirname));

// console.log(path.join("user", "local", "mdranju", "index.js"));

// let testObj = {
//    name: "Md Ranju",
//    email: "mdranju23@gmail.com",
//    country: "Bangladesh",
//    address: {
//       city: "Rajshahi",
//       stert: "Rajpara",
//       gpo: 6000,
//       area: "Shreerampur",
//    },
// };

// let data = JSON.stringify(testObj);

// console.log(
//    fs.writeFile("myJson.json", data, (err) => {
//       if (err) {
//          console.log(err);
//       } else {
//          console.log("File write successful");
//       }
//    })
// );

// fs.readFile("./JsonData/users.json", (err, data) => {
//    if (err) {
//       console.log(err);
//    } else {
//       let obj = JSON.parse(data);
//       // console.log(obj.name);
//       obj.map((value) => {
//          console.log(value.name);f
//       });
//    }
// });

// const testData = require("./app");
// const express

// testData.myArr.forEach((value) => {
//    console.log(`this is = ${value}`);
// });

// testData.test(20, 10);

// const fs = require("fs");

// fs.appendFile("hiMan.txt", " Hello Ranju how are you", (err, data) => {
//    if (err) {
//       console.log(err.message);
//    } else {
//       console.log("File write successful");
//    }
// });

// fs.readFile("hiMan.txt", (err, data) => {
//    if (err) {
//       console.log(err.message, "File not found");
//    } else {
//       let myData = data.toString();
//       console.log(myData);
//    }
// });
// fs.exists("hiMan.txt", (exists) => {
//    if (exists) {
//       console.log(exists);
//    } else {
//       console.log("File not found");
//    }
// });

// fs.link("hiMan.txt", "Man.txt", (err, data) => {
//    console.log(data);
// });

// fs.unlink("Man.txt", (data) => {
//    console.log(data);
// });

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("BellRing", () => {
//    console.log("sir you need to run");
// });

// setTimeout(() => {
//    emitter.emit("BellRing");
// }, 2000);

// const fs = require("fs");

// const ourRedStream = fs.createReadStream(`${__dirname}/hiMan.txt`);
// ourRedStream.on("data", (chank) => {
//    console.log(chank.toString());
// });

// const myMath = require("./app");

// console.log(myMath.addMaltplyNumber.myArr);

// const myArr = [1, 2, 3];
// const str = "md ranju";
// const num = 123;
// const myObj = {
//    name: "Md Ranju",
//    age: 19,
// };
// const empty = "";

// if (typeof myArr === "object") {
//    console.log("yes this is array");
// } else {
//    console.log("No this is not Array..:(");
// }
// if (typeof str === "string") {
//    console.log("yes this is string");
// } else {
//    console.log("No this is not string..:(");
// }
// if (typeof num === "number") {
//    console.log("yes this is number");
// } else {
//    console.log("No this is not number..:(");
// }
// if (typeof myObj === "object") {
//    console.log("yes this is object");
// } else {
//    console.log("No this is not object..:(");
// }
// if (empty === "") {
//    console.log("yes this is empty");
// } else {
//    console.log("No this is not empty..:(");
// }
// else if (typeof str === "string") {
//    console.log("yes this is srting");
// } else if (typeof num === "number") {
//    console.log("yes this is number");
// } else if (typeof myObj === "object") {
//    console.log("yes this is object");
// } else {
//    console.log("there are some problom");
// }

// console.log(typeof myObj);

console.log(17 + 17);
