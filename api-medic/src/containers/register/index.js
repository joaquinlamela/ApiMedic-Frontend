import React, { useState } from "react";

import InputWithLabel from "../../components/InputWithLabel";

import { BiSend } from "react-icons/bi";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import RegisterContainer from "./styles/RegisterContainer";
import Button from "../../components/Button";

import { isEmpty } from "lodash";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleButtonState = () =>
    isEmpty(name) || isEmpty(email) || isEmpty(subject) || isEmpty(enquiry);

  return (
    <Container>
      <FormContainer>
        <Form id="contact-form">
          <RegisterContainer>
            <InputWithLabel
              value={name}
              label="Name"
              placeholder="Enter your name..."
              type="text"
              onChange={setName}
            />
            <InputWithLabel
              value={email}
              label="Email"
              placeholder="Enter your email address..."
              type="email"
              onChange={setEmail}
            />

            <InputWithLabel
              value={subject}
              label="Subject"
              placeholder="Enter subject..."
              type="text"
              onChange={setSubject}
            />

            <InputWithLabel
              value={enquiry}
              label="Enquiry type"
              placeholder="Enter enquiry type..."
              type="text"
              onChange={setEnquiry}
            />
          </RegisterContainer>
        </Form>
        <Button
          size="Large"
          type="SignUp"
          form="contact-form"
          disabled={handleButtonState()}
        >
          Register <BiSend />
        </Button>
      </FormContainer>
    </Container>
  );
};

export default Register;
