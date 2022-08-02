import styled, { css } from "styled-components";
import { COLORS } from "../../utils/colors";

const ColorsStyles = {
  Login: css`
    background: transparent;
    color: ${COLORS.Grey};
    :hover {
      border: 1px solid ${COLORS.Grey};
    }
  `,

  SignUp: css`
    background: ${COLORS.Violet};
    color: ${COLORS.White};
    :hover {
      background: ${COLORS.DarkViolet};
    }
  `,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props) => props.type && ColorsStyles[props.type]}
  border-radius: 12px;
  width: 90px;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  border: none;
  cursor: pointer;
`;

export default Button;
