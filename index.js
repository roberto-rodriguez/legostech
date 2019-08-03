const express = require("express");

const app = express();
 
if (process.env.NODE_ENV === "production") {
  // Express  will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build")); //2- Then Express look if the request is for an asset
  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);
