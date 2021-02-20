const { Schema, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    //Añade las props < created_ad > y  > < updatedAt > por defecto
    timestamps: true,
  }
);

module.exports = model("Note", NoteSchema);
