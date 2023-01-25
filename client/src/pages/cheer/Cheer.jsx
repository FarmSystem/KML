import React from "react";
import { Link } from "react-router-dom";
import './cheer.css';
import logo_img from "../cheer/로고통합.png";

export default function Cheer() {
  return (

    <section className="background">
      <div className="intro__dark">
      <div className="intro">
        CHEERING FOR US !
      </div>
      <div className="image">
      <img src={logo_img} alt="로고이미지" className="logos"/>
      </div>
      <div className="message">
        <div style={{marginTop : '5%'}}>
          <Link className = "link" to = "/message">
          메시지 남기기
          </Link>
        </div>
      </div>
      <div className="parade">
        <div style={{marginTop : '5%'}}>
          <Link className = "link" to = "/parade">
          퍼레이드
          </Link>
        </div>
      </div>
      </div>
      
    </section>

  );
}
