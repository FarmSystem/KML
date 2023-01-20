import React from "react";
import { Link } from "react-router-dom";

export default function Player({ player }) {
  return (
    <div>
      <Link to={`/parade/${player._id}`}>{player.nickName}</Link>
      <span>{player.club}</span>
      <span>{player.player}</span>
    </div>
  );
}
