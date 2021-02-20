const { Router } = require("express");

const viewsRouter = Router();

viewsRouter.get("/", (req, res, next) => {
  res.render("index");
});

viewsRouter.get("/about", (req, res, next) => {
  res.render("about");
});

module.exports = viewsRouter;
