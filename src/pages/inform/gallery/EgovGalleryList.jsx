import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from 'components/Register'
import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import { GALLERY_BBS_ID } from 'config';

import { default as EgovLeftNav } from 'components/leftmenu/EgovLeftNavInform';
import EgovPaging from 'components/EgovPaging';

import { itemIdxByPage } from 'utils/calc';

function EgovGalleryList(props) {
    console.group("EgovGalleryList");
    console.log("[Start] EgovGalleryList ------------------------------");
    console.log("EgovGalleryList [props] : ", props);

    const location = useLocation();
    console.log("EgovGalleryList [location] : ", location);

    const cndRef = useRef();
    const wrdRef = useRef();

    const bbsId = GALLERY_BBS_ID;

    // eslint-disable-next-line no-unused-vars
    const [searchCondition, setSearchCondition] = useState(location.state?.searchCondition || { bbsId: bbsId, pageIndex: 1, searchCnd: '0', searchWrd: '' });// 기존 조회에서 접근 했을 시 || 신규로 접근 했을 시
    const [masterBoard, setMasterBoard] = useState({});
    const [user, setUser] = useState({});
    const [paginationInfo, setPaginationInfo] = useState({});

    const [listTag, setListTag] = useState([]);

    const retrieveList = useCallback((searchCondition) => {
        console.groupCollapsed("EgovGalleryList.retrieveList()");

        const retrieveListURL = '/cop/bbs/selectBoardListAPI.do';
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(searchCondition)
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {
                setMasterBoard(resp.result.brdMstrVO);
                setPaginationInfo(resp.result.paginationInfo);
                setUser(resp.result.user);

                let mutListTag = [];
                mutListTag.push(<p className="no_data" key="0">검색된 결과가 없습니다.</p>); // 게시판 목록 초기값

                const resultCnt = parseInt(resp.result.resultCnt);
                const currentPageNo = resp.result.paginationInfo.currentPageNo;
                const pageSize = resp.result.paginationInfo.pageSize;

                // 리스트 항목 구성
                resp.result.resultList.forEach(function (item, index) {
                    console.log(item)
                    if (index === 0) mutListTag = []; // 목록 초기화
                    const listIdx = itemIdxByPage(resultCnt , currentPageNo, pageSize, index);

                    mutListTag.push(
                        <Link to={{pathname: URL.INFORM_GALLERY_DETAIL}}
                            state={{
                                nttId: item.nttId,
                                bbsId: item.bbsId,
                                searchCondition: searchCondition
                            }}
                            key={listIdx} className="list_item" >
                            <div>{listIdx}</div>
                            {(item.replyLc * 1 ? true : false) &&
                                <><div className="al reply">
                                    {item.nttSj}
                                </div></>}
                            {(item.replyLc * 1 ? false : true) &&
                                <><div className="al">
                                    {item.nttSj}
                                </div></>}
                            <div>{item.frstRegisterNm}</div>
                            <div>{item.frstRegisterPnttm}</div>
                            <div>{item.inqireCo}</div>
                        </Link>
                    );
                });
                setListTag(mutListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovGalleryList.retrieveList()");
    },[]);

    //======================================================
    useEffect(() => {
        retrieveList(searchCondition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log("------------------------------EgovGalleryList [End]");
    console.groupEnd("EgovGalleryList");
    return (
        <div className="container">
            <div className="c_wrap">

                <div className="layout">
                   
                    <div className="contents SITE_GALLARY_LIST" id="contents">
                        {/* <!-- 본문 --> */}

                        <div className="top_tit">
                            <h1 className="tit_1">회원가입</h1>
                        </div>

                        <h2 className="tit_2">{masterBoard && masterBoard.bbsNm}</h2>


                        <Login/>

                        {/* <!--// 본문 --> */}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default EgovGalleryList;