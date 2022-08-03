import styled from "styled-components";
import { MEDIA } from "../../../utils/layout";

const SymptomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  .multi-select {
    ${MEDIA.xs`
        width: 300px;
    `}

    ${MEDIA.lg`
        width: 400px;
    `}
  }

  .select__menu {
    height: 200px;
  }

  .select__menu-list {
    height: 200px;
  }
`;

export default SymptomsContainer;
