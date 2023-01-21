import React from "react";
import './map.css';
import back_img from "../map/map_img/배경.jpg"
import mapimg from "../map/logos/한국가스공사.png"
import mapimg2 from "../map/logos/캐럿점퍼스.png"
// import mapimg3 from "../map/map_img/"
// import mapimg4 from "../map/map_img/"
// import mapimg5 from "../map/map_img/"
// import mapimg6 from "../map/map_img/"
// import mapimg7 from "../map/map_img/"
// import mapimg8 from "../map/map_img/"
// import mapimg9 from "../map/map_img/"
// import mapimg10 from "../map/map_img/"

export default function map() {
  return (
<section className="map_intro">
<div className="intro__dark">
<div className="map_txt">각 구단의 직관 꿀팁을 알아보세요!</div>
<nav class="club_nav">
    <ul>
      <li class="club_nav-item">
        <a href="#kogas">한국가스공사</a>
      </li>
      <li class="club_nav-item">
        <a href="#carrot">고양 캐롯점퍼스</a>
      </li>
      <li class="club_nav-item">
        <a href="#knights">서울sk나이츠</a>
      </li>
      <li class="club_nav-item">
        <a href="#thunders">서울삼성썬더스</a>
      </li>
      <li class="club_nav-item">
        <a href="#sonic">수원kt소닉붐</a>
      </li>
      <li class="club_nav-item">
        <a href="#kgc">안양 kgc 인삼공사</a>
      </li>
      <li class="club_nav-item">
        <a href="#phoebus">현대모비스</a>
      </li>
      <li class="club_nav-item">
        <a href="#dbpromy">db프로미</a>
      </li>
      <li class="club_nav-item">
        <a href="#kcc">kcc이지스</a>
      </li>
      <li class="club_nav-item">
        <a href="#sakers">lg세이커스</a>
      </li>
    </ul>
  </nav>
  </div>
  <section>
  <img src={back_img} alt="배경" className="background_img"/>
</section>
<section id="kogas" className="club">
  <img src={mapimg} alt="한국가스공사 직관꿀팁" className="kkultip"/>
</section>
<section id="carrot" className="club">
  <img src={mapimg2} alt="캐롯점퍼스 직관꿀팁" className="kkultip"/>
</section>
<section id="knights" className="club">
  <img src={mapimg2} alt="sk나이츠 직관꿀팁" className="kkultip"/>
</section>
<section id="thunders" className="club">
  <img src={mapimg2} alt="썬더스 직관꿀팁" className="kkultip"/>
</section>
<section id="sonic" className="club">
  <img src={mapimg2} alt="소닉붐 직관꿀팁" className="kkultip"/>
</section>
<section id="kgc" className="club">
  <img src={mapimg2} alt="kgc인삼공사 직관꿀팁" className="kkultip"/>
</section>
<section id="phoebus" className="club">
  <img src={mapimg2} alt="현대모비스피버스 직관꿀팁" className="kkultip"/>
</section>
<section id="dbpromy" className="club">
  <img src={mapimg2} alt="db프로미 직관꿀팁" className="kkultip"/>
</section>
<section id="kcc" className="club">
  <img src={mapimg2} alt="kcc이지스 직관꿀팁" className="kkultip"/>
</section>
<section id="sakers" className="club">
  <img src={mapimg2} alt="lg세이커스 직관꿀팁" className="kkultip"/>
</section>

</section>
  );
}
