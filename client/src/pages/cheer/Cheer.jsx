import React from "react";
import { Link } from "react-router-dom";

export default function Cheer() {
  return (
    <div>
      <h1><center>응원하기 페이지</center></h1>
      <div class = "container">s
        <center>
          <button>
            <Link to="/message">응원메시지</Link>
          </button>
        <div>
          <button>
            <Link to="/parade">퍼레이드</Link>
          </button>
        </div>
        </center>
      </div>
    </div>
  );
}
