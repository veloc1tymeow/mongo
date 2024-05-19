const usersRouter = require("express").Router();

const findAllUsers = require("../middlewares/categories");
const sendAllUsers = require("../controllers/categories");

usersRouter.get("/users", findAllUsers, sendAllUsers);

module.exports = usersRouter;
