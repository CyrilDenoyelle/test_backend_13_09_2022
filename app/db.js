const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./DATABASE.sqlite", (err) => {
  if (err) {
    console.error(`[app/db.js]: ${err.message}`);
  } else {
    console.log("Connected to DATABASE.sqlite");
  }
});

module.exports = db;
