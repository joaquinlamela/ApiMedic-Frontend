import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../../utils/colors";

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${COLORS.Black};
  cursor: pointer;
  &:hover {
    color: #1f61eb;
    transition: 0.2s ease-in-out;
  }
  font-family: "Inter";
  font-weight: 500;
  font-size: 30px;
  line-height: 19px;
  letter-spacing: -0.02em;
`;

export default SidebarLink;
