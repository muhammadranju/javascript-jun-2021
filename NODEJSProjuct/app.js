const express = require("express");
const app = express();
const router = express.Router();
const PORT = 4000;
const { getHome, postHome, notFound } = require("./routerControl");
const { home, about, homeNotFound } = require("./index");

router.get("/", getHome);
router.post("/", postHome);

router.all("*", notFound);
// app.all("*", notFound);

app.use("/user", router);
app.get("/", home);
app.get("/about", about);
app.get("*", homeNotFound);

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`);
});
