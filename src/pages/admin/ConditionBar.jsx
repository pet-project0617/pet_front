import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import * as EgovNet from "api/egovFetch";
import URL from "constants/url";
import CODE from "constants/code";
import SearchBar from "components/SearchBar";

const ConditionBar = ({ selectBar = true, onBeforeSubmit }) => {
  const DATE = new Date();
  const TODAY = new Date(DATE.getFullYear(), DATE.getMonth(), DATE.getDate());

  const location = useLocation();

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

  const changeDate = (target, amount) => {
    let changedDate;

    if (target === CODE.DATE_YEAR) {
      changedDate = new Date(
        searchCondition.year + amount,
        searchCondition.month,
        searchCondition.date
      );
    }

    if (target === CODE.DATE_MONTH) {
      changedDate = new Date(
        searchCondition.year,
        searchCondition.month + amount,
        searchCondition.date
      );
    }

    if (target === CODE.DATE_DATE) {
      changedDate = new Date(
        searchCondition.year,
        searchCondition.month,
        searchCondition.date + amount
      );
    }

    setSearchCondition({
      ...searchCondition,
      year: changedDate.getFullYear(),
      month: changedDate.getMonth(),
      date: changedDate.getDate(),
    });
  };

  const drawList = useCallback(() => {
    let mutListTag = [];
    mutListTag.push(
      <p className="no_data" key="0">
        검색된 결과가 없습니다.
      </p>
    ); // 게시판 목록 초기값

    let listCnt = 0;
    // 리스트 항목 구성
    scheduleList.forEach(function (item, index) {
      if (index === 0) mutListTag = []; // 목록 초기화
      listCnt++;
      mutListTag.push(
        <Link
          to={{ pathname: URL.INFORM_DAILY_DETAIL }}
          state={{
            schdulId: item.schdulId,
            prevPath: URL.INFORM_DAILY,
          }}
          key={listCnt}
          className="list_item"
        >
          <div>
            {getTimeForm(item.schdulBgnde)} ~ {getTimeForm(item.schdulEndde)}
          </div>
          <div className="al">{item.schdulNm}</div>
          <div>{item.userNm}</div>
        </Link>
      );
    });
    setListTag(mutListTag);
  }, [scheduleList]);

  const retrieveList = useCallback(
    (srchcnd) => {
      console.groupCollapsed("EgovDailyDetail.retrieveList()");

      const retrieveListURL =
        "/cop/smt/sim/egovIndvdlSchdulManageDailyListAPI.do";
      const requestOptions = {
        method: "POST",
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

      console.groupEnd("EgovDailyDetail.retrieveList()");
    },
    [drawList]
  );

  const getTimeForm = (str) => {
    let hour = str.substring(8, 10);
    let starminute = str.substring(10, 12);
    return hour + ":" + starminute;
  };

  useEffect(() => {
    retrieveList(searchCondition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchCondition]);

  const onSearch = (e) => {
    const test = [
      {
        info: "2세 포메",
        user: "가나다",
        date: "2023-04-01",
        content: "강아지가 친절하고 사장님이 귀여워요",
      },
      {
        info: "2세 포메",
        user: "test",
        date: "2023-04-01",
        content: "어쩌구",
      },
      {
        info: "2세 포메",
        user: "이히히",
        date: "2023-04-01",
        content: "어머님이 누구니",
      },
      {
        info: "2세 포메",
        user: "퇴근하고싶다",
        date: "2023-04-01",
        content:
          "퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근퇴근",
      },
      {
        info: "2세 포메",
        user: "퇴근",
        date: "2023-04-01",
        content: "퇴근",
      },
      {
        info: "2세 포메",
        user: "퇴근",
        date: "2023-04-01",
        content: "강아지: 퇴근하고싶다",
      },
      {
        info: "2세 포메",
        user: "가나다",
        date: "2023-04-01",
        content: "강아지가 친절하고 사장님이 귀여워요",
      },
    ];
    onBeforeSubmit(test);
  };
  return (
    <div className="condition">
      <ul>
        <li>
          {selectBar && (
            <label className="f_select" htmlFor="sel1">
              <select
                name="schdulSe"
                id="sel1"
                title="조건"
                onChange={(e) => {
                  setSearchCondition({
                    ...searchCondition,
                    schdulSe: e.target.value,
                  });
                }}
              >
                <option value="0">전체</option>
                <option value="1">회의</option>
                <option value="2">세미나</option>
                <option value="3">강의</option>
                <option value="4">교육</option>
                <option value="5">기타</option>
              </select>
            </label>
          )}
        </li>
        <li>
          <button
            className="prev"
            onClick={() => {
              changeDate(CODE.DATE_YEAR, -1);
            }}
          />
          <span>{searchCondition.year}년</span>
          <button
            className="next"
            onClick={() => {
              changeDate(CODE.DATE_YEAR, 1);
            }}
          />
        </li>
        <li className="half L">
          <button
            className="prev"
            onClick={() => {
              changeDate(CODE.DATE_MONTH, -1);
            }}
          />
          <span>{searchCondition.month + 1}월</span>
          <button
            className="next"
            onClick={() => {
              changeDate(CODE.DATE_MONTH, 1);
            }}
          />
        </li>
        <li className="half R">
          <button
            className="prev"
            onClick={() => {
              changeDate(CODE.DATE_DATE, -1);
            }}
          />
          <span>{searchCondition.date}일</span>
          <button
            className="next"
            onClick={() => {
              changeDate(CODE.DATE_DATE, 1);
            }}
          />
        </li>
        <div style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'space-evenly' }}>
          <div>
            <SearchBar/>
          </div>
          <div className="left_col btn1 mg20 mgl0">
            <span onClick={onSearch} className="btn btn_upload">
              검색
            </span>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default ConditionBar;
