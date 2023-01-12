import axios from "axios";
import React from "react";
import { useState } from "react";

export default function Message() {
  const [nickName, setNickName] = useState("");
  const [message, setMessage] = useState("");
  const [club, setClub] = useState("");
  const [player, setPlayer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMessage = {
      nickName,
      message,
      club,
      player,
    };
    try {
      await axios.post("/message", newMessage);
    } catch (err) {}
  };

  return (
    <div>
      구단 선택 + 응원메시지 남기기
      <form className="messageForm" onSubmit={handleSubmit}>
        <label>
          <input type="radio" name="club" value="롯데" onChange={(e) => setClub(e.target.value)}/>
          <span>롯데</span>
        </label>

        <label>
          <input type="radio" name="club" value="SSG" onChange={(e) => setClub(e.target.value)}/>
          <span>SSG</span>
        </label>

        <label>
          <input type="radio" name="club" value="삼성" onChange={(e) => setClub(e.target.value)}/>
          <span>삼성</span>
        </label>

        <label>
          <input type="radio" name="club" value="키움" onChange={(e) => setClub(e.target.value)}/>
          <span>키움</span>
        </label>
      </form>
    </div>
  );
}
