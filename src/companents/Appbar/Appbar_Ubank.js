import React from "react";
import "./Appbar_Ubank.css";
import Buttontype from "../Buttontype";
import Buttontypegray from "../Buttontypegray";

export const Appbar_Ubank = () => {
  return (
    <div className="container">
      <div className="app_bar_ubank">
        <div className="img">
          <img src="https://unibank.az/assets/images/appbar2.png" alt="" />
        </div>
        <div className="appbar_content">
          <h1>UBank </h1>
          <p>
            UBank 24/7 bank xidmətlərinə çıxışı smartfonunda təmin edən mobil
            əlavədir. Ödənişlərini banka gəlmədən, telefonunuzda bir toxunuşla
            həyata keçir!
          </p>
          <div className="appbar_mobile">
            <div className="ubank_playstore">
              <img
                src="https://unibank.az/assets/images/playstore.svg"
                alt="playstore"
              />
            </div>
            <div className="ubank_appstore">
              <img
                src="https://unibank.az/assets/images/appstore.svg"
                alt="appstore"
              />
            </div>
            <div className="ubank_appgallery">
              <img
                src="https://unibank.az/assets/images/app-gallery.svg"
                alt="appgallery"
              />
            </div>
          </div>
          <Buttontype inner_text="Haqqında" />
        </div>
      </div>
    </div>
  );
};
