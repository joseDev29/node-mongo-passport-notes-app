const { Router } = require("express");
const notesRouter = require("../apiServices/Notes/notes.routes");
const viewsRouter = require("./views.routes");

const indexRouter = Router();

indexRouter.use(viewsRouter);
indexRouter.use(notesRouter);

module.exports = indexRouter;
