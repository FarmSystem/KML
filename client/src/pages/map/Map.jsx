import React from "react";
import './map.css';
import back_img from "../map/map_img/배경.jpg"
import mapimg from "../map/map_img/002.jpg"
import mapimg2 from "../map/map_img/003.jpg"
import mapimg3 from "../map/map_img/004.jpg"
import mapimg4 from "../map/map_img/006.jpg"
import mapimg5 from "../map/map_img/007.jpg"
import mapimg6 from "../map/map_img/008.jpg"
import mapimg7 from "../map/map_img/010.jpg"
import mapimg8 from "../map/map_img/011.jpg"
import mapimg9 from "../map/map_img/012.jpg"
import mapimg10 from "../map/map_img/014.jpg"
import mapimg11 from "../map/map_img/015.jpg"
import mapimg12 from "../map/map_img/016.jpg"
import mapimg13 from "../map/map_img/018.jpg"
import mapimg14 from "../map/map_img/019.jpg"
import mapimg15 from "../map/map_img/020.jpg"
import mapimg16 from "../map/map_img/022.jpg"
import mapimg17 from "../map/map_img/023.jpg"
import mapimg18 from "../map/map_img/024.jpg"
import mapimg19 from "../map/map_img/026.jpg"
import mapimg20 from "../map/map_img/027.jpg"
import mapimg21 from "../map/map_img/028.jpg"
import mapimg22 from "../map/map_img/030.jpg"
import mapimg23 from "../map/map_img/031.jpg"
import mapimg24 from "../map/map_img/032.jpg"
import mapimg25 from "../map/map_img/034.jpg"
import mapimg26 from "../map/map_img/035.jpg"
import mapimg27 from "../map/map_img/036.jpg"
import mapimg28 from "../map/map_img/038.jpg"
import mapimg29 from "../map/map_img/039.jpg"
import mapimg30 from "../map/map_img/040.jpg"

export default function map() {
  return (
<section className="map_intro">
<div className="intro__dark">
<div className="map_txt">WHO IS THE BEST FIVE?</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<nav class="club_nav">
    <ul>
      <li class="clubs club_db">
        <a href="#dbpromy">원주 DB 프로미</a>
      </li>
      <li class="clubs club_samsung">
        <a href="#thunders">서울 삼성 썬더스</a>
      </li>
      <li class="clubs club_sk">
        <a href="#knights">서울 SK 나이츠</a>
      </li>
      <li class="clubs club_lg">
        <a href="#sakers">창원 LG 세이커스</a>
      </li>
      <li class="clubs club_carrot">
        <a href="#carrot">고양 캐롯 점퍼스</a>
      </li>
      <br />
      <br />
      <li class="clubs club_kcc">
        <a href="#kcc">전주 KCC 이지스</a>
      </li>
      <li class="clubs club_kgc">
        <a href="#kgc">안양 KGC 인삼공사</a>
      </li>
      <li class="clubs club_kt">
        <a href="#sonic">수원 KT 소닉붐</a>
      </li>
      <li class="clubs club_kogas">
        <a href="#kogas">대구 한국가스공사 페가수스</a>
      </li>
      <li class="clubs club_mobis">
        <a href="#phoebus">울산 현대모비스 피버스</a>
      </li>
    </ul>
  </nav>
  </div>
  <section>
  <img src={back_img} alt="배경" className="background_img"/>
</section>
<section id="dbpromy" className="club">
  <img src={mapimg} alt="db프로미 직관꿀팁" className="kkultip"/>
  <img src={mapimg2} alt="db프로미 직관꿀팁" className="kkultip"/>
  <img src={mapimg3} alt="db프로미 직관꿀팁" className="kkultip"/>
</section>
<section id="thunders" className="club">
<img src={mapimg4} alt="썬더스 직관꿀팁" className="kkultip"/>
  <img src={mapimg5} alt="썬더스 직관꿀팁" className="kkultip"/>
  <img src={mapimg6} alt="썬더스 직관꿀팁" className="kkultip"/>
</section>
<section id="knights" className="club">
  <img src={mapimg7} alt="sk나이츠 직관꿀팁" className="kkultip"/>
  <img src={mapimg8} alt="sk나이츠 직관꿀팁" className="kkultip"/>
  <img src={mapimg9} alt="sk나이츠 직관꿀팁" className="kkultip"/>
</section>
<section id="sakers" className="club">
  <img src={mapimg10} alt="lg세이커스 직관꿀팁" className="kkultip"/>
  <img src={mapimg11} alt="lg세이커스 직관꿀팁" className="kkultip"/>
  <img src={mapimg12} alt="lg세이커스 직관꿀팁" className="kkultip"/>
</section>
<section id="carrot" className="club">
  <img src={mapimg13} alt="고양캐롯 직관꿀팁" className="kkultip"/>
  <img src={mapimg14} alt="고양캐롯 직관꿀팁" className="kkultip"/>
  <img src={mapimg15} alt="고양캐롯 직관꿀팁" className="kkultip"/>
</section>
<section id="kcc" className="club">
  <img src={mapimg16} alt="kcc이지스 직관꿀팁" className="kkultip"/>
  <img src={mapimg17} alt="kcc이지스 직관꿀팁" className="kkultip"/>
  <img src={mapimg18} alt="kcc이지스 직관꿀팁" className="kkultip"/>
</section>
<section id="kgc" className="club">
  <img src={mapimg19} alt="kgc인삼공사 직관꿀팁" className="kkultip"/>
  <img src={mapimg20} alt="kgc인삼공사 직관꿀팁" className="kkultip"/>
  <img src={mapimg21} alt="kgc인삼공사 직관꿀팁" className="kkultip"/>
</section>
<section id="sonic" className="club">
  <img src={mapimg22} alt="소닉붐 직관꿀팁" className="kkultip"/>
  <img src={mapimg23} alt="소닉붐 직관꿀팁" className="kkultip"/>
  <img src={mapimg24} alt="소닉붐 직관꿀팁" className="kkultip"/>
</section>
<section id="kogas" className="club">
  <img src={mapimg25} alt="한국가스공사 직관꿀팁" className="kkultip"/>
  <img src={mapimg26} alt="한국가스공사 직관꿀팁" className="kkultip"/>
  <img src={mapimg27} alt="한국가스공사 직관꿀팁" className="kkultip"/>
</section>
<section id="phoebus" className="club">
  <img src={mapimg28} alt="현대모비스피버스 직관꿀팁" className="kkultip"/>
  <img src={mapimg29} alt="현대모비스피버스 직관꿀팁" className="kkultip"/>
  <img src={mapimg30} alt="현대모비스피버스 직관꿀팁" className="kkultip"/>
</section>

</section>
  );
}
