import React from "react";
import { Link } from "react-router-dom";
import Table3 from "components/table3";
import URL from "constants/url";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";

function EgovAboutHistory() {
  const data = [
    {
      imageSrc: "",
      title: "한번도 안썼던 고양이 방석 나눔해요",
      description: "구매 일자 : 1월초",
      content: "두개 삼",
      place: "성동 동물보호소",
      date: "2023-05-31 15:00",
      user: "지연32049823",
    },
  ];
  return (
    <div className="container">
      <div className="c_wrap">
        <div className="layout">
          <div className="contents SITE_INTRO" id="contents">
            {/* <!-- 본문 --> */}
            <h1 className="tit_3">상세</h1>
            <br />
            <br />
            <br />
            <br />
            <Table3 data={data} />

            {/* <!--// 본문 --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovAboutHistory;
