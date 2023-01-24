import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import basketballimage from "../home/basketball.png";
import ths from "../home/ths.png";

export default function home() {
  return (
  <div className="topbox">
    <div className="ths_mg">
      <img src={ths}
      width="500px" style={{zIndex: 999}} />
    </div>
    <div className="ball_mg">
      <img src={basketballimage}
      width="500px" style={{zIndex: 999}} />
    </div>
    <div className="bg01">
      <div className="textbox01">
        THE<br />
        6IX<br />
        MAN
      </div>
      <div className="box01">
        <div style={{marginTop : '5%'}}>
          <Link className = "link" to = "/cheer">
            응원하기
          </Link>
        </div>
      </div>
    </div>
    <div className="bg02">
      <div className="textbox02">
        WE<br />
        ARE<br />
        ONE
      </div>
      <div className="box02">
        <div style={{marginTop : '5%'}}>
          <Link className="link" to="/map">
            직관꿀팁
          </Link>
        </div>
      </div>
    </div>
  </div>
    );
  }