import axios from "axios";
import React from "react";
import { useState } from "react";
import "./message.css";

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
      window.location.replace("/parade");
    } catch (err) {}
  };

  return (
    <section className="mybackground">
      <div>
        <div className="inner">
          <div className="text__box01 text__box">
            CHOOSE &nbsp;&nbsp;YOUR &nbsp;&nbsp;TEAM
          </div>

          <form className="messageForm" onSubmit={handleSubmit}>
            <div>
              <label className="teams team_sk">
                <input
                  type="radio"
                  name="club"
                  value="sk"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>서울 SK</span>
              </label>

              <label className="teams team_kgc">
                <input
                  type="radio"
                  name="club"
                  value="kgc"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>안양 KGC</span>
              </label>

              <label className="teams team_kogas">
                <input
                  type="radio"
                  name="club"
                  value="kogas"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>대구 한국가스공사</span>
              </label>

              <label className="teams team_db">
                <input
                  type="radio"
                  name="club"
                  value="db"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>원주 DB</span>
              </label>

              <label className="teams team_kt">
                <input
                  type="radio"
                  name="club"
                  value="kt"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>수원 KT</span>
              </label>
            </div>

            <div>
              <label className="teams team_carrot">
                <input
                  type="radio"
                  name="club"
                  value="carrot"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>고양 캐롯</span>
              </label>

              <label className="teams team_kcc">
                <input
                  type="radio"
                  name="club"
                  value="kcc"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>전주 KCC</span>
              </label>

              <label className="teams team_mobis">
                <input
                  type="radio"
                  name="club"
                  value="mobis"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>울산 현대모비스</span>
              </label>

              <label className="teams team_lg">
                <input
                  type="radio"
                  name="club"
                  value="lg"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>창원 LG</span>
              </label>

              <label className="teams team_samsung">
                <input
                  type="radio"
                  name="club"
                  value="samsung"
                  onChange={(e) => setClub(e.target.value)}
                />
                <span>서울 삼성</span>
              </label>
            </div>

            <div className="text__box text__box02">Who's Your Fav PLAYER?</div>

            <div>
              <label className="players junhyeong">
                <input
                  type="radio"
                  name="player"
                  value="변준형"
                  onChange={(e) => setPlayer(e.target.value)}
                />
                <span>변준형</span>
              </label>

              <label className="players">
                <input
                  type="radio"
                  name="player"
                  value="유진"
                  onChange={(e) => setPlayer(e.target.value)}
                />
                <span>유진</span>
              </label>

              <label className="players">
                <input
                  type="radio"
                  name="player"
                  value="문성곤"
                  onChange={(e) => setPlayer(e.target.value)}
                />
                <span>문성곤</span>
              </label>

              <label className="players">
                <input
                  type="radio"
                  name="player"
                  value="허웅"
                  onChange={(e) => setPlayer(e.target.value)}
                />
                <span>허웅</span>
              </label>

              <label className="players">
                <input
                  type="radio"
                  name="player"
                  value="김동량"
                  onChange={(e) => setPlayer(e.target.value)}
                />
                <span>김동량</span>
              </label>

              <label className="players daeheon">
                <input
                  type="radio"
                  name="player"
                  value="이대헌"
                  onChange={(e) => setPlayer(e.target.value)}
                />
                <span>이대헌</span>
              </label>
            </div>

            <div className="bbabbi"></div>

            <div>
              <label className="yourname">NickName</label>
              <input
                className="yourdeco"
                type="text"
                placeholder="닉네임을 입력하세요 &nbsp;&nbsp;&nbsp;"
                style={{ width: "400px", height: "40px", fontSize: "20px" }}
                onChange={(e) => setNickName(e.target.value)}
              ></input>
            </div>

            <div>
              <label className="yourmessage">
                <input
                  className="yourdeco"
                  type="text"
                  placeholder="나만의 응원메시지를 전해주세요"
                  style={{ width: "780px", height: "200px", fontSize: "20px" }}
                  onChange={(e) => setMessage(e.target.value)}
                ></input>
              </label>
            </div>

            <div className="bbabbi_plus"></div>

            <button type="submit" className="button01">
              응원메시지 보내기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
