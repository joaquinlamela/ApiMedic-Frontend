import React, { useState } from "react";

import PropTypes from "prop-types";

import Input from "../Input";

import Container from "./styles/Container";
import Label from "./styles/Label";
import ErrorMessage from "./styles/ErrorMessage";

import { isEmpty } from "lodash";

const InputWithLabel = ({ label, inputType, placeholder, onChange, value }) => {
  const [hasError, setHasError] = useState(false);

  const validateField = (e) => {
    const { value } = e.target;
    if (isEmpty(value.trim())) {
      setHasError(true);
      onChange("");
    } else {
      onChange(value);
      setHasError(false);
    }
  };

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={validateField}
        onBlur={validateField}
        error={hasError}
      />
      {hasError && <ErrorMessage>This field is required.</ErrorMessage>}
    </Container>
  );
};

InputWithLabel.propTypes = {
  placeholder: PropTypes.string,
  label: PropTypes.string,
  inputType: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputWithLabel;
