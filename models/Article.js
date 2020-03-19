const mongoose = require("mongoose");

const articleSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    publishedOn: Date,
    isPublished: Boolean,
    author: String
  },
  { timestamps: true } //means createdAt and updatedAt
);

const Article = mongoose.model("Article", articleSchema);
//export to be used on other pages
module.exports = Article;
