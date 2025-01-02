const { Router } = require("express");
const userController = require("../controllers/usersController");
const userRouter = Router();

userRouter.get("/", userController.indexGet);
userRouter.get("/new", userController.formGet);
userRouter.get("/search", userController.searchGet);
userRouter.get("/delete", userController.usernameDeleteGet);
userRouter.post("/new", userController.createPost);
userRouter.post("/delete", userController.usernameDeletePost);

module.exports = userRouter;
