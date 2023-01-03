const express = require("express");
const app = express();
const port = 5000;

const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const messageRoute = require("./routes/message");

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/cheer", messageRoute);
app.listen(port, () => {
  console.log("Backend is running");
});
