const express = require("express");
import render from "./helpers/renderer";

const app = express();

app.use("*", (req, res) => {
  res.send(render());
});

app.listen(3000, () => {
  console.log("listening on 3000....");
});
