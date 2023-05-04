import React, { useState} from "react";
import ChartElement from "./companents/CartElement/ChartElement";

const CartPage = () => {
  const[isActive,setIsActive] = useState(true)
  const [isProductList, setIsProductList] = useState(
    JSON.parse(localStorage.getItem("products"))
  );

  const HandleClick = (clicElement) => {
    const newProductList = isProductList.filter(
      (product) => product.Id !== clicElement.parentElement.parentElement.id
    );
    setIsProductList(newProductList);
    localStorage.setItem("products", JSON.stringify(newProductList));
    if(newProductList.length === 0) {
      setIsActive(false);
    }
    else{
      setIsActive(true);
    }
  };

  return (
    <div>
      <div className="cart_section">
        <div class="container">
          <div className="head__title-cart">
            <ul>
              <li className="title-cart-img">Kartın görünüşü</li>
              <li className="title-cart-name">Kartın adı</li>
              <li className="title-cart-count">Kartın sayı</li>
              <li className="title-cart-button"></li>
            </ul>
          </div>
          <div className={`item_not_found ${isActive?"nShow":""}`}>
            <h1>Səbətdə məhsul yoxdur</h1>
          </div>

          {isProductList.map((product) => {
            return (
              <ChartElement
                handleClick={(e) => {
                  HandleClick(e.target);
                }}
                key={product.Id}
                id={product.Id}
                title={product.Title}
                count={product.Count}
                src={product.Image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
