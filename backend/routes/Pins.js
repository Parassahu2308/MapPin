const pinRouter = require("express").Router();
const { PostCreatePin, GetAllPins } = require("../controllers/Pins");

//create a new pin
// pinRouter.post("/",(req,res)=>{})
pinRouter.route("/").post(PostCreatePin);

//Get All pins
pinRouter.route("/").get(GetAllPins);

module.exports = pinRouter;
