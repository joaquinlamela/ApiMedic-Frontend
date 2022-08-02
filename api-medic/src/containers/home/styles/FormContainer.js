import styled from "styled-components";
import { COLORS } from "../../../utils/colors";
import { MEDIA } from "../../../utils/layout";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${COLORS.White};
  border-radius: 16px;
  height: 800px;
  width: 320px;

  ${MEDIA.sm`
    width: 350px;
  `}

  ${MEDIA.tb`
    width: 400px;
  `}

  ${MEDIA.lg`
    width: 500px;
  `}
`;

export default FormContainer;
