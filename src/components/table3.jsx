import React, { useState } from "react";

function Table3({ data, onCloseFunction }) {
  const [open, setOpen] = useState(false);
  const onClose = () => {
    typeof onCloseFunction === "function" && onCloseFunction();
  };
  return (
    <div className="parent">
      {data.map(
        ({ imageSrc, title, description, user, date, content }, index) => (
          <div
            className="card3"
            key={index}
            style={{
              backgroundColor: "white",
              boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
            }}
          >
            <img className="card-image3" src={imageSrc} alt="Card" />
            <div className="card-text3">
              <div className="btn_container">
                <button
                  type="button"
                  className="btn modal_btn"
                  title="전체메뉴 닫힘"
                  onClick={onClose}
                />
              </div>
              <h3 className="card-title3" style={{ fontSize: "40px" }}>
                {title}
              </h3>
              <p
                className="card-description3"
                style={{ fontSize: "23px", marginBottom: "150px" }}
              >
                {description}
              </p>
              {/* <div style={{ marginTop: "150px" }}>
                <p className="card-user">{"분양자 : " + user}</p>
                <p className="card-date">{"등록일 : " + date}</p>
              </div> */}
              <p className="card-content" style={{ fontSize: "20px" }}>
                {content}
              </p>
              <button className="btn_card">
                입양 문의
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Table3;
