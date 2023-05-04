import React from "react";
import "./Network.css";
import NetworkCard from "./NetworkCard";

let NetworkCardList = [
  {
    id: Math.random(),
    imgsrc: "https://unibank.az/assets/images/Bitmap.png",
    cardName: "network_location",
    h2text: "Xidmət şəbəkəsi",
    ptext: `Filial və UTM-lərin ünvanları, həmçinin - iş saatları və digər məlumatlar haqqında ətraflı.`,
    buttontext: "Daha ətraflı",
  },
  {
    id: Math.random(),
    imgsrc: "https://unibank.az/assets/images/callcenter.svg",
    cardName: "network_question",
    h2text: `Sualın var? Bizimlə əlaqə saxla!`,
    ptext: `Onlayn-məsləhətçi, 117 Çağrı mərkəzi və ya bank filiallarına müraciət et və suallarına cavab al. Rahat və asan!`,
    buttontext: "Daha ətraflı",
  },
];

const Network = () => {
  return (
    <div className="container">
      <div className="network_area">
        {NetworkCardList.map((item) => {
          return (
            <NetworkCard
              key={item.id}
              imgsrc={item.imgsrc}
              cardName={item.cardName}
              h2text={item.h2text}
              ptext={item.ptext}
              buttontext={item.buttontext}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Network;
