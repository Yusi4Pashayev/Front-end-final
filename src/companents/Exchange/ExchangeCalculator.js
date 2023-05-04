import React, { useState, useEffect } from "react";
import "./ExchangeCalculator.css";
import { BsArrowRight } from "react-icons/bs";
import CurrencyRow from "./CurrencyRow";

const options = ["USD", "AZN", "RUB", "GBP", "EUR"];

var myHeaders = new Headers();
myHeaders.append("apikey", "oKAKHf71bkutt4ILcsLCDf1dsZXnxUs3");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

export const ExchangeCalculator = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromSelect, setFromSelect] = useState("USD");
  const [toSelect, setToSelect] = useState("USD");
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [toAmount, setToAmount] = useState();

  let to_Amount, from_Amount;
  if (amountInFromCurrency) {
    from_Amount = amount;
  } else {
    to_Amount = amount;
  }

  useEffect(() => {
    fetch(
      // `https://api.apilayer.com/exchangerates_data/convert?to=${toSelect}&from=${fromSelect}&amount=${amount}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setToAmount(data.result))
      .catch((error) => console.log("error", error));
    console.log(amount);
  });

  useEffect(() => {
    setCurrencyOptions(options);
  }, options);

  return (
    <div className="exchange_calculator">
      <div className="calc--text">
        <h1>Valyuta kalkulyatoru</h1>
        <p>Nağd məzənnə əsasında hesablanır</p>
      </div>
      <div className="calc--inputs">
        <CurrencyRow
          currencyOptions={currencyOptions}
          onChangeCurrency={(e) => setFromSelect(e.target.value)}
          onChangeAmount={(e) => {
            setAmount(e.target.value);
            setAmountInFromCurrency(false);
          }}
          amount={from_Amount}
        />
        <BsArrowRight />
        <CurrencyRow
          currencyOptions={currencyOptions}
          onChangeCurrency={(e) => setToSelect(e.target.value)}
          onChangeAmount={(e) => {
            setAmount(e.target.value);
            setAmountInFromCurrency(false);
          }}
          amount={toAmount}
        />
      </div>
    </div>
  );
};

export default ExchangeCalculator;
