import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Players from "../../components/players/Players";

export default function Parade() {
  const [players, setPlayers] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await axios.get("/parade" + search);
      setPlayers(res.data);
    };
    fetchPlayers();
  }, [search]);

  return (
    <>
      <div>
        <Players players={players} />
      </div>
    </>
  );
}
