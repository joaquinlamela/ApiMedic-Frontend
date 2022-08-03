import { Notify } from "notiflix";
import React, { useEffect, useState } from "react";
import ConsultationCard from "../../components/ConsultationCard";
import Loading from "../../components/Loading";

import Title from "../../components/Title";
import { axiosInstance } from "../../config/axios";
import ConsultationsContainer from "./styles/ConsultationsContainer";

import Container from "./styles/Container";

const Historic = () => {
  const [consultations, setConsultations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getConsultations = async () => {
      try {
        setIsLoading(true);
        const response = await axiosInstance.get(`diagnosis/consultations/`);
        setConsultations(response.data);
        setIsLoading(false);
      } catch (err) {
        Notify.failure(`${err.response.data.message}`);
      }
    };

    getConsultations();
  }, []);

  if (isLoading) return <Loading id="loading-icon" />;

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
