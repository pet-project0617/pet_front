import React from "react";
import { Link, NavLink } from "react-router-dom";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import Table1 from "components/table1";
import URL from "constants/url";

function EgovIntroWork() {
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
        {/* <!-- Location --> */}
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
              동물보호소에 있는 유기동물이에요 <br />
              유기동물은 전 주인에 대한 상처와 사람에 대한 마음의 상처가 커요.
              <br />
              겉모습에 비해 많은 사연들이 있는 아이들이랍니다.
              <br />
              가정분양도 마찬가지지만 책임감을 가지고 입양해주세요
            </p>
            <h2 className="tit_4">유기동물 분양</h2> <br />
            {/* <div className="search-container">
                          <div>
                          <ul className="search-list">
    <li>
      <label className='card_p'>
        <select defaultValue="0" name="search_select">
          <option value="0">전체</option>
          <option value="1">강아지</option>
          <option value="2">고양이</option>
          <option value="3">소동물</option>
        </select>
      </label>
    </li>
    <li>
      <span>
      <input type="text" placeholder="검색어 입력" style={{marginLeft:'200px'}}/>
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"></img>
     </span>
    </li> 
  </ul>

  <div class="search-container">
  <form class="search-form">
    <ul class="search-list">
      <li><input type="text" placeholder="검색어를 입력하세요."/></li>
      <li><button type="submit">검색</button></li>
    </ul>
  </form>
</div>
                          </div>
  
</div> */}
            <br></br>
            <NavLink
              to={URL.ABOUT_HISTORY}
              className={({ isActive }) => (isActive ? "cur" : "")}
            >
              {" "}
              <Table1 data={data} />
            </NavLink>
            <div className="board_bot">
              {/* <!-- Paging --> */}
              <div className="paging">
                <ul>
                  <li className="btn">
                    <button to="" className="first">
                      처음
                    </button>
                  </li>
                  <li className="btn">
                    <button to="" className="prev">
                      이전
                    </button>
                  </li>
                  <li>
                    <button to="" className="cur">
                      1
                    </button>
                  </li>
                  <li>
                    <button to="">2</button>
                  </li>
                  <li>
                    <button to="">3</button>
                  </li>
                  <li>
                    <button to="">4</button>
                  </li>
                  <li>
                    <button to="">5</button>
                  </li>
                  <li className="btn">
                    <button to="" className="next">
                      다음
                    </button>
                  </li>
                  <li className="btn">
                    <button to="" className="last">
                      마지막
                    </button>
                  </li>
                </ul>
              </div>
              {/* <!--/ Paging --> */}
            </div>
            {/* <!--// 본문 --> */}
            <div className="board_btn_area">
              <div className="left_col btn1"></div>

              <div className="right_col btn1">
                <Link
                  to={URL.SUPPORT_DOWNLOAD_CREATE2}
                  className="btn btn_upload"
                >
                  <span>분양 등록</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EgovIntroWork;
