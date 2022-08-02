import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: hidden;
  padding-top: 40px;
  justify-content: center;
  align-items: center;
  gap: 100px;
  background: ${COLORS.GreyBackground};
`;

export default Container;
