/* eslint-disable no-unused-vars */
import React from "react";

import PropTypes from "prop-types";

import SidebarContainer from "./styles/SidebarContainer";
import SidebarWrapper from "./styles/SideBarWrapper";
import SidebarMenu from "./styles/SideBarMenu";
import SidebarLink from "./styles/SideBarLink";
import { useNavigate } from "react-router-dom";
import Auth from "../../utils/auth";
import { useRecoilState } from "recoil";
import { symptomsListAtom } from "../../recoil/symptomsAtom";

const Sidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();
  const authInstance = Auth.getInstance();

  const isLogged = authInstance.isAuthenticated();

  const [_, setSymptoms] = useRecoilState(symptomsListAtom);

  const logout = () => {
    authInstance.logout();
    navigate("/login");
    setSymptoms([]);
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
