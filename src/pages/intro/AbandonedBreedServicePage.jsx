import SearchBar from "components/SearchBar";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import Table1 from "components/table1";
import EgovModal from "pages/about/EgovModal2";
import { useCallback, useRef, useState, useEffect } from "react";

import * as EgovNet from "api/egovFetch";

function AbandonedBreedServicePage() {
  const [createPopupOpen, setCreatePopupOpen] = useState(false);
  const createPopUpRef = useRef();
  const [contentData, setContentData] = useState([]);
  const getPetBoardList = useCallback(() => {
    const url = "/pet/user/boardListAPI.do";
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(),
    };

    EgovNet.requestFetch(
      url,
      options,
      (res = []) => {
        console.log(res.result.resultList);
        let arr = [];
        res.result.resultList.map((item) => {
          arr.push({
            title: item.title,
            user: item.userId,
            name: item.name,
            description: item.content,
            seq: item.seq,
          });
        });
        setContentData(arr);
      },
      (e) => {
        console.log("PET LIST ERR!!--- ", e);
      }
    );
  }, []);

  useEffect(() => {
    getPetBoardList();
  }, []);
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
    createPopUpRef.current.setOpenPopUp(true);
  };

  return (
    <>
      <EgovModal
        open={createPopupOpen}
        ref={createPopUpRef}
        onReset={getPetBoardList}
        title = {'분양 등록'}
      />
      <div className="container">
        <div className="c_wrap">
          <div className="layout">
            {/* <!-- Navigation --> */}
            <EgovLeftNav></EgovLeftNav>
            {/* <!--// Navigation --> */}
            <div className="contents BUSINESS_INTRO" id="contents">
              {/* <!-- 본문 --> */}
              <h1 className="tit_3">유기 동물 분양</h1>
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
                <button className="btn_upload btn" onClick={onOpenPopup}>
                  분양 등록
                </button>
                {/* </Link> */}
              </div>
              <SearchBar />
              <h2 className="tit_4">유기동물 분양</h2>
              <Table1 data={contentData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AbandonedBreedServicePage;
