import styled from "styled-components";
import { device } from "../../style/variables/deviceBreakpoints";

export const Title = styled.h2`
  font-size: 32px;
  text-align: center;
  font-weight: 600;
  @media ${device.mobile} {
    font-size: 36px;
  }
  @media ${device.tablet} {
    font-size: 45px;
  }
`;
