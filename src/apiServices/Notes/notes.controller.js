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

//CREATE
notesController.createNote = async (req, res, next) => {
  const { title, description } = req.body;

  const note = new Note({
    title,
    description,
    pepe: "dsfds",
  });

  const saved = await note.save();

  if (!saved) {
    return res.status(400).json({
      error: "Error al crear la nota",
    });
  }

  res.status(201).json({
    message: "created note",
    data: saved,
  });
};

//UPDATE
notesController.updateNote = async (req, res, next) => {
  const { title, description } = req.body;
  const { id } = req.params;

  if (!id) {
    return res.status(400).send("< id > is required for update note");
  }

  if (!title || !description) {
    return res.status(400).json({
      error: "title and description are required",
    });
  }

  const note = {
    title,
    description,
  };

  const updatedNote = await Note.findByIdAndUpdate(id, note);

  if (!updatedNote) {
    return res.status(404).json({
      error: "note not found",
    });
  }

  res.status(200).json({
    message: "note updated",
    data: updatedNote,
  });
};

//DELETE
notesController.deleteNote = async (req, res, next) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).send("< id > is required for delete note");
  }

  const deletedNote = await Note.findByIdAndDelete(id);

  if (!deletedNote) {
    console.log("Deleted note: ", deletedNote);
    return res.status(404).send("note not found");
  }

  res.status(200).json({
    message: "deleted note",
    data: deletedNote,
  });
};
module.exports = notesController;
