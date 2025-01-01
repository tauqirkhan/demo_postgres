const { Router } = require("express");
const userController = require("../controllers/usersController");
const userRouter = Router();

userRouter.get("/", userController.indexGet);
userRouter.get("/new", userController.formGet);
userRouter.post("/new", userController.createPost);

module.exports = userRouter;
