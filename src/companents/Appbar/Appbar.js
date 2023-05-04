import React from "react";
import "./Appbar.css";
import Buttontype from "../Buttontype";
import Buttontypegray from "../Buttontypegray";

export const Appbar = () => {
  return (
    <div className="container">
      <div className="app_bar">
        <div className="img">
          <img src="https://unibank.az/assets/static/Ucard/ucard.webp" alt="" />
        </div>
        <div className="appbar_content">
          <h1>Sənin kartın - UCarddır! </h1>
          <p>
            Bu kart sənə dünyanın istənilən yerində multivalyutalı hesablarla
            alış-veriş imkanı, 10 000 ₼-dək və 40 günədək faizsiz kredit xətti,
            30%-dək keşbek və illik 6%-dək gəlir əldə etmək imkanı verir. Bir
            sözlə, bütün ehtiyaclar tək kartda!
          </p>
          <Buttontype inner_text="Ətraflı" />
          <Buttontypegray inner_text="Partniyorlar" />
          <Buttontypegray inner_text="Şəxsi kabinet" />
        </div>
      </div>
    </div>
  );
};
