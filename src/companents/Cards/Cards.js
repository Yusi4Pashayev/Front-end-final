import React from "react";
import AddButton from "../AddButton";
import { BsCreditCard2Back, BsHourglass } from "react-icons/bs";
import { TbArrowsRightLeft } from "react-icons/tb";
import "./Cards.css";


const AddToCard = (item) => {
  let id = item.parentElement.parentElement.id;
  let src = item.parentElement.previousElementSibling.firstElementChild.src;
  let title = item.parentElement.firstElementChild.innerHTML;

  let product_list = JSON.parse(localStorage.getItem("products"));
  let existProd = product_list.find((item) => item.Id == id);
  if(existProd === undefined) {
    product_list.push({
        Id: id,
        Title: title,
        Image: src,
        Count: 1
    })
}
else{
    existProd.Count += 1;
}
localStorage.setItem('products',JSON.stringify(product_list))
  
};

const Cards = () => {
  return (
    <div className="ucard-box" id="333">
      <div className="cards__box--img">
        <img
          src="https://unibank.az/uploads/items/o_1g04kl6mn107c1a6lc6btp4pfda.gif"
          alt=""
        />
      </div>
      <div className="cards__box--content">
        <h1>UCard</h1>
        <p>
          UCard - kredit və multivalyutalı debet kartını özündə birləşdirən tək
          kartdır.
        </p>
        <div className="cards__box--contentbottom">
          <div className="about_ucard">
            <div className="about_ucard--icon">
              <BsCreditCard2Back className="cartIcon" />
            </div>
            <div className="about_ucard--text">Multivalyutalı tək kart</div>
          </div>
          <div className="about_ucard">
            <div className="about_ucard--icon">
              <BsHourglass className="HourglassIcon" />
            </div>
            <div className="about_ucard--text">40 günədək faizsiz kredit</div>
          </div>
          <div className="about_ucard">
            <div className="about_ucard--icon">
              <TbArrowsRightLeft className="arrowRightLeft" />
            </div>
            <div className="about_ucard--text">30%-dək keşbek</div>
          </div>
        </div>
        <AddButton
          inner_text="Səbətə əlavə et"
          addToChart={(e) => {
            AddToCard(e.target);
          }}
        />
      </div>
    </div>
  );
};

export default Cards;
