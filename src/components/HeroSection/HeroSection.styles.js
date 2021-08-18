import styled from "styled-components";
import colors from "../../style/variables/colors";
import { device } from "../../style/variables/deviceBreakpoints";

export const HeroContainer = styled.section`
  min-height: 100vh;
  padding-top: 40px;
  @media ${device.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
  }
  @media ${device.laptop} {
    margin-bottom: 8rem;
  }
`;

export const HeroInfo = styled.div`
  flex-basis: 65%;
  @media ${device.tablet} {
  padding-top: 80px;
    margin-bottom: 70px;
  }
  @media ${device.tabletL} {
  padding-top: 80px;
  }
`;

export const HeroImgWrapper = styled.div`
  max-width: 100%;
  max-height: 440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${colors.white};
  margin-bottom: 20px;
  line-height: 60px;
  @media ${device.laptop} {
    font-size: 52px;
  }
  
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #ffa808;
`;

export const HeroP = styled.h3`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 30px;
  color:${colors.light}
`;
