const userModel = require("../models/User");
const bcrypt = require("bcrypt");

//Create a New user
module.exports.PostCreateNewUser = async function (req, res) {
  try {
    // Generate a new Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const newUser = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // Save user
    const user = await newUser.save();

    return res.status(200).json({
      User: user,
      msg: "User signup Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

//Login
module.exports.PostLoginUser = async function (req, res) {
  try {
    //Find username
    const user = await userModel.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong Username or Password");

    //Check Password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong Username or Password");

    //send response
    return res.status(200).json({
      User: user,
      msg: "User login Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};
