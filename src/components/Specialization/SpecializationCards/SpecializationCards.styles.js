import styled from "styled-components";
import cardIcon from "../../../images/cart-icon-bg.png";
import colors from "../../../style/variables/colors";
import { device } from "../../../style/variables/deviceBreakpoints";
export const SpecializationCard = styled.div`
  padding: 30px;
  margin: 0 15px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.5s;

  :hover {
    box-shadow: 0px 0px 6px 1px lightgray;
  }
  :hover div {
    color: ${colors.light};
    background-color: #302069;
  }
  :hover h3 {
    color: #302069;
  }

  :hover span {
    color: ${colors.light};
    background-color: #302069;
    border: 0.3px solid #ff8cbb38;
  }
  & div {
    height: 165px;
    width: 165px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    color: ${colors.primary};
    background-color: #ff8cbb38;
    background-image: url(${cardIcon});
    background-repeat: no-repeat;
    background-position: center;
    background-origin: border-box;
    transition: all 0.5s;
  }

  & h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 15px;
  }

  & p {
    margin-bottom: 20px;
  }

  & span {
    color: ${colors.primary};
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0.4px solid ${colors.primary};
    line-height: 38px;
    text-align: center;
    border-radius: 40px;
    transition: all 0.5s;
  }
  @media ${device.mobile} {
  }
`;
