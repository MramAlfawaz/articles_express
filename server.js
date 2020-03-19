const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const expressLayouts = require("express-ejs-layouts");
//models
const Article = require("./models/Article");

//---initial express
const app = express();
//gets form data
app.use(express.urlencoded({ extended: true }));
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
  Article.find()
    .then(articles => {
      console.log(articles);
      //{ articles: articles } \\ { articles }
      response.render("articles/index", { articles });
    })
    .catch(err => {
      console.log(err);
    });
});

//create article routes
app.get("/create", (request, response) => {
  response.render("articles/create");
});

app.post("/create", (request, response) => {
  console.log(request.body);
  let article = new Article(request.body);

  console.log(article);
  //save article
  article
    .save()
    .then(() => {
      response.send("Post worked!!");
    })
    .catch(err => {
      console.log(err);
      response.send("Error!!!!!");
    });
});

app.listen(PORT, () => console.log(`running on ${PORT}`));
