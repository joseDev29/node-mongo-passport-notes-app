const { Router } = require("express");
const {
  renderNoteForm,
  renderEditNoteForm,
  renderNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("./notes.controller");

const notesRouter = Router();

//Renders
notesRouter.get("/notes/add", renderNoteForm);
notesRouter.get("/notes/edit/:id", renderEditNoteForm);
notesRouter.get("/notes", renderNotes);

//CRUD Operations
notesRouter.post("/notes", createNote);
notesRouter.put("/notes/:id", updateNote);
notesRouter.delete("/notes/:id", deleteNote);

module.exports = notesRouter;
