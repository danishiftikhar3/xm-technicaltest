import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import "./EventGallery.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const eventGalleryArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={className}
      style={{ ...style, display: "block", color: "#959595" }}
      onClick={onClick}
      icon={["fas", "angle-right"]}
    />
  );
}

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={["fas", "angle-left"]}
      className={className}
      style={{ ...style, display: "block", color: "#959595" }}
      onClick={onClick}
    />
  );
}

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

function EventGallery() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "80px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "40px",
        },
      },
    ],
  };
  return (
    <div className="event-gallery">
      <div className="event-gallery__heading">Event Gallery</div>
      <div className="event-gallery__slider-container">
        <Slider {...settings}>
          {eventGalleryArray.map((num) => {
            return <div key={num} className="event-gallery__item" />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default EventGallery;
