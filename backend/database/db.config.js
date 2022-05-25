const mongoose = require("mongoose");

//connection Database
mongoose.connect('mongodb://localhost:27017/e-commerece')
  .then(() => console.log("success connection"))
  .catch(error => console.error(error))