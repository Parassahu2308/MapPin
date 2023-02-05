const pinModel = require("../models/Pin");

//Create a Pin
module.exports.PostCreatePin = async function (req, res) {
  const newPin = new pinModel(req.body);
  try {
    const savePin = await newPin.save();
    return res.status(200).json({
      Pin: savePin,
      msg: "Pin Saved Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

//Get All Pins
module.exports.GetAllPins = async function (req, res) {
  try {
    const allPins = await pinModel.find();
    return res.status(200).json({
      Pins: allPins,
      msg: "Pins get Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};
