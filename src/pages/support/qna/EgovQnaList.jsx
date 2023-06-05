import React from 'react';
import { Link , NavLink} from 'react-router-dom';
import Table1 from 'components/table1';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';
import URL from 'constants/url';

function EgovQnaList() {
    const data = [
    
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
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to="">마켓</Link></li>
                        <li>중고 마켓</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents QNA_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">마켓</h1>                            
                        </div>
                        
                        <h2 className="tit_2">중고 마켓</h2>

                        <NavLink to={URL.ABOUT_HISTORY2} className={({isActive}) => (isActive ? "cur": "")}>       <Table1 data={data} /></NavLink>

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

                        {/* <!--// 본문 --> */}
                        <div className="board_btn_area">
                            <div className="left_col btn1">
                            </div>

                            <div className="right_col btn1">
                                <Link to={URL.SUPPORT_DOWNLOAD_CREATE} className="btn btn_upload"><span> 물품 등록</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EgovQnaList;