import React from "react";
import './SliderItem.css'

const Slider_item = (props) => {
  return (
    <div className="slider__item" key={props.id}>
      <div className="slider__item--img">
        <img src={props.src} alt="..." />
      </div>
      <div className="slider__item--content">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <span>Ətraflı</span>
      </div>
    </div>
  );
};

export default Slider_item;
