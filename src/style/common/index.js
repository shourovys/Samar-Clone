import styled from "styled-components";
import { device } from "../variables/deviceBreakpoints";

export const Container = styled.section`
  max-width: 100vw;
  padding: 0 15px;
  margin: 0 auto;

  @media ${device.mobile} {
    max-width: 540px;
    width: 100%;
  }
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.tabletL} {
    max-width: 960px;
  }
  @media ${device.laptop} {
    max-width: 1199px;
    width: 100%;
  }
`;

export const PaddingContainer = styled.div`
  padding-top: 50px;
  padding-bottom: 20px;

  @media ${device.tablet} {
    padding-top: 70px;
    padding-bottom: 40px;
  }
`;

export const Logo = styled.img`
  height: 47px;
  width: 150px;
  filter: ${({ color }) => (color ? null : "brightness(0) invert(1)")};
`;

export const MainButton = styled.button`
  color: #fff;
  padding: 12px 35px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 0px 24px;
  outline: none;
  line-height: 1.5;
  background-image: linear-gradient(90deg, #ef146e 0, #fea958 51%, #ef146e);
  background-size: 200%;
  border-color: transparent !important;
  transition: all 0.5s;

  :hover {
    border-radius: 24px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ color }) => color};
  margin-bottom: 20px;

  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.laptop} {
    font-size: 45px;
  }
`;

export const ColorLine = styled.div`
text-align: center;
  background-image: linear-gradient(90deg, #ef146e 0, #fea958 51%, #ef146e);
  background-size: 200%;
  position: relative;
  height: auto;
  width: 150px;
  margin-bottom: 10px;
  /* ::before {
    content: "";
    width: 95px;
    left: 55px;
    height: 6px;
    position: absolute;
    right: 40px;
    left: 0;
    top: 0;
    border-radius: 15px;
  } */
  /* ::after {
    content: "";
    width: 95px;
    left: 55px;
    height: 6px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    transform: translateY(-50%);
  } */
`;
