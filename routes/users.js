const usersRouter = require("express").Router();

const findAllUsers = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");
const sendUserCreated = require("../controllers/users");
const createUser = require("../middlewares/users");
const findUserById = require("../middlewares/users");
const sendUserById = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.get("/users/:id", findUserById, sendUserById);

module.exports = usersRouter;
