const http = require("http");
const fs = require("fs");

const port = 4000;
const server = http.createServer((req, res) => {
   if (req.url === "/") {
      fs.readFile("./index.html", (err, data) => {
         res.write(data);
         res.end();
      });
   } else if (req.url === "/about") {
      res.write("This is about page");
      res.end();
   } else if (req.url === "/contact") {
      res.write("This is a contact");
      res.end();
   } else {
      res.write("Page not found");
      res.end();
   }

   // const ourRedStream = fs.createReadStream(`${__dirname}/hiMan.txt`, "utf8");
   // ourRedStream.pipe(res);
});

server.listen(port, (err) => {
   console.log("Server runing successful indexPage " + port);
});
