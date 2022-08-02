import React, { useState } from "react";
import { BiSend } from "react-icons/bi";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

import InputWithLabel from "../../components/InputWithLabel";
import Button from "../../components/Button";
import Title from "../../components/Title";
import { axiosInstance } from "../../config/axios";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import LoginContainer from "./styles/LoginContainer";

import LinkContainer from "./styles/LinkMessage";

import Auth from "../../utils/auth";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonState = () => isEmpty(email) || isEmpty(password);

  const handleLoginForm = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    try {
      const response = await axiosInstance.post(`users/login/`, data);
      Auth.getInstance().setAuthToken(response.data.token);
      Notify.success(
        "Now you are logged in, you can access the functionalities."
      );
      navigate("/");
    } catch (err) {
      Notify.failure(`${err.response.data.message}`);
    }

    setEmail("");
    setPassword("");
  };

  if (Auth.getInstance().isAuthenticated()) {
    return <Navigate to="/" />;
  }

  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <Form id="login-form" onSubmit={handleLoginForm}>
          <LoginContainer>
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
          </LoginContainer>
        </Form>
        <Button
          type="submit"
          size="Large"
          action="SignUp"
          form="login-form"
          disabled={handleButtonState()}
        >
          Sign in <BiSend />
        </Button>
        <LinkContainer>
          If you don't have an account, <Link to="/signup">sign up</Link>
        </LinkContainer>
      </FormContainer>
    </Container>
  );
};

export default Login;
