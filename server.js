const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;

//---initial express
const app = express();

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
  response.send("This is the Home route");
});

app.listen(PORT, () => console.log(`running on ${PORT}`));
