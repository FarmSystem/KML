import React from "react";
import { Link } from "react-router-dom";
import './cheer.css';

export default function Cheer() {
  return (

    <section className="background">
      <div className="intro__dark">
      <div className="intro">
      우리 구단을 응원합니다!🙌
      </div>
      <div className="image">
      <img className="img1" src=".\logos\한국가스공사.png" alt="한국가스공사"></img>
      </div>
      {/* 
      <img className="img2" src=".\logos\썬더스.svg" alt="썬더스"></img>
      <img className="img3" src=".\logos\원주DB.svg" alt="원주DB"></img>
      <img className="img4" src=".\logos\캐럿점퍼스.png" alt="캐럿점퍼스"></img>
      <img className="img5" src=".\logos\현대모비스.png" alt="현대모비스"></img>
      <img className="img6" src=".\logos\kcc이글스.png" alt="KCC이글스"></img>
      <img className="img7" src=".\logos\kgc로고.png" alt="KGC"></img>
      <img className="img8" src=".\logos\kt소닉붐.png" alt="KT소닉붐"></img>
      <img className="img9" src=".\logos\lg세이커스.png" alt="LG세이커스"></img>
      <img className="img10" src=".\logos\sk나이츠.svg" alt="SK나이츠"></img> */}
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
