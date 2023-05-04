import React from "react";
import Slider from "./companents/Slider/Slider";
import Statistic from "./companents/Statistic/Statistic";
import { Appbar } from "./companents/Appbar/Appbar";
import { Appbar_Ubank } from "./companents/Appbar/Appbar_Ubank";
import Exchange from "./companents/Exchange/Exchange";
import News from "./companents/News/News";
import Network from "./companents/Network/Network";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Statistic />
      <Appbar />
      <Appbar_Ubank />
      <Exchange />
      <News />
      <Network />
    </>
  );
};

export default HomePage;
