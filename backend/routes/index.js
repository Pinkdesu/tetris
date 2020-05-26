var express = require("express");
var db = require("../database/index");
var router = express.Router();

router.post("/ratings", function (req, res, next) {});

router.post("/players", function (req, res, next) {
  const name = req.body.name;

  db("player")
    .select()
    .where("name", name)
    .then((result) => {
      if (result.length === 0) {
        db("player").insert({ name });
      }
    })
    .catch((error) => res.send(error));
});

module.exports = router;
