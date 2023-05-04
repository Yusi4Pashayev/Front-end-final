import React from "react";
import "./ChartElement.css";

const ChartElement = (props) => {
  return (
    <div className="chart__element" id={props.id}>
      <div className="chart__element--img">
        <img src={props.src} alt="" />
      </div>
      <div className="chart_title">
        <h1>{props.title}</h1>
      </div>
      <div className="chart__element--count">
        <p>{props.count}</p>
      </div>
      <div className="delete_chart">
        <button type="button" onClick={props.handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ChartElement;
