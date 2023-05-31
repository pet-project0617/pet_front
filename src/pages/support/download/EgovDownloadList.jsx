import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';
import URL from 'constants/url';
import Table1 from 'components/table1';

function EgovDownloadList() {
    const data = [
        {
          imageSrc: "",
          title: "강아지 노즈워크",
          description: "한 번 사용",
          user:"지연"
        },
      
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          {
            imageSrc: "",
            title: "test",
            description: "test",
            user:"지연"
          },
          
      ]
    return(
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to="" className="home">Home</Link></li>
                        <li><Link to="">마켓</Link></li>
                        <li>무료나눔</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents PDS_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">마켓</h1>                            
                        </div>
                        
                        <h2 className="tit_2">무료나눔</h2>




                        <Table1 data={data} />

                        <div className="board_bot">
                            {/* <!-- Paging --> */}
                            <div className="paging">
                                <ul>
                                    <li className="btn"><button to="" className="first">처음</button></li>
                                    <li className="btn"><button to="" className="prev">이전</button></li>
                                    <li><button to="" className="cur">1</button></li>
                                    <li><button to="">2</button></li>
                                    <li><button to="">3</button></li>
                                    <li><button to="">4</button></li>
                                    <li><button to="">5</button></li>
                                    <li className="btn"><button to="" className="next">다음</button></li>
                                    <li className="btn"><button to="" className="last">마지막</button></li>
                                </ul>
                            </div>
                            {/* <!--/ Paging --> */}
                        </div>

                        <div className="board_btn_area">
                            <div className="left_col btn1">
                            </div>

                            <div className="right_col btn1">
                                <Link to={URL.SUPPORT_DOWNLOAD_CREATE} className="btn btn_upload"><span>물품 등록</span></Link>
                            </div>
                        </div>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovDownloadList;