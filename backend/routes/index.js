// Router object will forward requests depending on the part of the url after "/api" .

const apiRouter = require("express").Router();

const usersRouter = require("./users.js");

apiRouter.use("/users", usersRouter);

module.exports = apiRouter;