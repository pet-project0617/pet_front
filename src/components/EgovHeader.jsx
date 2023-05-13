import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import * as EgovNet from "api/egovFetch";

import URL from "constants/url";
import CODE from "constants/code";

function EgovHeader({ loginUser, onChangeLogin }) {
  console.group("EgovHeader");
  console.log("[Start] EgovHeader ------------------------------");

  const sessionUser = sessionStorage.getItem("loginUser");
  const sessionUserId = JSON.parse(sessionUser)?.id;
  const sessionUserName = JSON.parse(sessionUser)?.name;
  const sessionUserSe = JSON.parse(sessionUser)?.userSe;

  const navigate = useNavigate();

  const logInHandler = () => {
    navigate(URL.LOGIN);
    document.querySelector(".all_menu.WEB").classList.add("closed");
    document.querySelector(".btnAllMenu").classList.remove("active");
    document.querySelector(".btnAllMenu").title = "전체메뉴 닫힘";
    document.querySelector(".all_menu.Mobile").classList.add("closed");
  };
  const logOutHandler = () => {
    // 로그인 정보 존재할 때
    const logOutUrl = "/uat/uia/actionLogoutAPI.do";
    const requestOptions = {
      credentials: "include",
    };
    EgovNet.requestFetch(logOutUrl, requestOptions, function (resp) {
      console.log("===>>> logout resp= ", resp);
      if (parseInt(resp.resultCode) === parseInt(CODE.RCV_SUCCESS)) {
        onChangeLogin({ loginVO: {} });
        sessionStorage.setItem("loginUser", JSON.stringify({ id: "" }));
        window.alert("로그아웃되었습니다!");
        navigate(URL.MAIN);
        document.querySelector(".all_menu.WEB").classList.add("closed");
        document.querySelector(".btnAllMenu").classList.remove("active");
        document.querySelector(".btnAllMenu").title = "전체메뉴 닫힘";
        document.querySelector(".all_menu.Mobile").classList.add("closed");
      }
    });
  };

  console.log("------------------------------EgovHeader [End]");
  console.groupEnd("EgovHeader");

  return (
    // <!-- header -->
    <div className="header">
      <div className="inner">
        <h1 className="logo">
          <Link to={URL.MAIN} className="w">
            <img
              src="/assets/images/logo_sample.png"
              style={{
                width: "100px",
                marginTop: "-50px",
                marginLeft: "-50px",
              }}
            />
          </Link>
          <Link
            to={URL.MAIN}
            className="ico lnk_go_template"
            state={{ marginLeft: "20px" }}
            target="_blank"
          >
            홈페이지 템플릿 소개 페이지로 이동
          </Link>
        </h1>

        <div className="gnb">
          <h2 className="blind">주메뉴</h2>
          <ul className="nav_wrapper">
            <li>
              <NavLink
                to={URL.ABOUT}
                className={({ isActive }) => (isActive ? "cur" : "")}
              >
                사이트소개
              </NavLink>
            </li>
            <li>
              <NavLink
                to={URL.INTRO}
                className={({ isActive }) => (isActive ? "cur" : "")}
              >
                분양
              </NavLink>
            </li>
            <li>
              <NavLink
                to={URL.SUPPORT}
                className={({ isActive }) => (isActive ? "cur" : "")}
              >
                마켓
              </NavLink>
            </li>
            <li>
              <NavLink
                to={URL.INFORM}
                className={({ isActive }) => (isActive ? "cur" : "")}
              >
                후기
              </NavLink>
            </li>
            {sessionUserSe === "USR" && (
              <li>
                <NavLink
                  to={URL.ADMIN}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  사이트관리
                </NavLink>
              </li>
            )}
          </ul>
        </div>

        {/* <!-- PC web에서 보여지는 영역 --> */}
        <div className="user_info">
          {/* 로그아웃 : 로그인 정보 있을때 */}
          {sessionUserId && (
            <>
              <span className="person">{sessionUserName} </span> 님이, 관리자로
              로그인하셨습니다.
              <button onClick={logOutHandler} className="btn">
                로그아웃
              </button>
            </>
          )}
          {/* 로그인 : 로그인 정보 없을 때 */}
          {!sessionUserId && (
            <button onClick={logInHandler} className="btn login">
              로그인
            </button>
          )}
        </div>
        {/* <!--// PC web에서 보여지는 영역 --> */}

        {/* <!-- right area --> */}
        <div className="right_a">
          <button
            type="button"
            className="btn btnAllMenu"
            title="전체메뉴 닫힘"
          >
            전체메뉴
          </button>
          <button
            type="button"
            className="btn mobile btnAllMenuM"
            title="전체메뉴 닫힘"
          >
            전체메뉴
          </button>
        </div>
      </div>

      {/* <!-- All menu : web --> */}
      <div className="all_menu WEB closed">
        <h2 className="blind">전체메뉴</h2>
        <div className="inner">
          <div className="col">
            <h3>소개</h3>
            <ul>
              <li>
                <NavLink
                  to={URL.ABOUT_SITE}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  사이트소개
                </NavLink>
              </li>
              {/* <li><NavLink to={URL.ABOUT_HISTORY} className={({ isActive }) => (isActive ? "cur" : "")}></NavLink></li> */}
              {/* <li><NavLink to={URL.ABOUT_ORGANIZATION} className={({ isActive }) => (isActive ? "cur" : "")}>조직소개</NavLink></li> */}
              {/* <li><NavLink to={URL.ABOUT_LOCATION} className={({ isActive }) => (isActive ? "cur" : "")}>찾아오시는 길</NavLink></li> */}
            </ul>
          </div>
          <div className="col">
            <h3>분양정보</h3>
            <ul>
              <li>
                <NavLink
                  to={URL.INTRO_WORKS}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  유기동물 분양
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.INTRO_SERVICE}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  가정 분양
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>마켓</h3>
            <ul>
              <li>
                <NavLink
                  to={URL.SUPPORT_DOWNLOAD}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  무료나눔
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.SUPPORT_QNA}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  중고거래
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.SUPPORT_APPLY}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  용품 주의
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>후기</h3>
            <ul>
              {/* <li><NavLink to={URL.INFORM_DAILY}>오늘의 행사</NavLink></li> */}
              <li>
                <NavLink
                  to={URL.INFORM_WEEKLY}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  마켓 후기
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.INFORM_NOTICE}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  입양 후기
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.INFORM_GALLERY}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  질문
                </NavLink>
              </li>
            </ul>
          </div>
          {sessionUserSe === "USR" && (
            <div className="col">
              <h3>사이트관리</h3>
              <ul>
                {/* <li><NavLink to={URL.ADMIN_SCHEDULE} className={({ isActive }) => (isActive ? "cur" : "")}>사</NavLink></li> */}
                <li>
                  <NavLink
                    to={URL.ADMIN_BOARD}
                    className={({ isActive }) => (isActive ? "cur" : "")}
                  >
                    게시판생성관리
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={URL.ADMIN_USAGE}
                    className={({ isActive }) => (isActive ? "cur" : "")}
                  >
                    게시판사용관리
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={URL.ADMIN_NOTICE}
                    className={({ isActive }) => (isActive ? "cur" : "")}
                  >
                    공지사항관리
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={URL.ADMIN_GALLERY}
                    className={({ isActive }) => (isActive ? "cur" : "")}
                  >
                    사이트갤러리관리
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={URL.ADMIN_MANAGER}
                    className={({ isActive }) => (isActive ? "cur" : "")}
                  >
                    사이트관리자 암호변경
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {/* <!-- All menu : mobile --> */}
      <div className="all_menu Mobile closed">
        <div className="user_info_m">
          {/* 로그아웃 : 로그인 정보 있을때 */}
          {sessionUserId && (
            <>
              <span className="person">{sessionUserName} </span>이
              로그인하셨습니다.
              <button onClick={logOutHandler} className="btn logout">
                로그아웃
              </button>
            </>
          )}

          {/* 로그인 : 로그인 정보 없을 때 */}
          {!sessionUserId && (
            <button onClick={logInHandler} className="">
              로그인
            </button>
          )}
          <button className="btn noscript close" type="button">
            전체메뉴 닫기
          </button>
        </div>
        <div className="menu">
          <h3>
            <Link to={URL.ABOUT}>사이트소개</Link>
          </h3>
          <div className="submenu closed">
            <ul>
              <li>
                <NavLink
                  to={URL.ABOUT_SITE}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  소개
                </NavLink>
              </li>
              {/* <li><NavLink to={URL.ABOUT_HISTORY} className={({ isActive }) => (isActive ? "cur" : "")}>연혁</NavLink></li> */}
              {/* <li><NavLink to={URL.ABOUT_ORGANIZATION} className={({ isActive }) => (isActive ? "cur" : "")}>조직소개</NavLink></li> */}
              {/* <li><NavLink to={URL.ABOUT_LOCATION} className={({ isActive }) => (isActive ? "cur" : "")}>찾아오시는 길</NavLink></li> */}
            </ul>
          </div>
          <h3>
            <Link to={URL.INTRO}>분양</Link>
          </h3>
          <div className="submenu closed">
            <ul>
              <li>
                <NavLink
                  to={URL.INTRO_WORKS}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  {" "}
                  유기동물 분양
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.INTRO_SERVICE}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  가정 분양
                </NavLink>
              </li>
            </ul>
          </div>
          <h3>
            <Link to={URL.SUPPORT}>마켓</Link>
          </h3>
          <div className="submenu closed">
            <ul>
              <li>
                <NavLink
                  to={URL.SUPPORT_DOWNLOAD}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  무료나눔
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.SUPPORT_QNA}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  중고거래
                </NavLink>
              </li>
              {/* <li><NavLink to={URL.SUPPORT_APPLY} className={({ isActive }) => (isActive ? "cur" : "")}>서비스 신청</NavLink></li> */}
            </ul>
          </div>
          <h3>
            <Link to={URL.INFORM}>후기</Link>
          </h3>
          <div className="submenu closed">
            <ul>
              <li>
                <NavLink to={URL.INFORM_DAILY}>마켓 후기</NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.INFORM_WEEKLY}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  입양 후기
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={URL.INFORM_NOTICE}
                  className={({ isActive }) => (isActive ? "cur" : "")}
                >
                  질문
                </NavLink>
              </li>
              {/* <li><NavLink to={URL.INFORM_GALLERY} className={({ isActive }) => (isActive ? "cur" : "")}>사이트 갤러리</NavLink></li> */}
            </ul>
          </div>
          {sessionUserSe === "USR" && (
            <>
              <h3>
                <Link to={URL.ADMIN}>사이트관리</Link>
              </h3>
              <div className="submenu closed">
                <ul>
                  <li>
                    <NavLink
                      to={URL.ADMIN_SCHEDULE}
                      className={({ isActive }) => (isActive ? "cur" : "")}
                    >
                      일정관리
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={URL.ADMIN_BOARD}
                      className={({ isActive }) => (isActive ? "cur" : "")}
                    >
                      게시판생성관리
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={URL.ADMIN_USAGE}
                      className={({ isActive }) => (isActive ? "cur" : "")}
                    >
                      게시판사용관리
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={URL.ADMIN_NOTICE}
                      className={({ isActive }) => (isActive ? "cur" : "")}
                    >
                      공지사항관리
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={URL.ADMIN_GALLERY}
                      className={({ isActive }) => (isActive ? "cur" : "")}
                    >
                      사이트갤러리관리
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={URL.ADMIN_MANAGER}
                      className={({ isActive }) => (isActive ? "cur" : "")}
                    >
                      사이트관리자 암호변경
                    </NavLink>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <!--// All menu --> */}
    </div>
    // <!--// header -->
  );
}

export default EgovHeader;
