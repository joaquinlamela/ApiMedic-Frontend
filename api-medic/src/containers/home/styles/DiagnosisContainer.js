import styled from "styled-components";
import { MEDIA } from "../../../utils/layout";

const DiagnosisContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(1, 1fr);

  ${MEDIA.md`
    grid-template-columns: repeat(2, 1fr);
    `}

  ${MEDIA.xl`
    grid-template-columns: repeat(3, 1fr);
    `}

  ${MEDIA.xxl`
    grid-template-columns: repeat(4, 1fr);
    `}
`;

export default DiagnosisContainer;
