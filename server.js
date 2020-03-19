const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;

//---initial express
const app = express();

app.listen(PORT, () => console.log(`running on ${PORT}`));
