import React, { useState } from "react";
import { ExchangeTable } from "./ExchangeTable";
import ExchangeCalculator from "./ExchangeCalculator";
import "./Exchange.css";

const exchangeList = [
  {
    id: Math.random(),
    title: "Nağd",
    currencyList: [
      {
        id: Math.random(),
        currency: "USD",
        buy: 1.697,
        sell: 1.7015,
      },
      {
        id: Math.random(),
        currency: "EUR",
        buy: 1.8404,
        sell: 1.8979,
      },
      {
        id: Math.random(),
        currency: "RUB",
        buy: 0.02,
        sell: 0.0213,
      },
      {
        id: Math.random(),
        currency: "GBP",
        buy: 2.095,
        sell: 2.1284,
      },
    ],
  },
  {
    id: Math.random(),
    title: "Nağdsız",
    currencyList: [
      {
        id:Math.random(),
        currency: "USD",
        buy: 1.697,
        sell: 1.7015,
      },
      {
        id:Math.random(),
        currency: "EUR",
        buy: 1.8404,
        sell: 1.8979,
      },
      {
        id:Math.random(),
        currency: "RUB",
        buy: 0.02,
        sell: 0.0213,
      },
      {
        id:Math.random(),
        currency: "GBP",
        buy: 2.095,
        sell: 2.1284,
      },
    ],
  },
  {
    id: Math.random(),
    title: "Kart",
    currencyList: [
      {
        id:Math.random(),
        currency: "USD",
        buy: 1.697,
        sell: 1.7015,
      },
      {
        id:Math.random(),
        currency: "EUR",
        buy: 1.8404,
        sell: 1.8979,
      },
      {
        id:Math.random(),
        currency: "RUB",
        buy: 0.02,
        sell: 0.0213,
      },
      {
        id:Math.random(),
        currency: "GBP",
        buy: 2.095,
        sell: 2.1284,
      },
    ],
  },
];

const Exchange = () => {

  return (
    <div className="exchange">
      <div className="container">
        <div className="exchange__area">
          <h1 className="exchange--title">Valyuta məzənnələri</h1>
          <div className="exchange__list">
            {exchangeList.map((item) => {
              return (
                <ExchangeTable
                  key={item.id}
                  title={item.title}
                  currency_list={item.currencyList}
                />
              );
            })}
          </div>
          <ExchangeCalculator />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
