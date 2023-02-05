const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { MONGO_URL } = require("./secret");

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log(" Database is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

app.listen(5000, () => {
  console.log("Backened server is running at port:5000!");
});
