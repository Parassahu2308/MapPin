const express = require("express");
const mongoose = require("mongoose");
const pinRouter = require("./routes/Pins");
const userRouter = require("./routes/Users");
const app = express();
// const { MONGO_URL } = require("./secret");
app.use(express.json());
const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" Database is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

app.use("/api/pins", pinRouter);
app.use("/api/users", userRouter);

app.listen(5000, () => {
  console.log("Backened server is running at port:5000!");
});
