import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Player_message() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [player, setPlayer] = useState({});

  const content = player.message;
  const playerArr = (content || "").split("\n");

  useEffect(() => {
    const getPlayer = async () => {
      const res = await axios.get("/cheer/message" + path);
      setPlayer(res.data);
    };
    getPlayer();
  }, [path]);

  return (
    <div>
      <div>{player.nickName}</div>
      <div>{player.message}</div>
    </div>
  );
}
