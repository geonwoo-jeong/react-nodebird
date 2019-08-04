const express = require("express");
const db = require("./models");
const app = express();

db.sequelize.sync();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(4000, () => {
  console.log(`server is running on http://localhost:4000`);
});
