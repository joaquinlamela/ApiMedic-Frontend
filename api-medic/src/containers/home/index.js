import React, { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Title from "../../components/Title";
import Select from "react-select";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import { axiosInstance } from "../../config/axios";

const Home = () => {
  const [symptoms, setSymptoms] = useState([]);

  useEffect(() => {
    const getSymptoms = async () => {
      try {
        const response = await axiosInstance.get(`diagnosis/symptoms/`);
        const symptomsTransormed = [];
        response.data.map((symptoms) =>
          symptomsTransormed.push({ value: symptoms.id, label: symptoms.name })
        );
        setSymptoms(symptomsTransormed);
      } catch (err) {
        Notify.failure(`${err.response.data.message}`);
      }
    };

    getSymptoms();
  }, []);

  return (
    <Container>
      <FormContainer>
        <Title>Request diagnosis</Title>
        <Form id="diagnosis-form">
          <Select
            isMulti
            name="colors"
            options={symptoms}
            className="multi-select"
            classNamePrefix="select"
          />
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Home;
