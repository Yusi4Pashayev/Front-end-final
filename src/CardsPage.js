import React, { useState, useEffect } from "react";
import Cards from "./companents/Cards/Cards";
import DebetCards from "./companents/Cards/DebetCards";

const debetCardList = [
  {
    id: 1,
    name: "Visa Platinum",
    title: "visa_Platinum",
    src: "https://unibank.az/uploads/items/o_1fvf8egoctbh2n41il1sbd1crdi.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Bu kartla hər zaman və hər yerdə yüksək statusunu vurğula! Böyük imkanlar vədd edən kartı həyatının əvəzolunmaz bir hissəsinə çevir.",
  },
  {
    id: 2,
    name: "Visa Infinite",
    title: "visa_Infinite",
    src: "https://unibank.az/uploads/items/o_1fdhl5q9u2if7531bln1o1f68a.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Bu kartın sahibi olaraq, hər yerdə ən yaxşı xidmət və eksklüziv imkanlar səni gözləyir. Visa növündə olan bu kartdan olduqca fərqli faydalan.",
  },
  {
    id: 3,
    name: "Unimiles",
    title: "unimiles",
    src: "https://unibank.az/uploads/items/o_1fl3rf8fd1cfrl7d10js1vg81jd4a.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Uçuşa hazır ol! UniMiles kartı ilə nağdsız ödənişlər et, millər topla və milləri istənilən hava yollarının aviabiletinə dəyiş.",
  },
  {
    id: 4,
    name: "Mastercard Black Edition",
    title: "mastercard_Black_Edition",
    src: "https://unibank.az/uploads/items/o_1eqk202no1jcg2j11qivr8javla.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Bu kartı əldə etməklə geniş səyahət, sığorta və xidmət imkanlarına malik olursan. Sənin yüksək statusunu MasterCard-ın ən nüfuzlu kartlarından biri vurğulayır!",
  },
  {
    id: 5,
    name: "Mastercard World Elite",
    title: "mastercard_World_Elite",
    src: "https://unibank.az/uploads/items/o_1fvf8egoctbh2n41il1sbd1crdi.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Dünyanın istənilən yerində eksklüziv imkanlar və yüksək xidmət səni gözləyir! Arzularını bu karta həvalə et!",
  },
];
const otherCardlList = [
  {
    id: 11,
    name: "Albalı Debet",
    title: "albalı_Debet",
    src: "https://unibank.az/uploads/items/o_1ghgjt81a1i0rnkomn1vmh1iuda.gif",
    buttontext: "Səbətə əlavə et",
    content:
      "Bu kartla dünyanın hər bir nöqtəsində rahat alış-veriş, onlayn ödənişlər et və ya rahat nağd pul çıxar.",
  },
  {
    id: 12,
    name: "Albalı",
    title: "albalı",
    src: "https://unibank.az/uploads/items/o_1g5lkqkchjtp1ejd1tbn1igf17c8a.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Albalı - 4 bank məhsulunu (kredit, taksit kartı, depozit və debet kartı) özündə birləşdirən beynəlxalq kartdır.",
  },
  {
    id: 13,
    name: "UCard Gift",
    title: "uCard_Gift",
    src: "https://unibank.az/uploads/items/o_1geemnr0j10bv12dqj8r6f016qea.gif",
    buttontext: "Səbətə əlavə et",
    content:
      "UCard Gift-ən çox arzulanan hədiyyə! UCard Gift kartını hədiyyə et!",
  },
  {
    id: 14,
    name: "Digital card",
    title: "digital_card",
    src: "https://unibank.az/uploads/items/o_1g4runv8p1phn1o0p1f1ager1niia.jpg",
    buttontext: "Səbətə əlavə et",
    content:
      "Artıq kart sifarişi üçün banka gəlməyə ehtiyac yoxdur. Bu kart ilə hesab açmadan UBank-da, müxtəlif İnternet saytlarda bütün ödənişlərini rahatlıqla edə bilərsən.",
  },
];

const CardsPage = () => {
  return (
    <div className="container">
      <div className="cards__ucard">
        <h1>Kartlar</h1>
        <div className="ucard__area">
          <Cards />
        </div>
      </div>
      <div className="cards__debet">
        <h1>Debet Kartlar</h1>
        <div className="debetcards__area">
          {debetCardList.map((item) => {
            return (
              <DebetCards
                id={item.id}
                key={item.id}
                name={item.name}
                title={item.title}
                src={item.src}
                buttontext={item.buttontext}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
      <div className="cards__other">
        <h1>Debet Kartlar</h1>
        <div className="othercards__area">
          {otherCardlList.map((item) => {
            return (
              <DebetCards
                id={item.id}
                key={item.id}
                name={item.name}
                title={item.title}
                src={item.src}
                buttontext={item.buttontext}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardsPage;
