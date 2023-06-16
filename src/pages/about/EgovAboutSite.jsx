import React from 'react';
import { Link } from 'react-router-dom';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavAbout';

function EgovAboutSite() {
    return (
        <div className="container">
            <div className="c_wrap">

                <div className="layout">
                    {/* <!-- Navigation --> */}
                    <EgovLeftNav></EgovLeftNav>
                    {/* <!--// Navigation --> */}

                    <div className="contents SITE_INTRO" id="contents">
                        {/* <!-- 본문 --> */}

                        <h1 className="tit_3">사이트 소개</h1>

                        <p className="txt_1">안녕하세요. <br/>사랑이 가득한 안전한 동물 분양 사이트 입니다.</p>
                        
                        <h2 className="tit_4">소개 및 목적</h2>
                        <br/>
                        <p className="table11">우리 사이트는 동물 분양을 위한 편리한 온라인 플랫폼으로 강아지와 고양이를 위하여 안전하며 사랑으로 양육할 수 있도록 도움을 드립니다.<br />
                            뛰어난 접근성, 편리한 검색 기능으로 상세한 정보를 볼 수 있을 뿐만 아니라 고객님과 가장 잘 어울리는 동물을 찾을 수있는 시스템을 갖추고 있습니다.<br/>
                            함께할 새롭고 귀엽고 사랑스러운 가족을 안전한 곳에서 입양합시다.< br/> <br/>
                            우리 사이트는 반려동물 분양사기 및 무분별한 번식을 막고 생명에 대한 책임감을 보여주기 위하여 만들었습니다.<br />
                           분양사기나 불법 분양등의 생명에 대한 책임감이 없는 사용자들은 일반 사용자들에게 피해를 끼치지 않게 사용자 정보를 관리하며 노력하겠습니다.<br/>
                            <br/>감사합니다.</p><br/>
                            <br/>
                            <h2 className="tit_4">*동물보호법 및 처벌규정</h2>
                        <br/>
                        <p className="table11">- 동물보호법 제2조 "동물학대"가 동물을 대상으로 정당한 사유 없이 불필요하거나 피할 수 있는 신체적 고통과 스트레스를 주는 행위 및 굶주림, 질병 등에 대하여 적절한 조치를 게을리하거나 방치하는 행위를 말한다고 규정하고 있다.<br />
                        - 소유자등이 동물을 유기한 경우 300만원 이하의 과태료 발생 할 수 있다.<br/>
                        - 소유자등이 외출할 때 인식표를 부착하지 아니한 경우 20만원 이하의 과태료 발생 할 수 있다.
                        <br/>- 소유자등이 안전조치를 하지 않거나 배설물을 수거하지 아니한 경우 50만원 이하의 과태료 할 수 있다.
                          </p>   

                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EgovAboutSite;