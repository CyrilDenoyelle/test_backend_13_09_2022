const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/products", function (req, res) {
  db.all(`SELECT * FROM products`, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

module.exports = router;
