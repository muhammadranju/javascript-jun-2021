// module skafulding
const routerHandelr = {};

routerHandelr.getHome = (req, res) => {
   res.send("Hello from home page");
};
routerHandelr.postHome = (req, res) => {
   res.send("Hello this post home page");
};

routerHandelr.notFound = (req, res) => {
   res.send(404, " this page not found");
};
module.exports = routerHandelr;
