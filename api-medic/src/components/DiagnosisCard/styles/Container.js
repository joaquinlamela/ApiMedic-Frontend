import styled from "styled-components";
import { COLORS } from "../../../utils/colors";
import { MEDIA } from "../../../utils/layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background: ${COLORS.White};
  width: 300px;
  min-height: 250px;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  align-items: center;
  text-decoration: none;
  padding: 20px;

  :hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  ${MEDIA.sm`
    width: 350px;
  `}
`;

export default Container;
