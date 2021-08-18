import styled, { createGlobalStyle } from "styled-components";
import heroBg from './images/heroBg.png';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;800;900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
`

export const BackGround = styled.section`
  background-image: url(${heroBg});
  top: 0 ;
  right:0;
  left: 0;
  background-repeat: no-repeat;
  background-position: top;
`;

export default GlobalStyle;
