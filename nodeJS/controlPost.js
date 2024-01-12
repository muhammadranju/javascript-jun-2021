const contronRouter = {};

contronRouter.about = (req, res) => {
   let { post, filter, user } = req.query;
   console.log(req.query);
   res.send(`Hello posts ${post} ${filter} ${user}`);
   // res.sendStatus(406);
};

contronRouter.rout = (req, res) => {
   res.send(305, "Hello from router page");
};

contronRouter.help = (req, res) => {
   let pro = req.params.prodid;
   res.send(`Hello i am product ${pro}`);
};
contronRouter.home = (req, res) => {
   res.send({
      name: "Md Ranju",
      age: 19,
      ctiy: "Rajshahi",
   });

   // res.sendStatus(406);
};

contronRouter.notFound = (req, res) => {
   res.send(404, "404 Not found");
   console.log(req.url);
};

module.exports = contronRouter;
