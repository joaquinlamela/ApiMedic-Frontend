import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const ListDiagnoses = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${COLORS.Black};
  gap: 8px;
`;

export default ListDiagnoses;
