import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/show.jpg";
import img2 from "../../assets/images/show2.png";
import img3 from "../../assets/images/show3.png";
import img4 from "../../assets/images/show.jpg";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
      },
    },
  ],
};
const Carousel = (props) => {
  const { clickEvent } = props;
  return (
    <div className="custom-slider-width">
      <h5> Ongoing Shows</h5>
      <Slider {...settings}>
        <div className="box" onClick={clickEvent}>
          <img src={img1} alt="bassi" className="image-event" />
        </div>
        <div className="box">
          <img src={img2} alt="single" className="image-event" />
        </div>
        <div className="box">
          <img src={img3} alt="pathan" className="image-event" />
        </div>
        <div className="box">
          <img src={img4} alt="tathastu" className="image-event" />
        </div>
        <div className="box">
          <img src={img2} alt="single" className="image-event" />
        </div>
        <div className="box">
          <img src={img3} alt="pathan" className="image-event" />
        </div>
        <div className="box">
          <img src={img2} alt="single" className="image-event" />
        </div>
        <div className="box">
          <img src={img3} alt="pathan" className="image-event" />
        </div>
        <div className="box">
          <img src={img2} alt="single" className="image-event" />
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;
