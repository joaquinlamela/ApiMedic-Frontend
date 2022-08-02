import React, { useState } from "react";

import InputWithLabel from "../../components/InputWithLabel";

import { BiSend } from "react-icons/bi";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import RegisterContainer from "./styles/RegisterContainer";
import Button from "../../components/Button";

import { isEmpty } from "lodash";
import GenderContainer from "./styles/GenderContainer";
import Label from "../../components/InputWithLabel/styles/Label";
import CalendarWithLabel from "../../components/Calendar";
import Title from "../../components/Title";
import LinkContainer from "./styles/LinkMessage";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("Male");
  const [date, setDate] = useState(Date.now());

  const handleButtonState = () =>
    isEmpty(name) || isEmpty(email) || isEmpty(password) || isEmpty(gender);

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <Container>
      <FormContainer>
        <Title>Register</Title>
        <Form id="register-form">
          <RegisterContainer>
            <InputWithLabel
              value={name}
              label="Full name"
              placeholder="Enter your full name..."
              inputType="text"
              onChange={setName}
            />
            <InputWithLabel
              value={email}
              label="Email"
              placeholder="Enter your email address..."
              inputType="email"
              onChange={setEmail}
            />
            <InputWithLabel
              value={password}
              label="Password"
              placeholder="Enter password..."
              inputType="password"
              onChange={setPassword}
            />

            <CalendarWithLabel
              label="Date of birth"
              date={date}
              maxDate={Date.now()}
              setDate={setDate}
            />

            <GenderContainer onChange={handleChangeGender}>
              <Label>Gender</Label>
              <div>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  checked={gender === "Male"}
                />
                Male
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  checked={gender === "Female"}
                />{" "}
                Female
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  checked={gender === "Other"}
                />{" "}
                Other
              </div>
            </GenderContainer>
          </RegisterContainer>
        </Form>
        <Button
          type="submit"
          size="Large"
          action="SignUp"
          form="register-form"
          disabled={handleButtonState()}
        >
          Register <BiSend />
        </Button>
        <LinkContainer>
          If you already have an account, <Link to="/login">sign in</Link>
        </LinkContainer>
      </FormContainer>
    </Container>
  );
};

export default Register;
