import React from "react";
import Slider from "infinite-react-carousel";
import "./Slider.css";
import SliderItem from "./SliderItem";

const listbanner = [
  {
    id:Math.random(),
    src: "https://unibank.az/uploads/banners/1682404726kredit-xetti-ac1 (1).png",
    title: "Kredit Xəttini dərhal aç!",
    text: "Bunun üçün sadəcə UBank mobil tətbiqində UCard-nı seç və saniyələr iççində pul kartına otursun!",
  },
  {
    id:Math.random(),
    src: "https://unibank.az/uploads/banners/1681193995200-azn-dovriyye.png",
    title: "Ləğv olundu",
    text: "Artıq UCard-la dünyanın istənilən yanacaqdoldurma, kafe-restoran və marketlərində 5% keşbek qazanmaq üçün 200 AZN dövriyyə tələbi yoxdur!",
  },
  {
    id:Math.random(),
    src: "https://unibank.az/uploads/banners/16708419491664282439Toplabanner.lastpng.png",
    title: "Topla",
    text: "İstənilən arzunu reallaşdır! Hədəfinə ad ver və daxılına pul köçürməyə başla!",
  },
  {
    id:Math.random(),
    src: "https://unibank.az/uploads/banners/1673854081cover-ne.png",
    title: "Sənin kartın, sənin “art”ın!",
    text: "UBank-a daxil ol, Apple Wallet / Google Wallet™dakı Unibank kartlarını istədiyin dizayna dəyiş və hamıdan fərqli ol!",
  },
  {
    id:Math.random(),
    src: "https://unibank.az/uploads/banners/16703977791661845566digerbank.gif",
    title: "Kartdan karta - pulsuzdur!",
    text: "Unibank kartlarına limitsiz, ölkədaxili digər bank kartlarına isə 2000 AZN-dək köçürmələri 0% ilə et!",
  },
];

const Slider_Banner = () => {
  return (
    <div className="slider">
      <div className="container">
        <Slider dots autoplay={true} autoplaySpeed={6000} autoplayScroll={1}>
          {listbanner.map((item) => {
            return (
              <SliderItem src={item.src} title={item.title} text={item.text} key={item.id}/>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Slider_Banner;
