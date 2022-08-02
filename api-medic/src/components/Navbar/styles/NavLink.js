import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  height: 100%;
  cursor: pointer;
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-decoration: none;
  color: #000000;

  :hover {
    color: #ff7426;
  }
`;

export default NavLink;
