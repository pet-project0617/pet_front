import React from 'react';
import { Link } from 'react-router-dom';


/**
 * Footer Component
 * author: ms.kim 
 */
function EgovFooter() {
    return (
        <div className="footer">
            <div className="inner">

                <div className='img'>
                <img className="m" src="/assets/images/logo_sample.png"  style={{width:'150px' , float:"right",marginTop:'10px'}} alt="" />
                </div>
             
                <div className="info">
                    안전한 동물 분양 사이트
                    <p>
                        대표문의메일 : jy287454@gmail.com <span className="m_hide">|</span><br className="m_show" />  대표전화 :  010-000-000<br />
               
                    </p>
                    <br/>
                    <p>
                       이용약관 <span className="m_hide">|</span><br className="m_show" />  개인정보처리방침 | 공지사항 | 사이트소개 | 유기동물 후원 | 동물보호소 | 사기 신고<br />
               
                    </p>
                    {/* <p className="copy">Copyright © 2021 Ministry Of The Interior And Safety. All Rights Reserved.</p> */}
                </div>
          
            </div>
        </div>
    );
}

export default EgovFooter;