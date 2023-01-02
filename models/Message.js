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
});

module.exports = mongoose.model("Messsage", MessageSchema);
