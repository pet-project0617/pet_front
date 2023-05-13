import React from "react";
import { Link, NavLink } from "react-router-dom";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import Table1 from "components/table1";
import URL from "constants/url";

function HomeBreedServicePage() {
  const data = [
    {
      imageSrc: "/images/11.jpg",
      title: "길냥이 출신 춘냥이",
      description: "8개월 암컷",
      user: "지연",
    },
    {
      imageSrc: "/images/22.jpg",
      title: "임보구해요",
      description: "5살 비숑 순해요",
      user: "지연",
    },
  ];
  return (
    <div className="container">
      <div className="c_wrap">
        <div className="location">
          <ul>
            <li>
              <Link to={URL.MAIN} className="home">
                Home
              </Link>
            </li>
            <li>
              <a href="#!">반려동물 분양</a>
            </li>
            <li>가정 분양</li>
          </ul>
        </div>

        <div className="layout">
          <EgovLeftNav></EgovLeftNav>
          <div className="contents SERVICE_INTRO" id="contents">
            <h1 className="tit_3">반려동물 분양</h1>
            <p className="txt_1">
              가정에서 태어난 아이들이에요:) <br /> 가정 분양은 책임비가 들 수
              있어요 <br /> 책임비는 일정 기간이 지나면 돌려받아요.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBreedServicePage;
