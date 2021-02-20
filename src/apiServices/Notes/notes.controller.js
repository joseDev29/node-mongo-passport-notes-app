const notesController = {};

//Renders
notesController.renderNoteForm = (req, res, next) => {
  res.render("notes/noteForm");
};

notesController.renderEditNoteForm = (req, res, next) => {
  res.send("Edit note form");
};

notesController.renderNotes = (req, res, next) => {
  res.send("render notes");
};

//CRUD OPERATIONS
notesController.createNote = (req, res, next) => {
  console.log(req.body);
  res.send("create Note");
};

notesController.updateNote = (req, res, next) => {
  res.send("Update note");
};

notesController.deleteNote = (req, res, next) => {
  res.send("Delete note");
};
module.exports = notesController;
