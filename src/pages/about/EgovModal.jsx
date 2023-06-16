import Table3 from "components/table3";
import { forwardRef, useImperativeHandle, useState } from "react";
import * as EgovNet from "api/egovFetch";

const EgovModal = forwardRef(({ info, open }, ref) => {
  const [opened, setOpened] = useState(false);
  const [contentData, setContentData]= useState([])

  const setOpenPopUp = (open, seq) => {
    setOpened((opened) => open || !opened);
    if (seq) {
      getDetail(seq)
    }
  };

  const getDetail = (seq) => {
    console.log("SEQ::: ", seq)
    const url = "/pet/user/boardDetailAPI.do";
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        seq: seq,
      }),
    };

    EgovNet.requestFetch(
      url,
      options,
      (res = []) => {
        setContentData([res.result.boardTbVO]);
      },
      (e) => {
        console.log("PET LIST ERR!!--- ", e);
      }
    );
  };

  useImperativeHandle(ref, () => ({
    setOpenPopUp,
  }));

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
            right: "0",
            bottom: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Table3 data={contentData} onCloseFunction={setOpenPopUp} />
        </div>
      )}
    </>
  );
});

export default EgovModal;
