const express = require("express");
const router = express.Router();
router.get("/", function (req, res, next) {
  res.send("hello world!");
});
router.post("/api/test", function (req, res, next) {
  res.send({ data: req.body });
  console.log(req.body);
});
module.exports = router;
