const homeRoute = {};

homeRoute.home = (req, res) => {
   res.send("<h1>Hello from home page</h1>");
};
homeRoute.about = (req, res) => {
   res.send("<h1>Hello from about page</h1>");
};
homeRoute.homeNotFound = (req, res) => {
   res.send(404, "<h1>404 Not found</h1>");
};

module.exports = homeRoute;
