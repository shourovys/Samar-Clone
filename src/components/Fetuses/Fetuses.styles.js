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
  @media ${device.tablet} {

  }
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
  }
`;