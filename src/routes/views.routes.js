const { Router } = require("express");

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  res.render("index");
});

viewsRouter.get("/about", (req, res, next) => {
  res.render("about");
});

viewsRouter.get("/signup", (req, res, next) => {
  res.render("users/signUp");
});

viewsRouter.get("/signin", (req, res, next) => {
  res.render("users/signIn");
});

module.exports = viewsRouter;
