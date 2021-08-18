import React from "react";
import { CardContainer } from "../../../style/common";
import { SpecializationCard } from "./SpecializationCards.styles";

const SpecializationCards = () => {

  const cardsInfo = [
    {
      icon: "fas fa-network-wired",
      title: "Strategy & Research",
    },
    {
      icon: "fas fa-code",
      title: "Web Development",
    },
    {
      icon: " fas fa-desktop",
      title: "Web Solution",
    },
  ];
  return (
    <CardContainer>
      {cardsInfo.map((cardInfo) => (
        <SpecializationCard key={cardInfo.title}>
          <div>
            <i className={cardInfo.icon}></i>
          </div>
          <h3>{cardInfo.title}</h3>
          <p>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla
            vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum,
            et porttitor.
          </p>
          <span>
            <i className="fas fa-chevron-right"></i>
          </span>
        </SpecializationCard>
      ))}
    </CardContainer>
  );
};

export default SpecializationCards;
