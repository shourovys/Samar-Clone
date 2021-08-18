import styled from "styled-components";
import { device } from "../../style/variables/deviceBreakpoints";

export const FetusesCardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  justify-items: center;
  @media ${device.tabletL} {
    grid-template-columns: repeat(3, 1fr);

  }
`;

export const FetusesCards = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const FetusesCard = styled.section`
  margin-bottom: 50px;
  max-width: 90vw;
  display: flex;
  align-items: center;
  gap: 20px;
  color: #1f2471;
  
  & div {
    height: 80px;
    width: 300px ;
    background-color: #1f2471;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 430px) {
      width: 150px;
      max-width: 100%;
    }
    @media ${device.mobile} {
      width: 200px;
      max-width: 100%;
    }
    @media ${device.tablet} {
      width: 100px;
      max-width: 45vw;
    }
    @media ${device.tabletL} {
      width: 210px;
    }
    & i {
      font-size: 2rem;
      color: white;
    }
  }
`;


export const FetusesImgWrapper = styled.section`
  max-width: 90vw;

  & img{
    width: 100%;
    height: 100%;
    -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-animation: swinging 2s linear forwards infinite;
  animation: swinging 8s linear forwards infinite;
  @keyframes swinging {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(2deg);
    }
    75% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  }
`;