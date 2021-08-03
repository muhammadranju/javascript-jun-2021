// let myArr = require("./index");

// myArr.forEach((element) => {
//    console.log(element);
// });

// const ranjuObj = {};

// const ranjuObj = () => {
//    let myArr = [
//       "Md Ranju",
//       "MD Ranju Islam",
//       "Ranju",
//       "Islam",
//       "Hossain",
//       "Ranju Hossaon",
//       "Muhammad",
//       "Muhammad Ranju.",
//       "Amin Hossain Ranju",
//       "AminHossain Ranju",
//    ];
//    return myArr;
// };

// module.exports = ranjuObj;
const appHandel = {};

appHandel.handel = (req, res) => {
   res.send("Hello Ranju");
};
appHandel.postHandel = (req, res) => {
   res.send("This is from post ");
};

module.exports = appHandel;
