const notesController = {};

const Note = require("./notes.model");

//Renders
notesController.renderNoteForm = (req, res, next) => {
  res.render("notes/noteForm");
};

notesController.renderEditNoteForm = (req, res, next) => {
  res.send("Edit note form");
};

notesController.renderNotes = async (req, res, next) => {
  const notes = await Note.find();
  res.render("notes/allNotes", { notes });
};

//CRUD OPERATIONS
notesController.createNote = async (req, res, next) => {
  const { title, description } = req.body;

  const note = new Note({
    title,
    description,
    pepe: "dsfds",
  });

  const saved = await note.save();

  if (!saved) {
    res.status(400).json({
      error: "Error al crear la nota",
    });
  }

  console.log("----- Saved: ", saved);

  res.send("create Note");
};

notesController.updateNote = (req, res, next) => {
  res.send("Update note");
};

notesController.deleteNote = (req, res, next) => {
  res.send("Delete note");
};
module.exports = notesController;
