import styled from "styled-components";

import { MEDIA } from "../../../layout";

const ImageContainer = styled.div`
  display: none;
  background: linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #e7f9fd 100%);
  border-radius: 30px;
  width: 400px;
  height: 470px;
  justify-content: center;
  align-items: center;

  ${MEDIA.xl`
    display: flex;
  `}
`;

export default ImageContainer;
