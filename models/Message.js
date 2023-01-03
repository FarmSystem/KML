const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  nickName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
  player: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Messsage", MessageSchema);
