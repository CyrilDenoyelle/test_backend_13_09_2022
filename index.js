const express = require("express");

const router = require("./app/routes.js");

const app = express();
const port = 3000;

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
