import * as EgovNet from "api/egovFetch";
import CODE from "constants/code";
import URL from "constants/url";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GALLERY_BBS_ID } from "config";

function EgovDownloadCreate({ type, setOpenPopUp, onReset, title }) {
  const currentDate = `${new Date().getFullYear()}년 ${
    new Date().getMonth() + 1
  }월 ${new Date().getDate()}일`;
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
    deleteYn: "N",
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

  const onClose = () => {
    setOpenPopUp(false);
    onReset();
  };

  const createBoard = () => {
    const formData = new FormData();
    for (let key in boardInfo) {
      formData.append(key, boardInfo[key]);
    }

    console.log("boardInfo", boardInfo);
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
            // navigate(URL.INFORM_GALLERY, { state: { bbsId: bbsId } });
            setOpenPopUp(false);
            typeof onReset === "function" && onReset();
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
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        borderRadius: "10px",
        padding: "20px",
        width: "50%",
      }}
    >
      {/* <!-- Navigation --> */}
      {/* <!--// Navigation --> */}
      <div className="contents PDS_REG" id="contents">
        <h2 className="tit_2">{title}</h2>
        <div className="btn_container">
          <button
            type="button"
            className="btn modal_btn"
            title="전체메뉴 닫힘"
            onClick={onClose}
          />
        </div>

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
          </div>

          <div className="info">
            {/* db에서 불러와야하는 부분 */}
            <dl>
              <dt className="tit_7">작성자</dt>
              <dd>test</dd>
            </dl>
            <dl>
              <dt className="tit_7">작성일</dt>
              <dd>{currentDate}</dd>
            </dl>
          </div>
          <br />
          <h3 className="tit_6">
            <label htmlFor="pdsnm">설명 입력</label>
          </h3>

          <div className="pds_desc_edit">
            <textarea
              className="f_txtar w_full"
              name="content"
              id="pdsnm"
              cols="20"
              rows="10"
              onChange={handleChange}
              value={boardInfo.content}
              placeholder={`분양 설명에는 거래하는 장소나 병원 기록 등 자세하게 적어주세요 :)`}
            ></textarea>
            <input
              className="w_full"
              type="file"
              name=""
              id="ip4"
              style={{ display: "inline-block" }}
            />
          </div>
          <br />
          <div className="board_btn_area">
            <div className="right_col btn1">
              <div onClick={createBoard} className="btn btn_blue_h46 w_100">
                등록
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
