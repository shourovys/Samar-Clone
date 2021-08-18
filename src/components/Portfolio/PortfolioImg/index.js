import React from "react";
import pic1 from "../../../images/protfiloimgs/pic1.jpg";
import pic2 from "../../../images/protfiloimgs/pic2.jpg";
import pic3 from "../../../images/protfiloimgs/pic3.jpg";
import pic4 from "../../../images/protfiloimgs/pic4.jpg";
import pic5 from "../../../images/protfiloimgs/pic5.jpg";
import pic6 from "../../../images/protfiloimgs/pic6.jpg";
import {
  PortfolioImgContainer,
  PortfolioImgWrapper
} from "./PortfolioImg.styles";
const PortfolioImg = ({ currentOption }) => {
  const options = [
    { name: ["Web Design", "Web Development"], img: pic1 },
    {
      name: ["Web Development", "Web Design", "Branding"],
      img: pic2,
    },
    { name: ["Branding", "Web Development"], img: pic3 },
    { name: ["Mobile App", "Branding"], img: pic4 },
    { name: ["SCO", "Branding"], img: pic5 },
    { name: ["Web Development", "Web Design"], img: pic6 },
  ];

  let currentState;

  if (currentOption.name === "All") {
    currentState = options;
  } else {
    currentState = options.filter(
      (option) => option.name.indexOf(currentOption.name) !== -1
    );
  }

  return (
    <PortfolioImgContainer>
      {currentState.map((state) => (
        <PortfolioImgWrapper key={state.img}>
          <img src={state.img} alt="" />
        </PortfolioImgWrapper>
      ))}
    </PortfolioImgContainer>
  );
};

export default PortfolioImg;
