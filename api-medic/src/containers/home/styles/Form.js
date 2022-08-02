import styled from "styled-components";
import { MEDIA } from "../../../utils/layout";

const Form = styled.form`
  display: flex;
  gap: 40px;
  padding-bottom: 40px;

  .multi-select {
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
  }
`;

export default Form;
