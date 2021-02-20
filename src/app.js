const Path = require("path");
const express = require("express");
const morgan = require("morgan");
const expressHandlebars = require("express-handlebars");
const config = require("./config");

const app = express();

//Settings
app.set("port", config.server.port || 4001);
app.set("views", Path.resolve(__dirname, "views"));
app.engine(
  ".hbs",
  expressHandlebars({
    layoutsDir: Path.resolve(app.get("views"), "layouts"),
    partialsDir: Path.resolve(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//Global variables

//Routes
app.use(require("./routes"));

//Static files
app.use(express.static(Path.resolve(__dirname, "public")));

module.exports = app;
