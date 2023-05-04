import React from "react";
import "./NetworkCard.css";
import Buttontype from "../Buttontype";

const NetworkCard = (props) => {
  return (
    <div className={`${props.cardName} networkcard`} key={props.id}>
      <div className={`${props.cardName}-img NetworkCard-img`}>
        <img
          src={props.imgsrc}
          alt={`${props.cardName}-img`}
        />
      </div>
      <h2 className={`${props.cardName}-title`}>{props.h2text}</h2>
      <p>
      {props.ptext}
      </p>
        <Buttontype inner_text={props.buttontext}/>
    </div>
  );
};

export default NetworkCard;
