import React from "react";
import { Link, NavLink } from "react-router-dom";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import SearchBar from "components/SearchBar";
import Table1 from "components/table1";
import URL from "constants/url";

function AbandonedBreedServicePage() {
  const data = [
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
      user: "지연",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
      user: "지연",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
      user: "지연",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
      user: "지연",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
      user: "지연",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
      user: "지연",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
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
              <Link to="">반려동물 분양</Link>
            </li>
            <li>유기동물 분양</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents BUSINESS_INTRO" id="contents">
            {/* <!-- 본문 --> */}
            <h1 className="tit_3">반려동물 분양</h1>
            <p className="txt_1">
              동물보호소에 있는 유기동물이에요
              <br />
              유기동물은 전 주인에 대한 상처와 사람에 대한 마음의 상처가 커요.
              <br />
              겉모습에 비해 많은 사연들이 있는 아이들이랍니다.
              <br />
              가정분양도 마찬가지지만 책임감을 가지고 입양해주세요
            </p>
            <div className="left_col btn1 mg20 mgl0">
              <Link
                to={URL.SUPPORT_DOWNLOAD_CREATE2}
                className="btn btn_upload"
              >
                분양 등록
              </Link>
            </div>
            <SearchBar/>
            <h2 className="tit_4">유기동물 분양</h2>
            <Table1 data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AbandonedBreedServicePage;
