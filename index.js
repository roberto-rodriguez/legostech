const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Very Good !!!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
