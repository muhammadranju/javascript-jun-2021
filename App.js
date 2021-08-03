class Parsons {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }
   eat() {
      console.log(`${this.name} is eating`);
   }
}

class MySelfs extends Parsons {
   constructor(name, age, where, country) {
      super(name, age);
      this.where = where;
      this.country = country;
   }
   paly() {
      console.log(`${this.name} is palying`);
   }
}

let ranjus = new MySelfs("MD Ranju", 19, "Rajshahi", "Bangladesh");

console.log(ranjus);

const myArr = ["Ranju", "Amin", "Hossain"];

module.exports = myArr;

const http = require("http");
const fs = require("fs");
const PORT = 4000;
const server = http.createServer((req, res) => {
   fs.readFile("./index.html", (err, data) => {
      if (err) {
         console.log(err);
      } else {
         res.write(data);
         res.end();
      }
   });

   fs.readFile("./index.html", (err, data) => {
      if (res === "/") {
         res.write(data);
         res.end();
      }
   });
});
server.listen(PORT, () => {
   console.log(`Server is runing on ${PORT}`);
});

const math = {};

math.addMaltplyNumber = function () {
   const add = (a, b) => {
      console.log(a + b);
   };
   const sub = (a, b) => {
      console.log(a - b);
   };
   const malt = (a, b) => {
      console.log(a * b);
   };
   const div = (a, b) => {
      console.log(a / b);
   };
   let myArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
   console.log(myArr);
};

const test = (a, b) => {
   add(a, b) + sub(a, b) - malt(a, b) * div(a, b);
};
module.exports = {
   test,
   myArr,
};
module.exports = math;
