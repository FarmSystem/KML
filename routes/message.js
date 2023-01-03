const router = require("express").Router();
const Message = require("../models/Message");

// 메시지 적기
router.post("/message", async (req, res) => {
  try {
    const newMessage = new Message({
      nickName: req.body.nickName,
      message: req.body.message,
    });
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch {
    res.status(500).json(err);
  }
});

// 포스트 가져오기
router.get("/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.res.params.id);
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 모든 포스트 가져오기
router.get("/", async (req, res) => {
  try {
    messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
