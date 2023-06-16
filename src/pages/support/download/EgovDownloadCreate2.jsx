import * as EgovNet from "api/egovFetch";
import CODE from "constants/code";
import URL from "constants/url";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GALLERY_BBS_ID } from "config";

function EgovDownloadCreate() {
    const currentDate = `${new Date().getFullYear()}:${new Date().getMonth()}:${new Date().getDate()}`
  const navigate = useNavigate();
  const location = useLocation();

  const bbsId = location.state?.bbsId || GALLERY_BBS_ID;
  const [masterBoard, setMasterBoard] = useState();
  const [paginationInfo, setPaginationInfo] = useState();
  const [user, setUser] = useState();
  const [searchCondition, setSearchCondition] = useState();
  const [listTag, setListTag] = useState();
  const [boardNone, setBoardNone] = useState(
    <p className="no_data" key="0">
      검색된 결과가 없습니다.
    </p>
  );

  const [boardInfo, setBoardInfo] = useState({
    userId: "user",
    name: "",
    title: "",
    content: "",
    // atchFileId: "",
    userSeq: "1",
    deleteYn: "",
    contentType: "A", //게시판 타입
    views: "",
  });

  /**
   * api test
   */
  const getList = () => {
    const retrieveListURL = "/pet/user/boardListAPI.do";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(searchCondition),
    };

    EgovNet.requestFetch(
      retrieveListURL,
      requestOptions,
      (resp) => {
        console.log("resp::::: ", resp);
        setMasterBoard(resp.result.brdMstrVO);
        setPaginationInfo(resp.result.paginationInfo);
        setUser(resp.result.user);

        let mutListTag = [];
        resp.result.resultList.forEach(function (item, index) {});

        resp.result.resultList.length === 0 && mutListTag.push();

        setListTag(mutListTag);
      },
      (resp) => {
        console.log("err response : ", resp);
      }
    );
  };

  const handleChange = (e) => {
    setBoardInfo({
      ...boardInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidate = () => {
    return boardInfo.title && boardInfo.content.length > 0;
  };

  const createBoard = () => {
    const formData = new FormData();
    for (let key in boardInfo) {
      formData.append(key, boardInfo[key]);
    }

    console.log(boardInfo);
    const jToken = localStorage.getItem("jToken");

    if (checkValidate(formData)) {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: jToken,
        },
        body: formData,
      };

      EgovNet.requestFetch(
        "/pet/user/insertBoardAPI.do",
        requestOptions,
        (resp) => {
          if (Number(resp.resultCode) === Number(CODE.RCV_SUCCESS)) {
            navigate(URL.INFORM_GALLERY, { state: { bbsId: bbsId } });
          } else {
            navigate(
              { pathname: URL.ERROR },
              { state: { msg: resp.resultMessage } }
            );
          }
        }
      );
    }
  };

  useEffect(() => {
    getList();
  }, []);

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
              <Link to={URL.INTRO_WORKS}>분양</Link>
            </li>
            <li>분양 등록</li>
          </ul>
        </div>
        {/* <!--// Location --> */}

        <div className="layout">
          {/* <!-- Navigation --> */}
          {/* <!--// Navigation --> */}

          <div className="contents PDS_REG" id="contents">
            {/* <!-- 본문 --> */}

            <div className="top_tit">
              <h1 className="tit_1">마켓</h1>
            </div>

            <h2 className="tit_2">물품 등록</h2>
            {/* 무료나눔 중고 마켓 구분 */}

            {/* <!-- 상세 --> */}
            <div className="board_view3">
              <div className="tit_edit">
                <dl>
                  <dt>
                    <label htmlFor="writer">제목</label>
                  </dt>
                  <dd>
                    <input
                      className="f_input2 w_full"
                      type="text"
                      name="title"
                      id="writer"
                      value={boardInfo.title}
                      onChange={handleChange}
                    />
                  </dd>
                </dl>
                <dl>
                  <dt>
                    <label htmlFor="writer">이름</label>
                  </dt>
                  <dd>
                    <input
                      className="f_input2 w_full"
                      type="text"
                      name="name"
                      id="writer"
                      value={boardInfo.name}
                      onChange={handleChange}
                    />
                  </dd>
                </dl>
              </div>

              <div className="info">
                {/* db에서 불러와야하는 부분 */}
                <dl>
                  <dt>작성자</dt>
                  <dd>{boardInfo.userId}</dd>
                </dl>
                <dl>
                  <dt>작성일</dt>
                  <dd>{currentDate}</dd>
                </dl>
              </div>
              <br />
              <h3 className="tit_5">
                <label htmlFor="pdsnm"> 입력</label>
              </h3>
              <div className="pds_desc_edit">
                <textarea
                  className="f_txtar w_full"
                  name="content"
                  id="pdsnm"
                  cols="30"
                  rows="10"
                  value={boardInfo.content}
                  onChange={handleChange}
                  placeholder={`분양 설명에는 거래하는 장소나 병원 기록 등 자세하게 적어주세요 :)`}
                ></textarea>
                <input
                  className="w_full"
                  type="file"
                  name="img"
                  id="ip4"
                  style={{ display: "inline-block" }}
                />
              </div>
              <br />
              <div className="board_btn_area">
                <div className="left_col btn1"></div>

                <div className="right_col btn1">
                  {/* <Link to={URL.INTRO_WORKS} className="btn btn_blue_h46 w_100">
                    등록
                  </Link> */}
                  <div onClick={createBoard} className="btn btn_blue_h46 w_100">
                    등록
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default EgovDownloadCreate;
