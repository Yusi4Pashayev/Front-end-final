import React from "react";

const CurrencyRow = (props) => {
  const { currencyOptions, onChangeCurrency,onChangeAmount,amount} = props;

  return (
    <div className="input_value">
      <input type="number" value={amount}  onChange={onChangeAmount}/>
      <select name="" id="" onChange={onChangeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="select_arrow"></div>
    </div>
  );
};

export default CurrencyRow;
