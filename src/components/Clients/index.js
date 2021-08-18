import React from "react";
import { PaddingContainer, Title } from "../../style/common";
import CssBar from "../Common/CssBar";
import MyCarousel from "./Slider/index";
const Clients = () => {
  return (
    <PaddingContainer>
      <Title>What Our Clients Say’s</Title>
      <CssBar />
      <MyCarousel />
    </PaddingContainer>
  );
};

export default Clients;
