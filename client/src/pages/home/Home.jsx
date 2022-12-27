import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function home() {
  return (
    <div>
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fe161eb1-bc15-4472-9344-ee3045dfabe0/3472489310076622412_20221028180623810_2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221128T094309Z&X-Amz-Expires=86400&X-Amz-Signature=7c035f74682b700e8d1a175d872d4354d3926372fdd2a9aa5bf006ec8edb05bb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%223472489310076622412_20221028180623810%25202.jpg%22&x-id=GetObject"
        alt="메인페이지 배경이미지"
      />
      <div className="goToPage">
        <span>
          <Link className="link" to="/cheer">
            응원하기
          </Link>
        </span>
      </div>
      <div></div>
      <div className="goToPage">
        <Link className="link" to="/map">
          직관 꿀팁
        </Link>
      </div>
    </div>
  );
}
