const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/hey", (req, res) => {
  return res.send("pong");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080, () => {
  console.log(" we running here in the backend");
});
