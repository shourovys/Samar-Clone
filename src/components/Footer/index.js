import React from "react";
import logo from "../../images/logo-blue.png";
import { Logo, PaddingContainer } from "../../style/common";
import CssBar from "../Common/CssBar";
import {
    SocialIconContainer,
    SocialIconWrapper
} from "../Navbar/Hamburger/Drawer/Drawer.styles";
import { FooterGrid } from "./Footer.styles";
const Footer = () => {
  return (
    <PaddingContainer>
      <FooterGrid>
        <section>
          <Logo src={logo} alt="" />
          <p style={{ padding: "10px 0" }}>
            Maecenas pellentesque placerat quam, in finibus nisl tincidunt sed.
            Aliquam magna augue, malesuada ut feugiat eget, cursus eget felis.
          </p>
          <SocialIconContainer aline='start'>
            <SocialIconWrapper>
              <i className="fab fa-facebook-f"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-twitter"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-linkedin-in"></i>
            </SocialIconWrapper>
            <SocialIconWrapper>
              <i className="fab fa-instagram"></i>
            </SocialIconWrapper>
          </SocialIconContainer>
        </section>

        <section>
          <h4>Our links</h4>
          <CssBar aline='start' bg='white'/>
          <p>Our Service a</p>
          <p>Our Service b</p>
          <p>Our Service c</p>
          <p>Our Service d</p>
        </section>

        <section>
          <h4>Our Services</h4>
          <CssBar aline='start' bg='white'/>
          <p>Our Service a</p>
          <p>Our Service b</p>
          <p>Our Service c</p>
          <p>Our Service d</p>
        </section>

        <section>
          <h4>Other links</h4>
          <CssBar aline='start' bg='white'/>
          <p>Our Service a</p>
          <p>Our Service b</p>
          <p>Our Service c</p>
          <p>Our Service d</p>
        </section>
      </FooterGrid>
    </PaddingContainer>
  );
};

export default Footer;
