import React from 'react';
import Slider from "react-slick";
import img1 from '../../assets/images/show.jpg';
import img2 from '../../assets/images/show2.png';
import img3 from '../../assets/images/show3.png';
import img4 from '../../assets/images/show.jpg';
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0,
            infinite: true,
          }
        }
      ]
  };
const UpcomingEvents = ()=>{
    return(
        <div className="custom-slider-width">
          <h5> Upcoming Events</h5>
          <Slider {...settings}>
            <div className="upcoming-box">
              <img src={img1} alt="bassi" />
            </div>
            <div className="upcoming-box">
            <img src={img2} alt="single"  />
            </div>
            <div className="upcoming-box">
            <img src={img3} alt="pathan"  />
            </div>
            <div className="upcoming-box">
            <img src={img4} alt="tathastu"  />
            </div>
            <div className="upcoming-box">
            <img src={img3} alt="pathan"  />
            </div>
            <div className="upcoming-box">
            <img src={img4} alt="tathastu"  />
            </div>
            <div className="upcoming-box">
            <img src={img3} alt="pathan"  />
            </div>
            <div className="upcoming-box">
            <img src={img4} alt="tathastu"  />
            </div>
            <div className="upcoming-box">
            <img src={img3} alt="pathan"  />
            </div>
          </Slider>
        </div>
    )
}

export default UpcomingEvents;