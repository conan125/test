const express = require("express");
const app = express();
const router = require("./router");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
// app.post("/api/test", function (req, res, next) {
//   console.log(req.body);
//   res.send({ data: req.body });
// });
const server = app.listen(8081, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
