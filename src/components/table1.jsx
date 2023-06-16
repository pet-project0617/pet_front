import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "../css/slick-theme.css";
import "../css/slick.css";
import EgovModal from "pages/about/EgovModal";

const setting = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 3,
  centerPadding: "0px",
  //   nextArrow: <SlideBtn />,
  //   prevArrow: <SlideBtn />,
};

const Table1 = ({ data, title }) => {
  const modalRef = useRef()
  // const [opened, setOpened] = useState(false);
  const setPopUp = (seq) => {
    modalRef.current.setOpenPopUp(true, seq)
  };
  return (
    <>
      <EgovModal info={data} ref = {modalRef} title = {title}/>
      <Slider {...setting}>
        {data.map(({ seq,imageSrc, title, description, user }, index) => (
          <div className="card_02" key={index} onDoubleClick={() => setPopUp(seq)}>
            <img className="card-image w_full" src={imageSrc || "/assets/images/1.png"} alt="Card" />
            <div className="card-text">
              <h3 className="card-title">{title}</h3>
              <p className="card-description" style={{width: '100%',whiteSpace:'nowrap', textOverflow: 'ellipsis', overflow:'hidden' }} >{description}</p>
              <p className="user">{user}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Table1;
