import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as EgovNet from 'api/egovFetch';
import URL from 'constants/url';
import Slider  from 'Slider/Slider';
import Table2  from 'components/table2';

function EgovMain(props) {
    const data = [
        {
          imageSrc: "/assets/images/1.png",
          title: "성동 동물보호소",
          description: "2개월 포메"
        },
        {
          imageSrc: "/images/11.jpg",
          title: "동대문구 동물보호소",
          description: "3개월 길냥이"
        },
        {
          imageSrc: "images/22.jpg",
          title: "서초 동물보호소",
          description: "5살 비숑"
        }
      ];

    console.group("EgovMain");
    console.log("[Start] EgovMain ------------------------------");
    console.log("EgovMain [props] : ", props);

    const location = useLocation();
    console.log("EgovMain [location] : ", location);

	// eslint-disable-next-line no-unused-vars
    const [noticeBoard, setNoticeBoard] = useState();
	// eslint-disable-next-line no-unused-vars
    const [gallaryBoard, setGallaryBoard] = useState();
    const [noticeListTag, setNoticeListTag] = useState();
    const [gallaryListTag, setGallaryListTag] = useState();

    const retrieveList = useCallback(() => {
        console.groupCollapsed("EgovMain.retrieveList()");

        const retrieveListURL = '/cmm/main/mainPageAPI.do';
        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify()
        }

        EgovNet.requestFetch(retrieveListURL,
            requestOptions,
            (resp) => {

                setNoticeBoard(resp.result.notiList);
                setGallaryBoard(resp.result.galList);

                let mutNotiListTag = [];
                mutNotiListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

                // 리스트 항목 구성
                resp.result.notiList.forEach(function (item, index) {
                    if (index === 0) mutNotiListTag = []; // 목록 초기화
                    mutNotiListTag.push(
                        <li key={index}>
                            <Link
                                to={{pathname: URL.INFORM_NOTICE_DETAIL}}
                                state={{
                                    nttId: item.nttId,
                                    bbsId: item.bbsId
                                }}
                            >
                                {item.nttSj}
                                <span>{item.frstRegisterPnttm}</span>
                            </Link>
                        </li>
                    );
                });
                setNoticeListTag(mutNotiListTag);

                let mutGallaryListTag = [];
                mutGallaryListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

                // 리스트 항목 구성
                resp.result.galList.forEach(function (item, index) {
                    if (index === 0) mutGallaryListTag = []; // 목록 초기화
                    mutGallaryListTag.push(
                        <li key={index}>
                            <Link
                                to={{pathname: URL.INFORM_GALLERY_DETAIL}}
                                state={{
                                    nttId: item.nttId,
                                    bbsId: item.bbsId
                                }}
                            >
                                {item.nttSj}
                                <span>{item.frstRegisterPnttm}</span>
                            </Link>
                        </li>
                    );
                });
                setGallaryListTag(mutGallaryListTag);
            },
            function (resp) {
                console.log("err response : ", resp);
            }
        );
        console.groupEnd("EgovMain.retrieveList()");
    },[]);

    useEffect(() => {
        retrieveList();
    }, [retrieveList]);

    console.log("------------------------------EgovMain [End]");
    console.groupEnd("EgovMain");

 
    return (
        <div>
          <Slider/>
          <br/>
          <div className='media-text' style={{ marginLeft: '50px', marginTop:'100px' }}>
    <h2>근처 보호소에 있는 유기동물</h2>
    <br/><br/>
    <div style={{background:"black", width:'1200px'}}></div>
    <p>전국에 있는 동물 보호소는 206곳으로 보호 센터가 있으며<br/>
         자세한 위치는 <a href='https://www.animal.go.kr/front/index.do'><b>국가동물보호정보시스템</b> </a>에서 확인하실 수 있습니다.<br/>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
           It has survived not only five centuries,</p>
                     <div className='card-main'>
            {/* <Table2
              imageSrc={"/assets/images/1.png"}
                title={"test1"}
                description={"2개월 포메"}
            /> */}
            <Table2 data={data} />
               {/* <Table2
              imageSrc={"/assets/images/1.png"}
                title={"검둥이 가족 찾아요"}
                description={"2개월 포메"}
            /> */}
            </div>
  
  </div>
         

         <div style={{ display: 'flex', margin:'200px', marginLeft:'350px' }}>
  <div className="media-container" style={{ width: '1200px', height: '600px', boxShadow: '0 0 10px 5px rgb(239, 239, 239)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <h4 style={{ marginTop:'-500px', marginLeft:'-270px'}}>최근 10년 내에 버려진 유기동물 통계표</h4>
  <p style={{fontSize:"150px"}}>Recharts</p>

  </div>

</div>


          <div style={{ display: 'flex', margin:'50px', marginBottom:'200px' }}>
  <div className="media-container" style={{ width: '1200px', height: '600px', boxShadow: '0 0 10px 5px rgb(239, 239, 239)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <iframe width="1000" height="600" src="https://www.youtube-nocookie.com/embed/RjWbd3MQnrU?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  </div>
  <div className='media-text' style={{ marginLeft: '50px', marginTop:'100px' }}>
    <h2>What is Lorem Ipsum?</h2>
    <br/><br/>
    <div style={{background:"black", width:'1200px'}}></div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
           It has survived not only five centuries,</p>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/>
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/>
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/>
           It has survived not only five centuries,</p>
  </div>
</div>
        </div>
      );
}

export default EgovMain;