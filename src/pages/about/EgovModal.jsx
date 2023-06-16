import React, { useCallback, useEffect, useState } from "react";
import { Link, useAsyncError } from "react-router-dom";
import Table3 from "components/table3";
import URL from "constants/url";
import { default as EgovLeftNav } from "components/leftmenu/EgovLeftNavAbout";

const EgovModal = ({ info, open }) => {
  const [opened, setOpened] = useState(false);
  const data = [
    {
      imageSrc: "/assets/images/1.png",
      title: "초롱초롱한 검둥이 가족 찾아요",
      description: "2개월 포메 추정",
      content: "비오는 날 횡단보도 앞에 버려져있었습니다. " + "주인을 찾아요",
      place: "성동 동물보호소",
      date: "2023-05-31 15:00",
      user: "지연32049823",
    },
  ];
  const setOpenPopUp = (open) => {
    setOpened((opened) => open || !opened);
  };

  useEffect(() => {
    console.log('test')
    setOpenPopUp()
  }, [open])
  
  return (
    <>
      {opened && (
        <div
          className="container modal"
          style={{
            position: "fixed",
            zIndex: "999",
            backgroundColor: "rgba(0,0,0,0.3)",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            top: "0",
            right: '0',
            bottom: '0',
            left: '0',
            width: "100vw",
            height: "100vh",
          }}
        >
          <Table3 data={data} onCloseFunction={setOpenPopUp} />
        </div>
      )}
    </>
  );
};

export default EgovModal;
