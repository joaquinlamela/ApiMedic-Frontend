import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const Nav = styled.nav`
  display: flex;
  height: 80px;
  background: ${COLORS.White};
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 25px;
`;

export default Nav;
