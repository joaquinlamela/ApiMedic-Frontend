import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { COLORS } from "../../../utils/colors";

const NavLogo = styled(LinkR)`
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: "Lobster";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  color: ${COLORS.Black};

  :hover {
    color: ${COLORS.Orange};
  }
`;

export default NavLogo;
