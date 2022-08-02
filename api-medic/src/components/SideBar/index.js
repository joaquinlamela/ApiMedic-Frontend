import React from "react";

import PropTypes from "prop-types";

import SidebarContainer from "./styles/SidebarContainer";
import SidebarWrapper from "./styles/SideBarWrapper";
import SidebarMenu from "./styles/SideBarMenu";
import SidebarLink from "./styles/SideBarLink";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/historic" onClick={toggle}>
            Historic diagnosis
          </SidebarLink>

          <SidebarLink to="/signin" onClick={toggle}>
            Sign in
          </SidebarLink>
          <SidebarLink to="/signup" onClick={toggle}>
            Sign up
          </SidebarLink>
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
