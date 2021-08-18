import React from "react";
import fetures from "../../images/fetures.png";
import { PaddingContainer, Title } from "../../style/common";
import CssBar from "../Common/CssBar";
import {
  FetusesCard,
  FetusesCards,
  FetusesCardsContainer,
  FetusesImgWrapper
} from "./Fetuses.styles";
const Fetuses = () => {
  return (
    <PaddingContainer>
      <Title>Why Our Agency</Title>
      <CssBar />
      <FetusesCardsContainer>
        <FetusesCards>
          <FetusesCard>
            <div>
              <i className="far fa-lightbulb"></i>
            </div>
            <article>
              <h2>Idea & Analysis</h2>
              <p>
                Praesent tincidunt congue est ut hendrerit. Pellentesque et eros
                sit amet ipsum venenatis.
              </p>
            </article>
          </FetusesCard>
          <FetusesCard>
            <div>
              <i className="far fa-lightbulb"></i>
            </div>
            <article>
              <h2>Designing</h2>
              <p>
                Praesent tincidunt congue est ut hendrerit. Pellentesque et eros
                sit amet ipsum venenatis.
              </p>
            </article>
          </FetusesCard>
        </FetusesCards>

        <FetusesImgWrapper>
          <img src={fetures} alt="" />
        </FetusesImgWrapper>

        <FetusesCards>
          <FetusesCard>
            <div>
              <i className="far fa-lightbulb"></i>
            </div>
            <article>
              <h2>Idea & Analysis</h2>
              <p>
                Praesent tincidunt congue est ut hendrerit. Pellentesque et eros
                sit amet ipsum venenatis.
              </p>
            </article>
          </FetusesCard>
          <FetusesCard>
            <div>
              <i className="far fa-lightbulb"></i>
            </div>
            <article>
              <h2>Designing</h2>
              <p>
                Praesent tincidunt congue est ut hendrerit. Pellentesque et eros
                sit amet ipsum venenatis.
              </p>
            </article>
          </FetusesCard>
        </FetusesCards>
      </FetusesCardsContainer>
    </PaddingContainer>
  );
};

export default Fetuses;
