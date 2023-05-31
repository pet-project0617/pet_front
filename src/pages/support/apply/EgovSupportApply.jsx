import React from 'react';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavSupport';

function EgovSupportApply() {
    return (
        <div className="container">
            <div className="c_wrap">
                {/* <!-- Location --> */}
                <div className="location">
                    <ul>
                        <li><a className="home" href="#!">Home</a></li>
                        <li><a href="#!">마켓</a></li>
                        <li>용품 주의</li>
                    </ul>
                </div>
                {/* <!--// Location --> */}

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}
                    
                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">마켓</h1>

                        <p className="txt_1">반려동물에게 위험한 음식과 용품을 한 눈에 볼 수 있어요</p>
                        
                        <h2 className="tit_4">용품 주의!</h2>

                            <br></br><p className="table11">
               
                             1. 세척되지 않은 장난감 및 용품<br/><br/>
                             2. 식품 안전 검증되지 않은 사료 <br/><br/>
                             3. 염색약이 묻어나오는 인형이나 장난감  
                             </p>
                             <br/>
                        {/* <p>강아지에게 해가 되는 음식</p> */}
                        <h1>🐶</h1>
                        <p className="table11">

               
                            음식 : 포도류, 무화과, 자몽, 체리, 아보카도, 유제품, 토마토, 파 종류, 초콜릿, 마카다미아, 자일리톨, 술, 튀김, 고구마 껍질, 커피 등등 <br/><br/>
                            위에 있는 음식을 먹일 경우<br/>
                            구토 및 설가같은 소화장애 발생, 과도한 침 흘림 현상 발생, 호흡곤란, 위장장애, 부정맥, 복부팽만, 췌장염 발생, 비만의 원인, 간부전, 저혈당 등등 위험한 병에 걸릴 수 있어요.
                            </p>
                            <br/><br/>
                            {/* <p>고양이에게 해가 되는 음식</p> */}
                            <h1>😿</h1>
                        <p className="table11">
                            
     
                            음식 : 카페인, 우유, 뼈가 있는 음식, 강아지 사료, 아보카도, 파 종류, 전복 및 소라, 오징어, 생 돼지고기, 날달걀, 향신료, 간, 소금 등등 <br/><br/>
                           위에 있는 음식을 먹일 경우<br/>
                            중독 증상, 구토, 발열, 발작, 고혈압, 탈수 증상, 심장병 및 시력 저하, 위장장애, 비타민 결핍증, 급성 식염 중독, 결막염, 피부염 등에 병에 걸릴 수 있어요.
                            </p>
                    
                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovSupportApply;