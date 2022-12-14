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
      await axios.post("/cheer/message", newMessage);
    } catch (err) {}
  };

  return (
    <div>
      구단 선택 + 응원메시지 남기기
      <form className="messageForm" onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="club"
            value="롯데"
            onChange={(e) => setClub(e.target.value)}
          />
          <span>롯데</span>
        </label>

        <label>
          <input
            type="radio"
            name="club"
            value="SSG"
            onChange={(e) => setClub(e.target.value)}
          />
          <span>SSG</span>
        </label>

        <label>
          <input
            type="radio"
            name="club"
            value="삼성"
            onChange={(e) => setClub(e.target.value)}
          />
          <span>삼성</span>
        </label>

        <label>
          <input
            type="radio"
            name="club"
            value="키움"
            onChange={(e) => setClub(e.target.value)}
          />
          <span>키움</span>
        </label>
        <div></div>
        <label>
          <input
            type="radio"
            name="player"
            value="이대호"
            onChange={(e) => setPlayer(e.target.value)}
          />
          <span>이대호</span>
        </label>

        <label>
          <input
            type="radio"
            name="player"
            value="이가은"
            onChange={(e) => setPlayer(e.target.value)}
          />
          <span>이가은</span>
        </label>

        <label>
          <input
            type="radio"
            name="player"
            value="김수현"
            onChange={(e) => setPlayer(e.target.value)}
          />
          <span>김수현</span>
        </label>

        <label>
          <input
            type="radio"
            name="player"
            value="문채영"
            onChange={(e) => setPlayer(e.target.value)}
          />
          <span>문채영</span>
        </label>
        <div></div>
        <label>닉네임</label>
        <input
          type="text"
          placeholder="닉네임 입력하시오"
          onChange={(e) => setNickName(e.target.value)}
        ></input>
        <label>메시지 남기기</label>
        <input
          type="text"
          placeholder="메시지 입력하시오"
          onChange={(e) => setMessage(e.target.value)}
        ></input>

        <button type="submit">선택 결과 제출하기 버튼</button>
      </form>
    </div>
  );
}
