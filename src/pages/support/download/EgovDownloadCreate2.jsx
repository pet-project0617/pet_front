import React from "react";
import { Link } from "react-router-dom";

import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavSupport";
import URL from "constants/url";

function EgovDownloadCreate() {
  return (
    <div
      style={{
        backgroundColor: "white",
        boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        borderRadius: "10px",
        padding: "20px",
        width: "50%"
      }}
    >
      {/* <!-- Navigation --> */}
      {/* <!--// Navigation --> */}
      <div className="contents PDS_REG" id="contents">
        <h2 className="tit_2">분양 등록</h2>

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
                  name="writer"
                  id="writer"
                />
              </dd>
            </dl>
          </div>

          <div className="info">
            {/* db에서 불러와야하는 부분 */}
            <dl>
              <dt>작성자</dt>
              <dd>test</dd>
            </dl>
            <dl>
              <dt>작성일</dt>
              <dd>2023-05-31 18:04</dd>
            </dl>
          </div>
          <br />
          <h3 className="tit_6">
            <label htmlFor="pdsnm">설명 입력</label>
          </h3>

          <div className="pds_desc_edit">
            <textarea
              className="f_txtar w_full"
              name=""
              id="pdsnm"
              cols="20"
              rows="10"
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
            <div className="left_col btn1"></div>

            <div className="right_col btn1">
              <Link to={URL.INTRO_WORKS} className="btn btn_blue_h46 w_100">
                등록
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default EgovDownloadCreate;
