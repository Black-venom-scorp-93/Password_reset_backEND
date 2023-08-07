const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please add the user name"],
  },
  email: {
    type: String,
    required: [true, "please add the email address"],
    unique: [true, "email already taken"],
  },
  password: {
    type: String,
    required: [true, "please add password"],
  },
  resetToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema, "users");