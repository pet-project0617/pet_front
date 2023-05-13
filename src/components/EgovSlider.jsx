import React from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
// import Table1 from "./table1";
import "../css/slick-theme.css";
import "../css/slick.css";

const setting = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 6,
  slidesToScroll: 3,
  centerPadding: "0px",
//   nextArrow: <SlideBtn />,
//   prevArrow: <SlideBtn />,
};

const ContentSlider = ({ data }) => {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <Slider {...setting}>
        {data.map(({ imageSrc, title, description, user }, index) => (
          <div className="card_02" key={index}>
            <img className="card-image w_full" src={imageSrc} alt="Card" />
            <div className="card-text">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
              <p className="user"> {user}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ContentSlider.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ContentSlider;
