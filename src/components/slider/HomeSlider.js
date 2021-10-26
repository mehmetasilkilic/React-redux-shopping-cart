import React, { Component } from "react";
import Slider from "react-slick";
import sliderItems from '../../assets/JsonData/sliderItems.json'
import './homeSlider.scss'

export default class HomeSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div className="homeSlider">
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div className="slide">
              <img className="slideImg" src={item.image} alt="" />
              <div className="infoContainer">
                <h2 className="title">{item.title}</h2>
                <p className="desc">{item.desc}</p>
                <button>SHOW NOW</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}