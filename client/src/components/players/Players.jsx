import React from "react";
import Player from "../player/Player";

export default function Players({ players }) {
  return (
    <div>
      {players.map((p) => (
        <Player player={p} />
      ))}
    </div>
  );
}
