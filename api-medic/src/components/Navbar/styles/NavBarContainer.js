import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;

  a::after {
    content: attr(data-end);
    color: #ff7426;
  }

  a:hover::after {
    content: attr(data-end);
    color: ${COLORS.Black};
  }
`;

export default NavbarContainer;
