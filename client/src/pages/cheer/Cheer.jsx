import React from "react";
import { Link } from "react-router-dom";
import './cheer.css';
import logo_img from "../cheer/로고통합.png";

export default function Cheer() {
  return (

    <section className="background">
      <div className="intro__dark">
      <div className="intro">
        CHEERING &nbsp;FOR &nbsp;US !
      </div>
      <div className="image">
      <img src={logo_img} alt="로고이미지" className="logos"/>
      </div>

      <button className="message">
        <Link to="/message">메시지 남기기</Link>
      </button>
      
      <button className="parade">
        <Link to="/parade">퍼레이드</Link>
      </button>

      </div>
      
    </section>

  );
}
