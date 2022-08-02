import styled from "styled-components";

import { MEDIA } from "../../../utils/layout";

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  text-align: center;
  gap: 60px;

  ${MEDIA.xs`
    display: none;
  `}

  ${MEDIA.tb`
    display: flex;
  `}
`;

export default NavMenu;
