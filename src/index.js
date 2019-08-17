const express = require("express");

const app = express();

app.use("*", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("listening on 3000....");
});