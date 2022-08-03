import { Notify } from "notiflix";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Title from "../../components/Title";
import { axiosInstance } from "../../config/axios";
import { transformDate } from "../../utils/functions";

import Container from "./styles/Container";

const Consultation = () => {
  const params = useParams();
  const consultationId = parseInt(params.id);

  const [consultation, setConsultation] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getConsultation = async () => {
      try {
        setIsLoading(true);

        const config = {
          params: {
            consultationId,
          },
        };
        const response = await axiosInstance.get(
          `diagnosis/consultation/`,
          config
        );
        setConsultation(response.data);
        setIsLoading(false);
      } catch (err) {
        Notify.failure(`${err.response.data.message}`);
      }
    };
    getConsultation();
  }, [consultationId]);

  if (isLoading) return <Loading id="loading-icon" />;

  return (
    <Container>
      <Title>Consultation with date {transformDate(consultation.date)}</Title>
    </Container>
  );
};

export default Consultation;
