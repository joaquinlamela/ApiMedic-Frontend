import React from "react";

import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Container from "./styles/Container";
import Label from "./styles/Label";

const CalendarWithLabel = ({ label, date, setDate, maxDate }) => {
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <DatePicker
        selected={date}
        onChange={onChange}
        maxDate={maxDate}
        showDisabledMonthNavigation
        dateFormat="yyyy/MM/dd"
      />
    </Container>
  );
};

CalendarWithLabel.propTypes = {
  label: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  setDate: PropTypes.func,
};

export default CalendarWithLabel;
