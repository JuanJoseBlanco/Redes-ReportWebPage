"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.use("/", express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.send('Servidor test corriendo!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
