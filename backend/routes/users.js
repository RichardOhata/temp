// Router object will forward requests depending on the part of the url after "/api/users" .

const usersRouter = require("express").Router();

const { getUser, createUser } = require("../controllers/userController.js");

usersRouter.get("/:id", getUser);
usersRouter.post("/", createUser);

module.exports = usersRouter;