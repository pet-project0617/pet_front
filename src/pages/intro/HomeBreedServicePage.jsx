import React, { useRef, useState, useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import SearchBar from "components/SearchBar";
import Table1 from "components/table1";
import URL from "constants/url";
import EgovModal from "pages/about/EgovModal2";
import * as EgovNet from "api/egovFetch";

function HomeBreedServicePage() {
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

  const onOpenPopup = () => {
    createPopUpRef.current.setOpenPopUp(true);
  };

  return (
    <>
      <EgovModal
        open={createPopupOpen}
        ref={createPopUpRef}
        onReset={getPetBoardList}
        title={"분양 등록"}
      />
      <div className="container">
        <div className="c_wrap">
          <div className="layout">
            {/* <!-- Navigation --> */}
            <EgovLeftNav></EgovLeftNav>
            {/* <!--// Navigation --> */}
            <div className="contents SERVICE_INTRO" id="contents">
              {/* <!-- 본문 --> */}
              <h1 className="tit_3">가정 분양</h1>
              <p className="txt_1">
                가정에서 태어난 아이들이에요 <br />
                가정 분양은 책임비가 들 수 있어요 <br />
                책임비는 일정 기간이 지나면 돌려받아요.
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
              <h2 className="tit_4">가정 분양</h2>
              <Table1 data={contentData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBreedServicePage;
