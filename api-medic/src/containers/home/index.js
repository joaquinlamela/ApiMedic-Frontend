/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";

import Title from "../../components/Title";
import Select from "react-select";

import Container from "./styles/Container";
import FormContainer from "./styles/FormContainer";
import Form from "./styles/Form";
import { axiosInstance } from "../../config/axios";
import SymptomsContainer from "./styles/SymptomsContainer";
import Label from "../../components/InputWithLabel/styles/Label";
import Button from "../../components/Button";
import { BiSend } from "react-icons/bi";
import { useRecoilState } from "recoil";
import { symptomsListAtom } from "../../recoil/symptomsAtom";
import DiagnosisContainer from "./styles/DiagnosisContainer";
import DiagnosisCard from "../../components/DiagnosisCard";

const Home = () => {
  const [symptomsSelected, setSymptomsSelected] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [symptoms, setSymptoms] = useRecoilState(symptomsListAtom);

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

    if (symptoms && !symptoms.length) getSymptoms();
  }, [setSymptoms, symptoms]);

  const handleButtonState = () => !symptomsSelected.length;

  const handleSymptomsSelected = (symptom) => {
    setSymptomsSelected(symptom);
  };

  const requestDiagnosis = async (e) => {
    e.preventDefault();

    try {
      const symptoms = symptomsSelected.map((symptom) => symptom.value);
      const config = {
        params: {
          symptoms: JSON.stringify(symptoms),
        },
      };
      const response = await axiosInstance.get(`diagnosis/`, config);
      setDiagnoses(response.data);
    } catch (err) {
      Notify.failure(`${err.response.data.message}`);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Request diagnoses</Title>
        <Form id="diagnosis-form" onSubmit={requestDiagnosis}>
          <SymptomsContainer>
            <Label>Select your symptoms</Label>
            <Select
              isMulti
              name="colors"
              options={symptoms}
              className="multi-select"
              classNamePrefix="select"
              onChange={(symptom) => handleSymptomsSelected(symptom)}
            />
          </SymptomsContainer>
        </Form>
        <Button
          type="submit"
          size="ExtraLarge"
          action="SignUp"
          form="diagnosis-form"
          disabled={handleButtonState()}
        >
          Request diagnoses <BiSend />
        </Button>
      </FormContainer>

      {diagnoses && diagnoses.length > 0 && (
        <>
          <Title>Your possible diagnoses</Title>

          <DiagnosisContainer>
            {diagnoses.map((diag) => (
              <DiagnosisCard
                key={diag.Issue.ID}
                name={diag.Issue.ProfName}
                specializations={diag.Specialisation}
                certainty={diag.Issue.Accuracy}
              />
            ))}
          </DiagnosisContainer>
        </>
      )}
    </Container>
  );
};

export default Home;
