import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const Subtitle = styled.span`
  font-family: "Inter";
  font-weight: ${(props) => (props.bold ? `600` : `400`)};
  font-size: 20px;
  line-height: 24px;
  color: ${(props) => (props.black ? `${COLORS.Black}` : `${COLORS.Grey}`)};
`;

export default Subtitle;
