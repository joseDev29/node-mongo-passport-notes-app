const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/*UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};*/

module.exports = model("User", UserSchema);
