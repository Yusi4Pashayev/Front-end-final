import React from "react";
import "./News.css";
import NewsCard from "./NewsCard";
import Buttontype from "../Buttontype";

const newsList = [
  {
    id: Math.random(),
    title: `Unibank announces a corresponding bank relationship with Bank of New York Mellon`,
    content: `Unibank CB announces a corresponding bank relationship with Bank of New York Mellon. This will serve to broaden Unibank’s business in international settlements whilst also promoting the international money transferring services`,
    time: `15.11.2022 `,
  },
  {
    id: Math.random(),
    title: `Unibank announces a corresponding bank relationship with Bank of New York Mellon`,
    content: `Unibank CB announces a corresponding bank relationship with Bank of New York Mellon. This will serve to broaden Unibank’s business in international settlements whilst also promoting the international money transferring services`,
    time: `15.11.2022 `,
  },
  {
    id: Math.random(),
    title: `Unibank announces a corresponding bank relationship with Bank of New York Mellon`,
    content: `Unibank CB announces a corresponding bank relationship with Bank of New York Mellon. This will serve to broaden Unibank’s business in international settlements whilst also promoting the international money transferring services`,
    time: `15.11.2022 `,
  },
];

const News = () => {
  return (
    <div className="container">
      <div className="news_content">
        <div className="news_area">
          {newsList.map((item) => {
            return (
              <NewsCard
                key={item.id}
                title={item.title}
                content={item.content.slice(0, 250)}
                time={item.time}
              />
            );
          })}
        </div>
        <Buttontype inner_text="Bütün xəbərlər" />
      </div>
    </div>
  );
};

export default News;
