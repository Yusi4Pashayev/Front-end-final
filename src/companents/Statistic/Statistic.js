import React from "react";
import StatisticbarStatisticbar from "./Statisticbar";
import "./Statistic.css";

const listStatistic = [
  {
    id: Math.random(),
    title: "Nağd Kreditlər",
    value: "16%",
    value_text: "-dən başlayaraq",
    button: "Sifariş et",
  },
  {
    id: Math.random(),
    title: "Əmanətlər",
    value: "11%",
    value_text: "-dək illik gəlir",
    button: "Ətraflı",
  },
  {
    id: Math.random(),
    title: "Plastik Kartlar",
    value: "30%",
    value_text: "-dək keşbək xidməti",
    button: "Ətraflı",
  },
  {
    id: Math.random(),
    title: "Kredit Kartı",
    value: "40",
    value_text: "günədək güzəşt müddəti",
    button: "Ətraflı",
  },
];

const Statistic = () => {
 
  return (
    <div className="statistic_area">
      <div className="container">
        <div className="statisticbar_area">
          {listStatistic.map((item) => {
            return (
              <StatisticbarStatisticbar
                key={item.id}
                title={item.title}
                value={item.value}
                value_text={item.value_text}
                button={item.button}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Statistic;
