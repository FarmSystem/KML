import React from "react";
import Player from "../player/Player";
import "./players.css";

export default function Players({ players }) {
  return (
    <div className="bg2">
      {players.map((p) => (
        <Player player={p} />
      ))}
    </div>
  );
}
