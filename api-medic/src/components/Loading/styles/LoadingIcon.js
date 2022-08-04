import styled from "styled-components";
import { MEDIA } from "../../../utils/layout";

const Loading = styled.div`
  height: 500px;
  width: 200px;
  position: relative;

  ${MEDIA.sm`
    width: 250px;
  `}

  > svg {
    transform: translate(-50%, -50%) scale(1.45) !important;
    position: absolute;
    top: 40%;
    left: 50%;
  }
`;

export default Loading;
