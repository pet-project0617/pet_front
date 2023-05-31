import React from 'react';

function EgovInfoPopup(){
    return (
        <div className="wrap_pop TEMPLATE_INTRO">
        <div className="pop_inner">
            <div className="pop_header">
                <h1>꼭 읽어주세요!
                </h1>
                <button className="btn close" type="button">닫기</button>
            </div>
    
            <div className="pop_container">
                <ul className="list_1">
                    <li>안전하고 클린한 동물 분양 사이트입니다.(사기칠라고 오는 인간 바로 잡습니다)</li>
                    <li>무엇보다 동물들의 건강과 행복을 위해 입양을 신중하게 생각해주세요.</li>
                    <li>생명에 대한 책임감은 작은 동물이든 큰 동물이든 인간과 같습니다.</li>
                    <li>동물은 사고파는 물건이 아닙니다. 당신의 장난감이 아니에요.</li>
                </ul>

            </div>
        </div>
    </div>
    )
}

export default EgovInfoPopup;