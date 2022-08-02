import styled from "styled-components";
import { MEDIA } from "../../../layout";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${MEDIA.tb`
    flex-direction: row;
  `}
`;

export default InputContainer;
