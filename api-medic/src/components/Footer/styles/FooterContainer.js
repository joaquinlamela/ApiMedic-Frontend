import styled from "styled-components";
import { COLORS } from "../../../utils/colors";

const FooterContainer = styled.footer`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: auto;
  padding: 30px 40px 10px;

  a::after {
    content: attr(data-end);
    color: ${COLORS.Orange};
  }

  a:hover::after {
    content: attr(data-end);
    color: ${COLORS.Black};
  }
`;

export default FooterContainer;
