import React from "react";
import heroImg from "../../images/hero.png";
import { MainButton } from "../../style/common";
import {
  HeroContainer,
  HeroImg,
  HeroImgWrapper,
  HeroInfo,
  HeroP,
  HeroTitle,
  SubTitle
} from "./HeroSection.styles";
const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroInfo>
          <SubTitle>We Are Product Designer From India</SubTitle>
          <HeroTitle>We Design Interfaces That Users Love</HeroTitle>
          <HeroP>
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus.
          </HeroP>
          <MainButton>Learn More</MainButton>
        </HeroInfo>
        <HeroImgWrapper>
          <HeroImg src={heroImg} alt="hero image" />
        </HeroImgWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
