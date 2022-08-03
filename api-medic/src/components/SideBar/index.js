import React from "react";

import PropTypes from "prop-types";

import SidebarContainer from "./styles/SidebarContainer";
import SidebarWrapper from "./styles/SideBarWrapper";
import SidebarMenu from "./styles/SideBarMenu";
import SidebarLink from "./styles/SideBarLink";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const authInstance = Auth.getInstance();

  const isLogged = authInstance.isAuthenticated();

  const logout = () => {
    authInstance.logout();
    navigate("/login");
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          {!isLogged ? (
            <>
              <SidebarLink to="/login" onClick={toggle}>
                Sign in
              </SidebarLink>
              <SidebarLink to="/signup" onClick={toggle}>
                Sign up
              </SidebarLink>
            </>
          ) : (
            <>
              <SidebarLink to="/" onClick={toggle}>
                Home
              </SidebarLink>
              <SidebarLink to="/historic" onClick={toggle}>
                Historic
              </SidebarLink>
              <SidebarLink to="/login" onClick={logout}>
                Logout
              </SidebarLink>
            </>
          )}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.bool,
};

export default Sidebar;
