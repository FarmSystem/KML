import React from "react";
import { Link } from "react-router-dom";
import player1 from "../player/변준형선수 이미지.png";
import player2 from "../player/유진선수 이미지.png";
import player3 from "../player/문성곤선수 이미지.png";
import player4 from "../player/허웅선수 이미지.png";
import player5 from "../player/김동량선수 이미지.png";
import player6 from "../player/이대헌선수 이미지.png";

export default function Player({ player }) {
  if (player.player === "변준형") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player1} alt="" />
      </Link>
    );
  } else if (player.player === "유진") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player2} alt="" />
      </Link>
    );
  } else if (player.player === "문성곤") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player3} alt="" style={{ width: 200 }} />
      </Link>
    );
  } else if (player.player === "허웅") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player4} alt="" />
      </Link>
    );
  } else if (player.player === "김동량") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player5} alt="" style={{ width: 200 }} />
      </Link>
    );
  } else if (player.player === "이대헌") {
    return (
      <Link to={`/parade/${player._id}`}>
        <img src={player6} alt="" />
      </Link>
    );
  }
}
