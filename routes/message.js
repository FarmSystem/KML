const router = require("express").Router();
const Message = require("../models/Message");

// 메시지 적기
router.post("/message", async (req, res) => {
  try {
    const newMessage = new Message({
      nickName: req.body.nickName,
      message: req.body.message,
      club: req.body.club,
      player: req.body.player,
    });
    console.log("여기까진 ok");
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch {
    res.status(500).json(err);
  }
});

// 메시지 업데이트
router.put("/message/:id", async (req, res) => {
  try {
    const updateMessage = await Message.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 메시지 가져오기
router.get("/message/:id", async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

// 모든 메시지 가져오기
router.get("/message", async (req, res) => {
  try {
    messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
