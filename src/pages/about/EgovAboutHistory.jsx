import React from 'react';
import { Link } from 'react-router-dom';
import Table3 from 'components/table3';
import URL from 'constants/url';
import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutHistory() {
    const data = [
        {
          imageSrc: "/assets/images/1.png",
          title: "성동 동물보호소",
          description: "2개월 포메"
        },
        
      ];
    return (

        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><Link to={URL.MAIN} className="home" >Home</Link></li>
                        <li><Link to={URL.ABOUT}>분양</Link></li>
                        <li>해당 게시물 상세</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                
                    
                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">상세</h1>
                        <br/>

                        <Table3 data={data} />

                 
                    
                    
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutHistory;