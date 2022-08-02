import styled from "styled-components";
import { MEDIA } from "../../../utils/layout";

const AuthContainer = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  ${MEDIA.md`
    display: flex;
  `}
`;
export default AuthContainer;
