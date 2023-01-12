import React from "react";
import { Link } from "react-router-dom";

export default function Cheer() {
  return (
    <div>
      응원하기 페이지
      <button>
        <Link to="/message">메시지 남기기</Link>
      </button>
      <button>
        <Link to="/parade">퍼dgdgdgdgdgdg레이드</Link>
      </button>
    </div>
  );
}
