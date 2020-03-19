const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const expressLayouts = require("express-ejs-layouts");

//---initial express
const app = express();
/*
look in views folder for a file named
layout.ejs
*/
app.use(expressLayouts);
/* will tell nodejs to look in a folder
 called views for all ejs files */
app.set("view engine", "ejs");
//--mongodb connection
mongoose.connect(
  "mongodb://localhost/articles",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongodb connected!");
  }
);
//http://google.com - GET
app.get("/", (request, response) => {
  response.render("index");
});

app.get("/a", (request, response) => {
  response.render("another");
});

app.listen(PORT, () => console.log(`running on ${PORT}`));
