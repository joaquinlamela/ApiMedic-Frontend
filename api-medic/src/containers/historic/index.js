import { Notify } from "notiflix";
import React, { useEffect, useState } from "react";
import ConsultationCard from "../../components/ConsultationCard";

import Title from "../../components/Title";
import { axiosInstance } from "../../config/axios";
import ConsultationsContainer from "./styles/ConsultationsContainer";

import Container from "./styles/Container";

const Historic = () => {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    const getConsultations = async () => {
      try {
        const response = await axiosInstance.get(`diagnosis/consultations/`);
        setConsultations(response.data);
      } catch (err) {
        Notify.failure(`${err.response.data.message}`);
      }
    };

    getConsultations();
  }, []);

  consultations.map((consultation) => console.log(consultation));

  return (
    <Container>
      <Title>Your consultations</Title>
      <ConsultationsContainer>
        {consultations.map((consultation) => (
          <ConsultationCard
            id={consultation.id}
            diagnoses={consultation.diagnosis}
            date={consultation.date}
            symptoms={consultation.symptoms}
          />
        ))}
      </ConsultationsContainer>
    </Container>
  );
};

export default Historic;
