import React from "react";
import { DataTable } from "./DataTable";
import "./ExchangeTable.css";

export const ExchangeTable = (props) => {
  const date = new Date();

  let day = date.getDate().toString().padStart(2, "0");
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let year = date.getFullYear();

  let currentDate = `${day}.${month}.${year}`;

  return (
    <div className="exchange__table" key={props.key}>
      <table>
        <caption>
          <h1>{props.title}</h1>
          <p>Yeniləndi {currentDate}</p>
        </caption>
        <thead>
          <tr>
            <th>Valyuta</th>
            <th>Alış</th>
            <th>Satış</th>
          </tr>
        </thead>
        <tbody>
          {props.currency_list.map((item) => {
            return (
              <DataTable
                key={item.id}
                myKey={item.id}
                currency={item.currency}
                buy={item.buy}
                sell={item.sell}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
