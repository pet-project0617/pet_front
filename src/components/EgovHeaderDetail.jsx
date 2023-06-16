import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import * as EgovNet from "api/egovFetch";

import URL from "constants/url";
import CODE from "constants/code";


const EgovHeaderDetail = () => {
return (
    <>
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
            </ul>
          </div>
          
        </div>
      </div>
      <div className="all_menu Mobile closed">
        <div className="user_info_m">
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
             </ul>
          </div>
        
        </div>
      </div>
      </>
)
}

export default EgovHeaderDetail;