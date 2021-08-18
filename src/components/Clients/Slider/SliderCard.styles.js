import styled from "styled-components";
import { device } from "../../../style/variables/deviceBreakpoints";

export const SliderCardContainer = styled.div`
  /* display: flex;
  justify-content: center; */
`;

export const SliderCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  padding: 15px;
  color: #1f2471;
  @media ${device.tablet} {
    flex-direction: row;
  }
  & img {
    max-width: 270px;
    max-height: 270px;
    /* width: auto;
    height: auto; */
    object-fit: cover;
    border-radius: 150px;
  }

  & div {
    max-width: 500px;
    & P {
      margin-bottom: 16px;
    }

    & h2 {
      display: flex;
      align-items: center;
      justify-content: center;

      & span {
        background: #fff;
        margin: 0 15px;
      }
      &:before,
      &:after {
        background: #1f2471;
        height: 2px;
        flex: 1;
        content: "";
      }
      &:after {
        background: none;
      }
    }
  }
`;

export const SliderCardImgWrapper = styled.div`
position: relative;

& i {
  font-size: 4rem;
  position: absolute;
  bottom: 20px;
  right: 10px;
}

`;
