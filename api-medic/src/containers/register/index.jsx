import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";

import InputWithLabel from "../../components/InputWithLabel";
import Button from "../../components/Button";
import Label from "../../components/InputWithLabel/styles/Label";
import Title from "../../components/Title";
import CalendarWithLabel from "../../components/Calendar";
import { axiosInstance } from "../../config/axios";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import RegisterContainer from "./styles/RegisterContainer";

import GenderContainer from "./styles/GenderContainer";
import LinkContainer from "./styles/LinkMessage";

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

  const handleRegisterForm = async (e) => {
    e.preventDefault();

    const data = {
      email,
      name,
      password,
      gender,
      dateOfBirth: date,
    };

    try {
      await axiosInstance.post(`users/`, data);
      Notify.success("Your data was sent successfully.");
    } catch (err) {
      Notify.failure(`${err.response.data.message}`);
    }

    setName("");
    setEmail("");
    setGender("Male");
    setPassword("");
    setDate(Date.now());
  };

  return (
    <Container>
      <FormContainer>
        <Title>Register</Title>
        <Form id="register-form" onSubmit={handleRegisterForm}>
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
