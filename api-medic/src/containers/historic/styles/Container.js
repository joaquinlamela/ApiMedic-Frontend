import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: hidden;
  padding: 40px 0px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background: ${COLORS.GreyBackground};
  text-align: center;
`;

export default Container;
