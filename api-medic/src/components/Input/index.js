import styled from "styled-components";
import { MEDIA } from "../../utils/layout";

const Input = styled.input`
  background: ${(props) => (props.transparent ? "transparent" : "#ffffff")};
  border: ${(props) =>
    props.noBorder ? "none" : "1px solid rgba(0, 0, 0, 0.1)"};
  border-radius: 16px;
  height: 60px;
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  letter-spacing: -0.02em;
  color: rgba(0, 0, 0, 0.6);
  opacity: 0.8;
  padding: 18px 20px;

  :hover {
    border: ${(props) => (props.noBorder ? "none" : "1px solid #ff7426")};
  }

  :focus {
    outline: none;
    border: ${(props) => (props.noBorder ? "none" : "1px solid #ff7426")};
  }
  ${(props) => props.error && `border: 1px solid #e60f36;`};

  ${MEDIA.xs`
    width: ${(props) => (props.small ? "250px" : "300px")};
  `}

  ${MEDIA.tb`
    width: ${(props) => (props.small ? "200px" : "250px")};
  `}

  ${MEDIA.tb`
    width: ${(props) => (props.small ? "200px" : "250px")};
  `}

  ${MEDIA.md`
    width: ${(props) => (props.small ? "250px" : "300px")};
  `}

  ${MEDIA.lg`
    width: ${(props) => (props.small ? "300px" : "400px")};
  `}
`;

export default Input;
