import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="menu">
          <div className="menu_nav">
            <ul>
              <li>
                <Link className="link" to="/cards">Kartlar</Link>
              </li>
              <li>Kredditlər</li>
              <li>Əmanətlər</li>
              <li>Köçürmələr</li>
              <li>Rəqəmsal Bankçılıq</li>
              <li>Əlavə xidmətlər</li>
            </ul>
          </div>
          <div className="menu_tools">
            <div className="call">
              <BsFillTelephoneFill className="phone" />
              <a href="tel:117">117</a>
            </div>
            <div className="internet_banking">
              <BsArrowRightCircleFill className="arrow" />
              <span>Internet Bankçılıq</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
