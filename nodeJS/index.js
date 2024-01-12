/*Mohan Allah nama suru korlam*/
// let myObj = {};

// let myArr = [
//    "Md Ranju",
//    "MD Ranju Islam",
//    "Ranju",
//    "Islam",
//    "Hossain",
//    "Ranju Hossaon",
//    "Muhammad",
//    "Muhammad Ranju.",
//    "Muhammad Ranju Islam",
//    "Amin Hossain Ranju",
//    "AminHossain Ranju",
// ];

//    console.log("Hello");
// myArr.map((value) => {
//    console.log(value);
// });

// const ranjuObj = require("./app");

// ranjuObj().forEach((value) => {
//    console.log(`Hello MR.${value} how are you!`);
// });

// let num = 16;

// for (let i = 1; i <= 10; i++) {
//    console.log(`${num} x ${i} =${i * num}`);
// }

// const express = require("express");

// const app = express();

// // app.use(express.json());
// app.use(express.urlencoded());

// app.get("/", (req, res) => {
//    res.send("Hello NodeJS");

//    // console.log(req.url);
// });

// app.post("/", (req, res) => {
//    // let myObj = {
//    //    name: req.body.name,
//    //    age: req.body.age,
//    //    city: req.body.city,
//    //    country: req.body.country,
//    // };
//    console.log(req.body);
//    res.send("Hello NodeJS form post");
// });

// app.listen(4000, () => {
//    console.log("Server is runuing on 4000");
// });

const express = require("express");
// const appHandel = require("./app");
const app = express();
const router = express.Router();
const port = 4000;

// const admin = express();

// app.get("/", appHandel.handel);
// app.post("/", appHandel.postHandel);

// admin.get("/dashboard", (req, res) => {
//    console.log(admin.mountpath);
//    res.send("hello from Dashboard:)");
// });
// admin.get("/", (req, res) => {
//    res.send("pleace login:)");
// });
// app.enable("case sensitive routing");

// app.all("/", (req, res) => {
//    res.send("Hello from all method");
// });

// app.param("id", (req, res, next, id) => {
//    const user = {
//       userId: id,
//       name: "Md Ranju",
//    };
//    req.userDetails = user;
//    next();
// });
// app.get("/user/:id", (req, res) => {
//    console.log(req.userDetails);
//    res.send("Hello from get method ");
// });
// app.use("/admin", admin);

// app.route("/hello/bangladesh")
//    .get((req, res) => {
//       res.send("Hello from hello bangladesh get");
//    })
//    .post((req, res) => {
//       res.send("Hello from hello bangladesh post");
//    })
//    .put((req, res) => {
//       res.send("Hello from hello bangladesh put");
//    });
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//    res.render("pages/home");
// });

// app.get("/add", (req, res) => {
//    res.send("hello");

//    console.log(req.originalUrl);
// });
// app.get("/user/:id", (req, res) => {
//    res.send("hello bangladesh");
//    console.log(req.originalUrl);
// });
const { about, rout, help, home, notFound } = require("./controlPost");

app.use("/user", router);

app.get("/about", about);

router.get("/router", rout);

router.get("/help/:prodid", help);

app.get("/", home);

app.all("*", notFound);

app.listen(port, () => {
   console.log(`Server is running on ${port}`);
});
