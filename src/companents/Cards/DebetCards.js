import React from "react";
import AddButton from "../AddButton";
import "./DebetCards.css";

const AddToCard = (item) => {
  let id = item.parentElement.id;
  let src = item.parentElement.firstElementChild.firstElementChild.src;
  let title = item.previousElementSibling.previousElementSibling.innerHTML;

  let product_list = JSON.parse(localStorage.getItem("products"));
  let existProd = product_list.find((item) => item.Id == id);
  if (existProd === undefined) {
    product_list.push({
      Id: id,
      Title: title,
      Image: src,
      Count: 1,
    });
  } else {
    existProd.Count += 1;
  }
  localStorage.setItem("products", JSON.stringify(product_list));
};

const DebetCards = (props) => {
  return (
    <div className={`cards__box-${props.title} debet__card`} id={props.id}>
      <div className={`${props.title}-img debet__card--img`}>
        <img src={props.src} alt={props.title} />
      </div>
      <h1>{props.name}</h1>
      <p>{props.content}</p>
      <AddButton
        inner_text={props.buttontext}
        addToChart={(e) => {
          AddToCard(e.target);
        }}
      />
    </div>
  );
};

export default DebetCards;
