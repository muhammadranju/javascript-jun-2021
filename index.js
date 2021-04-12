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

// // firstNumber = parseInt(firstNumber, 10);
// // secondNumber = parseInt(secondNumber, 10);
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
//     // console.log(`Your code is Even ${num} divided`);
//     document.write(`You can do divided "${num}" is Even => জোড়`);
// } else if (num > 0) {
//     document.write(`Your number is "${num}" is Odd => জিরো`);
// } else {
//     document.write(`You can't do divided "${num}" is Odd => বিজোড়`);
//     // console.log(`Your cdde is Odd ${num} not divided`);
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
//     // myPara.style.color = "red";
//     // myPara.style.fontSize = "50px";
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
//         // paraId.style.color = "red";
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
//     // padraGraph.style.cursor = "pointer";
//     padraGraph.classList.add("para-style");
// });
// padraGraph.addEventListener("mouseout", () => {
//     // padraGraph.style.cursor = "pointer";
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
// // console.log(myObj("Md Ranju", 19));

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

// //* object is not soppot for of loop  // soppot only for in loop

// for (let x of myObj) {
//     console.log(x);
// }

// for (let value in myObj) {
//     console.log(`${value} : ${myObj[value]}`);
// }

// for (let x = 0; x < myObj.length; x++) {
//     console.log(`${x} : ${myObj[x]}`);
// }
