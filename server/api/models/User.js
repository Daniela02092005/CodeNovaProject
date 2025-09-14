//creamos el esquema del usuario
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetToken:    { type: String },
  resetTokenExp: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model("User ", UserSchema);

