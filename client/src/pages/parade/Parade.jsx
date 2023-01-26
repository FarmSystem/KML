import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./parade.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Players from "../../components/players/Players";
import parade_bg from "../parade/parade배경.jpg";

export default function Parade() {
  const [players, setPlayers] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await axios.get("/cheer/message" + search);
      setPlayers(res.data);
    };
    fetchPlayers();
  }, [search]);

  return (
    <>
      <div>
      <section> <img src={parade_bg} alt="배경" className="background"/></section>
        <Players players={players} />
      </div>
    </>
  );
}
