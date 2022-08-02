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
import { Link, useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

const Navbar = ({ openSidebar }) => {
  const navigate = useNavigate();
  const authInstance = Auth.getInstance();

  const isLogged = authInstance.isAuthenticated();

  const logout = () => {
    authInstance.logout();
    navigate("/login");
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo data-end="." to="/">
            ApiMedic
          </NavLogo>
          {isLogged && (
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
          )}

          {!isLogged ? (
            <AuthContainer>
              <Link to="/login">
                <Button size="Medium" action="Login">
                  Sign in
                </Button>
              </Link>

              <Link to="/signup">
                <Button size="Medium" action="SignUp">
                  Sign up
                </Button>
              </Link>
            </AuthContainer>
          ) : (
            <AuthContainer>
              <Button size="Medium" action="Logout" onClick={logout}>
                Logout
              </Button>
            </AuthContainer>
          )}

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
