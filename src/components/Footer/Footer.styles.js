import styled from "styled-components";
import { device } from "../../style/variables/deviceBreakpoints";

export const FooterGrid = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
  gap: 25px;
  color: white;
  margin: 0 auto;
  max-width: 100%;

  @media ${device.tabletL} {
    margin-left: 100px;
  }
  @media ${device.laptop} {
    margin-left: 80px;
  }

  & section {
    display: grid;
    gap: 5px;

    & h4 {
      font-size: 24px;
    }
  }
`;
