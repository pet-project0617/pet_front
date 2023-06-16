import React from "react";
import { Link, NavLink } from "react-router-dom";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavIntro";
import Table1 from "components/table1";
import URL from "constants/url";

function EgovIntroService() {
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
        {/* <!-- Location --> */}
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
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          <EgovLeftNav></EgovLeftNav>
          {/* <!--// Navigation --> */}

          <div className="contents SERVICE_INTRO" id="contents">
            {/* <!-- 본문 --> */}

            <h1 className="tit_3">반려동물 분양</h1>

            <p className="txt_1">
              가정에서 태어난 아이들이에요:) <br /> 가정 분양은 책임비가 들 수
              있어요 <br /> 책임비는 일정 기간이 지나면 돌려받아요.{" "}
            </p>

            <h2 className="tit_4">가정 분양</h2>

            <br />
            <br />
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

            <div className="board_btn_area">
              <div className="left_col btn1"></div>

              <div className="right_col btn1">
                <Link
                  to={URL.SUPPORT_DOWNLOAD_CREATE}
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

export default EgovIntroService;
