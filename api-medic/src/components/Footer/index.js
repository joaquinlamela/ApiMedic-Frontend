import React from "react";
import { animateScroll as scroll } from "react-scroll";

import FooterContainer from "./styles/FooterContainer";
import AppInfo from "./styles/AppInfo";
import LogoContainer from "./styles/LogoContainer";
import AppDescription from "./styles/AppDescription";
import SocialInfo from "./styles/SocialInfo";

import NavLogo from "../Navbar/styles/NavLogo";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <AppInfo>
        <LogoContainer>
          <NavLogo data-end="." to="/" onClick={toggleHome}>
            ApiMedic
          </NavLogo>
          <AppDescription>
            Your new virtual doctor, fast and easy to consult
          </AppDescription>
        </LogoContainer>
      </AppInfo>
      <SocialInfo>
        ApiMedic © {new Date().getFullYear()} All rights reserved.
      </SocialInfo>
    </FooterContainer>
  );
};

export default Footer;
