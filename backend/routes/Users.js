const userRouter = require("express").Router();
const { PostCreateNewUser, PostLoginUser } = require("../controllers/Users");

//create a new user
// pinRouter.post("/",(req,res)=>{})
userRouter.route("/signup").post(PostCreateNewUser);

//Login user
userRouter.route("/login").post(PostLoginUser);

module.exports = userRouter;
