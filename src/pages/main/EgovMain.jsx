import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import * as EgovNet from "api/egovFetch";
import URL from "constants/url";
import Slider from "Slider/Slider";
import Table2 from "components/table2";
import ContentSlider from "components/EgovSlider";

/**
 * MAIN PAGE
 * author: ms.kim
 * @param {*} props 
 * @returns 
 */
function EgovMain(props) {
  const data = [
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "동대문구 동물보호소",
      description: "3개월 길냥이",
    },
    {
      imageSrc: "images/22.jpg",
      title: "서초 동물보호소",
      description: "5살 비숑",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "동대문구 동물보호소",
      description: "3개월 길냥이",
    },
    {
      imageSrc: "images/22.jpg",
      title: "서초 동물보호소",
      description: "5살 비숑",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "동대문구 동물보호소",
      description: "3개월 길냥이",
    },
    {
      imageSrc: "images/22.jpg",
      title: "서초 동물보호소",
      description: "5살 비숑",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "동대문구 동물보호소",
      description: "3개월 길냥이",
    },
    {
      imageSrc: "images/22.jpg",
      title: "서초 동물보호소",
      description: "5살 비숑",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "동대문구 동물보호소",
      description: "3개월 길냥이",
    },
    {
      imageSrc: "images/22.jpg",
      title: "서초 동물보호소",
      description: "5살 비숑",
    },
    {
      imageSrc: "/assets/images/1.png",
      title: "성동 동물보호소",
      description: "2개월 포메",
    },
    {
      imageSrc: "/images/3.jpg",
      title: "동대문구 동물보호소",
      description: "3개월 길냥이",
    },
    {
      imageSrc: "images/22.jpg",
      title: "서초 동물보호소",
      description: "5살 비숑",
    },
  ];

  const getPetBoardList = useCallback(() => {
    console.groupCollapsed("EgovMain.retrieveList()");

    const url = "/pet/user/boardListApi.do";
    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(),
    };

    EgovNet.requestFetch(
      url,
      options,
      (res) => {
        console.log(res);
        // setNoticeBoard(resp.result.notiList);
        // setGallaryBoard(resp.result.galList);

        // let mutNotiListTag = [];
        // mutNotiListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

        // // 리스트 항목 구성
        // resp.result.notiList.forEach(function (item, index) {
        //   if (index === 0) mutNotiListTag = []; // 목록 초기화
        //   mutNotiListTag.push(
        //     <li key={index}>
        //       <Link
        //         to={{ pathname: URL.INFORM_NOTICE_DETAIL }}
        //         state={{
        //           nttId: item.nttId,
        //           bbsId: item.bbsId,
        //         }}
        //       >
        //         {item.nttSj}
        //         <span>{item.frstRegisterPnttm}</span>
        //       </Link>
        //     </li>
        //   );
        // });
        // setNoticeListTag(mutNotiListTag);

        // let mutGallaryListTag = [];
        // mutGallaryListTag.push(<li key="0">검색된 결과가 없습니다.</li>); // 게시판 목록 초기값

        // // 리스트 항목 구성
        // resp.result.galList.forEach(function (item, index) {
        //   if (index === 0) mutGallaryListTag = []; // 목록 초기화
        //   mutGallaryListTag.push(
        //     <li key={index}>
        //       <Link
        //         to={{ pathname: URL.INFORM_GALLERY_DETAIL }}
        //         state={{
        //           nttId: item.nttId,
        //           bbsId: item.bbsId,
        //         }}
        //       >
        //         {item.nttSj}
        //         <span>{item.frstRegisterPnttm}</span>
        //       </Link>
        //     </li>
        //   );
        // });
        // setGallaryListTag(mutGallaryListTag);
      },
      (e) => {
        console.log("PET LIST ERR!!--- ", e);
      }
    );
  }, []);

  useEffect(() => {
    getPetBoardList();
  }, []);

  return (
    <div>
      <Slider />
      <h2 style={{ fontSize: "30px", margin: "0 20px" }}>분양 정보</h2>
      <ContentSlider data={data} />
      <div
        className="media-text"
        style={{ marginLeft: "50px", marginTop: "100px" }}
      >
        <div style={{ marginLeft: "100px", marginTop: "100px" }}>
          <h2>근처 보호소에 있는 유기동물</h2>
          <br />
          <br />
          <div style={{ background: "black", width: "1200px" }}></div>
          <p>
            전국에 있는 동물 보호소는 206곳으로 보호 센터가 있으며
            <br />
            자세한 위치는{" "}
            <a
              href="https://www.animal.go.kr/front/index.do"
              style={{ color: "black" }}
            >
              <b>국가동물보호정보시스템</b>{" "}
            </a>
            에서 확인하실 수 있습니다.
            <br />
            유기동물들도 우리와 같은 생명입니다. <br />
            언제나 같은 자리에서 가족을 기다리고 있습니다.
          </p>
        </div>
        <div className="card-main">
          <Table2 data={data} />
        </div>
      </div>

      <div style={{ display: "flex", margin: "200px", marginLeft: "150px" }}>
        <div
          className="media-container"
          style={{
            width: "1000px",
            height: "460px",
            boxShadow: "0 0 10px 5px rgb(239, 239, 239)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src="/images/charts.png"
              style={{ width: "900px", height: "360px", marginTop: "50px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
              }}
            >
              유기동물 폐사(안락사) 통계표
            </div>
          </div>
        </div>

        <div style={{ marginTop: "400px", marginLeft: "30px" }}>
          <p>
            서울시 유기동물 폐사(안락사) 최근 5년 이내의 통계표 <br />
            출처 : 서울 열린데이터광장(서울시 유기동물보호 현황 통계)
          </p>
        </div>
      </div>

      <div style={{ display: "flex", margin: "110px", marginBottom: "200px" }}>
        <div
          className="media-container"
          style={{
            marginLeft: "50px",
            width: "1000px",
            height: "500px",
            boxShadow: "0 0 10px 5px rgb(239, 239, 239)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            width="800"
            height="500"
            src="https://www.youtube-nocookie.com/embed/RjWbd3MQnrU?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="media-text"
          style={{ marginLeft: "50px", marginTop: "120px" }}
        >
          <h2>반려동물은 장난감이 아니에요</h2>
          <br />
          <br />
          <div style={{ background: "black", width: "1200px" }}></div>
          <p>
            인간의 삶을 변화시키고 긍정적인 에너지를 생기게 도와줘요.
            <br />
            반려동물의 체온은 사람보다 1~2도 가량 높아요. 안으면 따뜻할 뿐만
            아니라 포근한 털이 있어서 정서적 안정을 줘요.
            <br />
            불안감, 스트레스, 맥박, 혈랍압 등에서 헌저한 개선 효과를 얻을 수
            있어요.
          </p>
          <p>
            동물보호단체에서는 "반려동물을 쉽게 살 수 있는 구조가 생명 경시
            풍토를 조성한다"라고 말했어요
            <br />
            인간의 생명과 같이 동물의 생명도 소중하답니다.
            <br />
            반려동물을 상업적 목적으로 활용하지 말아주세요. 지능이 낮더라도
            생각하고 조금씩 표현 할 수 있어요.
            <br />
            반려동물은 가족이에요, 인간보다 짧은 시간을 가졌지만 그 짧지만
            전부인 시간 속에서 인간을 대가없이 좋아해줘요.
            <br />
            책임감을 가지고 반려동물의 인생을 행복하게 해줍시당 :)
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default EgovMain;
