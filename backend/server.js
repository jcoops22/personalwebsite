const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "build")));

app.get("/hey", (req, res) => {
  res.send({ data: "pong" });
  console.log(req.body);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`we running here on port ${PORT}`);
});
