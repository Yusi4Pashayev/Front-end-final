import React, { useState, useEffect } from "react";
import { BsBasket2Fill, BsSun, BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import "./Header.css";
import Navigation from "./Navigation";

import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isActiveTheme, setIsActiveTheme] = useState(false);
  const [isActiveType, setIsActiveType] = useState(false);
  const [isActiveLang, setIsActiveLang] = useState(1);
  const [isCount, setIsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let items = JSON.parse(localStorage.getItem("products"));
      if (items !== undefined || items.length !== 0 || items !== null) {
        setIsCount(items.length);
        console.log(isCount);
      }
    }, 100);
  }, []);

  const handleClickSearch = () => {
    setIsActiveSearch((current) => !current);
  };

  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="header_top">
            <div className="burger_menu nShow">
              <CgMenuLeft />
            </div>
            <div className="header_top_left">
              <div className="logo">
                <Link to="/">
                  <img
                    src="https://unibank.az/assets/images/logonew-orange1.png"
                    alt="..."
                  />
                </Link>
              </div>
              <div className="top_nav">
                <ul>
                  <li>Xidmət şəbəkəsi</li>
                  <li>Bank haqqında</li>
                  <li>Keşbek</li>
                  <li>Tariflər</li>
                  <li>İnsan Resurslar</li>
                  <li>Bankla əlaqə və təkliflər</li>
                </ul>
              </div>
            </div>
            <div className="header_top_right">
              <div className="chart">
                <Link to="/cart" className="chart-link">
                  <BsBasket2Fill />
                  <span id="count">{isCount}</span>
                </Link>
              </div>
              <div className="type">
                <span
                  className={`Ferdi ${isActiveType ? "" : "border"}`}
                  onClick={() => {
                    setIsActiveType(false);
                  }}
                >
                  Fərdi
                </span>
                <span
                  className={`Biznes ${isActiveType ? "border" : ""}`}
                  onClick={() => {
                    setIsActiveType(true);
                  }}
                >
                  Biznes
                </span>
              </div>
              <div className="theme">
                <div
                  className={`sun ${isActiveTheme ? "" : "nShow"}`}
                  onClick={() => {
                    setIsActiveTheme(false);
                  }}
                >
                  <BsSun className="sun-icon" />
                </div>
                <div
                  className={`moon ${isActiveTheme ? "nShow" : ""}`}
                  onClick={() => {
                    setIsActiveTheme(true);
                  }}
                >
                  <BsFillMoonStarsFill className="moon-icon " />
                </div>
              </div>
              <div className="langs">
                <span
                  className={`aze ${isActiveLang === 1 ? "nShow" : ""}`}
                  onClick={() => setIsActiveLang(1)}
                >
                  AZE
                </span>
                <span
                  className={`rus ${isActiveLang === 2 ? "nShow" : ""}`}
                  onClick={() => setIsActiveLang(2)}
                >
                  RUS
                </span>
                <span
                  className={`eng ${isActiveLang === 3 ? "nShow" : ""}`}
                  onClick={() => setIsActiveLang(3)}
                >
                  ENG
                </span>
              </div>
              <div className="search" onClick={handleClickSearch}>
                <AiOutlineSearch className="search-icon" />
              </div>
            </div>
          </div>
          <div className={`search_area ${isActiveSearch ? "" : "nShow"}`}>
            <CgClose className="close" onClick={handleClickSearch} />
            <h1>Axtaış</h1>
            <div className="search_imput">
              <input type="text" />
              <AiOutlineSearch className="search_area--search" />
            </div>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
