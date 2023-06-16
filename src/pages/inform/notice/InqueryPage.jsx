import React, { useState, useEffect, useCallback } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import ConditionBar from "pages/admin/ConditionBar";

import * as EgovNet from "api/egovFetch";
import URL from "constants/url";
import CODE from "constants/code";

import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavInform";

function InqueryPage(props) {
    const location = useLocation();
    console.log("EgovDailyDetail [location] : ", location);
  
    const DATE = new Date();
    const TODAY = new Date(DATE.getFullYear(), DATE.getMonth(), DATE.getDate());
  
    const [searchCondition, setSearchCondition] = useState(
      location.state?.searchCondition || {
        schdulSe: "",
        year: TODAY.getFullYear(),
        month: TODAY.getMonth(),
        date: TODAY.getDate(),
      }
    );
  
    const [scheduleList, setScheduleList] = useState([]);
    const [listTag, setListTag] = useState([]);
    const [listCount, setListCount] = useState(0); //더보기(api 호출하는 방식)
  
    /**
     * 조회 목록 세팅
     */
    const drawList = useCallback(() => {
      let mutListTag = [];
  
      // 리스트 항목 구성
      scheduleList.forEach((item, index) => {
        mutListTag.push(
          <div
            key={index}
            className="card_02 review"
            onChange={(e) => {
              console.log("onclickTarget:::: ", e.target);
            }}
          >
            <span className="info">{item.info}</span>
            <span className="user">{item.user}</span>
            <span className="date">{item.date}</span>
            <div className="content">{item.content}</div>
            <input name="chevron" type="checkbox" className="chevron" />
          </div>
        );
      });
      setListTag(mutListTag);
      console.log("mutListTag", mutListTag);
    }, [scheduleList]);
  
    /**
     * 초기 세팅
     */
    const retrieveList = useCallback(
      (srchcnd) => {
        const retrieveListURL =
          "/cop/smt/sim/egovIndvdlSchdulManageDailyListAPI.do";
        const requestOptions = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(srchcnd),
        };
  
        EgovNet.requestFetch(
          retrieveListURL,
          requestOptions,
          (resp) => {
            setScheduleList(resp.result.resultList);
            drawList();
          },
          function (resp) {
            console.log("err response : ", resp);
          }
        );
      },
      [drawList]
    );
  
    const listMore = useCallback(() => {}, [listCount]);
  
    useEffect(() => {
      retrieveList(searchCondition);
    }, [searchCondition]);
  
    useEffect(() => {
      drawList();
    }, [scheduleList]);
  
    const listScheduleList = async (data) => {
      setListCount((prev) => prev + 30);
      setScheduleList(data);
    };
  
    return (
      <div className="container">
        <div className="c_wrap">
          <div className="layout">
            <EgovLeftNav />
            <div className="contents TODAY_SCHEDULE" id="contents">
              <div className="top_tit">
                <h1 className="tit_1">입양 후기</h1>
              </div>
              <ConditionBar onBeforeSubmit={listScheduleList} selectBar={false} />
              <div className="board_02">{listTag}</div>
            </div>
          </div>
        </div>
      </div>
    );
}


export default InqueryPage;