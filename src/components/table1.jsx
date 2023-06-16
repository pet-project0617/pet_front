import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import Slider from "react-slick";
import PropTypes from "prop-types";
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

const Table1 = ({ data }) => {
  const [opened, setOpened] = useState(false);
  const setPopUp = () => {
    setOpened(true)
  }
  return (
    <>
      <EgovModal open={opened} info = {data}/>
      <Slider {...setting}>
        {data.map(({ imageSrc, title, description, user }, index) => (
          <div className="card_02" key={index} onClick={setOpened}>
            <img className="card-image w_full" src={imageSrc} alt="Card" />
            <div className="card-text">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
              <p className="user"> {user}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Table1;
