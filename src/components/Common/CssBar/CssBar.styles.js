import styled from "styled-components";

export const CssBarContainer = styled.div`
  width: 150px;
  display: flex;
  gap: 10px;
  margin:${(({aline})=>aline==='start'?'0 0 0 6px':'0 auto')};
  margin-bottom: 34px;
`;

export const CssBarOne = styled.div`
  background-image: linear-gradient(90deg, #ef146e 0, #fea958 51%, #ef146e);
  background-size: 200%;
  width: 45px;
  height: 6px;
  border-radius: 15px;
`;

export const CssBarTow = styled.div`
  background-image: linear-gradient(90deg, #ef146e 0, #fea958 51%, #ef146e);
  background-size: 200%;
  width: 95px;
  height: 6px;
  border-radius: 15px;
`;
