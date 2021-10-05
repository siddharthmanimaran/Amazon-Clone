const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
  userName: {
    type: String,
    required: true,

    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("newUser", User);
