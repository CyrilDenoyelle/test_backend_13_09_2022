const express = require("express");

const session = require("express-session");
const router = require("./app/routes.js");

const app = express();
const port = 3000;

app
  .use(express.json())
  .use(
    session({
      secret: Math.random().toString(36).substring(2, 7),
      saveUninitialized: true,
      resave: false,
    })
  )
  .use("/", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
