const express = require("express");
const router = express.Router();

const db = require("./db");

router.get("/products", function (req, res) {
  const scope = req.session.loggedin ? "authenticated" : "public";
  db.all(`SELECT * FROM products WHERE visible_${scope} = 1`, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.post("/login", async function (req, res) {
  if (!req.body.email || !req.body.password_hash) {
    res.send({
      payload: {},
      status: 401,
    });
  }

  db.get(
    `SELECT * FROM users WHERE email = ? AND password_hash = ?`,
    [req.body.email, req.body.password_hash],
    (err, user) => {
      if (err) throw err;

      if (user) {
        req.session.loggedin = true;
        req.session.user = user;
        res.send({ payload: {}, status: 200 });
      } else {
        res.send({
          payload: {},
          status: 401,
        });
      }
    }
  );
});

module.exports = router;
