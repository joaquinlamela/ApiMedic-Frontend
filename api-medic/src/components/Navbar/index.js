import React from "react";

import PropTypes from "prop-types";

import Nav from "./styles/Nav";
import NavbarContainer from "./styles/NavBarContainer";
import NavLogo from "./styles/NavLogo";
import NavMenu from "./styles/NavMenu";
import NavItem from "./styles/NavItem";
import NavLink from "./styles/NavLink";
import ToggleIcon from "./styles/ToggleIcon";
import MenuIcon from "./styles/MenuIcon";
import Button from "../Button";
import AuthContainer from "./styles/AuthContainer";

const Navbar = ({ openSidebar }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo data-end="." to="/">
            ApiMedic
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLink
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/recipes"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Historic
              </NavLink>
            </NavItem>
          </NavMenu>

          <AuthContainer>
            <Button type="Login">Sign in</Button>
            <Button type="SignUp">Sign up</Button>
          </AuthContainer>

          <MenuIcon onClick={openSidebar}>
            <ToggleIcon />
          </MenuIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  openSidebar: PropTypes.func,
};

export default Navbar;
