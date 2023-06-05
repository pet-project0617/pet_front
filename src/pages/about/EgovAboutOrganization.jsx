import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';
import URL from 'constants/url';

function EgovDownloadCreate() {
    return(
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.INTRO_WORKS}>분양</Link></li>
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
                                    <dt><label htmlFor="writer">제목</label></dt>
                                    <dd>
                                        <input className="f_input2 w_full" type="text" name="writer" id="writer"/>
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
                            <br/>
                            <h3 className="tit_5"><label htmlFor="pdsnm">설명 입력</label></h3> 
                            
                            

<div className="pds_desc_edit">
    <textarea className="f_txtar w_full" name="" id="pdsnm" cols="30" rows="10"></textarea>
<input className="w_full" type="file" name="" id="ip4" style={{ display: 'inline-block' }}/>
</div>

<p style={{marginTop:'-20px'}}>분양 설명에는 거래하는 장소나 병원 기록 등 자세하게 적어주세요 :)</p>
<br/>
<div className="board_btn_area">
                            <div className="left_col btn1">
                            </div>

                            <div className="right_col btn1">
                                <Link to={URL.INTRO_WORKS} className="btn btn_blue_h46 w_100">등록</Link>
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