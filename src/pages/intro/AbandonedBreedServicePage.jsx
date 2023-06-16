import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import SearchBar from "components/SearchBar";
import Table1 from "components/table1";
import URL from "constants/url";
import EgovModal from "pages/about/EgovModal2";

function AbandonedBreedServicePage() {
  const [createPopupOpen, setCreatePopupOpen] = useState(false);
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

  const onOpenPopup = () => {
    setCreatePopupOpen(true)
  }

  return (
    <>
      <EgovModal open={createPopupOpen} />
      <div className="container">
        <div className="c_wrap">
          <div className="layout">
            {/* <!-- Navigation --> */}
            <EgovLeftNav></EgovLeftNav>
            {/* <!--// Navigation --> */}
            <div className="contents BUSINESS_INTRO" id="contents">
              {/* <!-- 본문 --> */}
              <h1 className="tit_3">가정 분양</h1>
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
                {/* <Link
                  to={URL.SUPPORT_DOWNLOAD_CREATE2}
                  className="btn btn_upload"
                > */}
                <button className="btn_upload btn" onClick={onOpenPopup}>분양 등록</button>
                {/* </Link> */}
              </div>
              <SearchBar />
              <h2 className="tit_4">유기동물 분양</h2>
              <Table1 data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbandonedBreedServicePage;
