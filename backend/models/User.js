const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 15,
      unique: true,
    },
    email: {
      type: String,
      max: 30,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
