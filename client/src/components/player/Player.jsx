import React from "react";
import { Link } from "react-router-dom";
import player1 from "../player/변준형 선수 이미지.png";
import player2 from "../player/유진 선수 이미지.png";
import player3 from "../player/문성곤 선수 이미지.png";
import player4 from "../player/허웅 선수 이미지.png";
import player5 from "../player/김동량 선수 이미지.png";
import player6 from "../player/이대헌 선수 이미지.png";
import "./player.css";

export default function Player({ player }) {
  if (player.player === "변준형") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player1} alt="" className="img" />
      </Link>
    );
  } else if (player.player === "유진") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player2} alt="" className="img" />
      </Link>
    );
  } else if (player.player === "문성곤") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player3} alt="" className="img" />
      </Link>
    );
  } else if (player.player === "허웅") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player4} alt="" className="img" />
      </Link>
    );
  } else if (player.player === "김동량") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player5} alt="" className="img" />
      </Link>
    );
  } else if (player.player === "이대헌") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player6} alt="" className="img" />
      </Link>
    );
  }
}
