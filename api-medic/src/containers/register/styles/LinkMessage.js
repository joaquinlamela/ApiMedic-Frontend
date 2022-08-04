import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const LinkMessage = styled.span`
  display: flex;
  font-family: "Inter";
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
  a {
    color: ${COLORS.Violet};
    text-decoration: none;
    padding-left: 2px;

    :hover {
      color: ${COLORS.DarkViolet};
    }
  }
  margin-top: 20px;
  text-align: center;
`;

export default LinkMessage;
