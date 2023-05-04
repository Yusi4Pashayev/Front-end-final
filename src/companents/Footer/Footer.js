import React from "react";
import {
  AiFillApple,
  AiFillAndroid,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";
import HorizantalList from "./HorizantalList";

const footerMenuList = [
  { id: Math.random(), title: "Kartlar", list: ["Kartlar", "Debet", "Digər"] },
  { id: Math.random(), title: "Kreditlər", list: ["Nağd", "Mikro", "İpoteka"] },
  { id: Math.random(), title: "Əmanətlər", list: ["Müddətli", "Proqressiv", "Yığım", "Faizlər əvvəlcədən", "Topla"] },
  { id: Math.random(), title: "Köçürmələr", list: ["Ölkəxarici", "Ölkədaxili"] },
  { id: Math.random(), title: "Rəqəmsal bankçılıq", list: ["UBank", "İnternet bankçılıq", "Şəxsi kabinet", "Unimiles şəxsi kabinet", "Onlayn kredit ödənişi", "Onlayn kredit müraciəti"] },
  { id: Math.random(), title: "Əlavə xidmətlər", list: ["Hesablaşma-kassa xidməti", "POS terminal / Smart kassa", "Depozit qutuları", "Onlayn ticarət (eCommerce)"] },
  { id: Math.random(), title: "Bank Haqqında", list: ["Rəhbərlik", "Müxbir hesablar", "Təklif və Şikayətlər", "İnsan resursları", "Hesabatlar", "Digər sənədlər"] },
];

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer__area">
          <div className="footer__menu">
            {footerMenuList.map((item) => {
              return (
                <HorizantalList
                  key={item.id}
                  title={item.title}
                  list={item.list}
                />
              );
            })}
          </div>
          <div className="footer__social">
            <a href="#" className="apple">
              <AiFillApple />
            </a>
            <a href="#" className="android">
              <AiFillAndroid />
            </a>
            <a href="#" className="facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="twitter">
              <AiOutlineTwitter />
            </a>
            <a href="#" className="linkedin">
              <FaLinkedinIn />
            </a>
            <a href="#" className="youtube">
              <AiFillYoutube />
            </a>
            <a href="#" className="instagram">
              <AiFillInstagram />
            </a>
            <a href="#" className="teelegram">
              <FaTelegramPlane />
            </a>
          </div>
          <hr />
          <div className="footer__cbar">
            <div className="footer__cbar--cr">
              <span>© 2023, Unibank - Sənin Bankın</span>
              <div>
                Unibank Azərbaycan Respublikası Mərkəzi Bankının 73 saylı 14
                dekabr 2010-cu il tarixli lisenziyası əsasında fəaliyyət
                göstərir.
                <br /> Bütün hüquqlar qorunur.
              </div>
            </div>
            <div className="footer__cbar--partner">
              <a href="#">
                <img src="https://unibank.az/assets/images/adif.png" alt="" />
              </a>
              <a href="#">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  src="https://unibank.az/assets/images/infobank.png?v4"
                  alt=""
                />
              </a>
              <a href="#">
                <img src="https://unibank.az/assets/images/msp.png?v5" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
