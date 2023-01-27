import React from "react";
import PlayerMessage from "../../components/palyer_message/Player_message";
import "./parade_message.css";

export default function Parade_message() {
  return (
    <div>
      <div className = "bg">
        <div className = "soqn">
          <div className = "whatmessage">
            <PlayerMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
