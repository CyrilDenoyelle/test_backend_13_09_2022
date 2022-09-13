const express = require("express");
const router = express.Router();

const { models } = require("./db");

router.get("/products", async function (req, res) {
  const scope = req.session.loggedin ? "authenticated" : "public";
  try {
    const products = await models.Product.findAll({
      where: {
        [`visible_${scope}`]: 1,
      },
    });
    res.send({
      payload: {
        products,
      },
      status: 200,
    });
  } catch (error) {
    console.error(`[routes] /products`, err);
  }
});

router.post("/login", async function (req, res) {
  if (!req.body.email || !req.body.password_hash) {
    res.send({
      payload: {},
      status: 401,
    });
  }

  try {
    const user = await models.User.findOne({
      where: {
        email: req.body.email,
        password_hash: req.body.password_hash,
      },
    });

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
  } catch (error) {
    console.error(`[routes] /login`, err);
  }
});

router.get("/categories", async function (req, res) {
  try {
    const categories = await models.Category.findAll();
    res.send(categories);
  } catch (error) {
    console.error(`[routes] /categories`, err);
  }
});

module.exports = router;
