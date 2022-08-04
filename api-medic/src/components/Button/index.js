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

  Logout: css`
    background: ${COLORS.Red};
    color: ${COLORS.White};
    :hover {
      background: ${COLORS.DarkRed};
    }
  `,
};

const SizeStyles = {
  Medium: css`
    width: 90px;
    height: 40px;
  `,

  Large: css`
    width: 160px;
    height: 45px;
  `,
  ExtraLarge: css`
    width: 220px;
    height: 50px;
  `,

  Auto: css`
    min-width: 250px;
    width: auto;
    height: 50px;
  `,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props) => props.action && ColorsStyles[props.action]}
  ${(props) => props.size && SizeStyles[props.size]}
  border-radius: 12px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.02em;
  border: none;
  cursor: pointer;
  ${(props) => props.disabled && "background: #b8b9ba; cursor: not-allowed;"};

  svg {
    font-size: 17px;
    margin-left: 10px;
  }
`;

export default Button;
