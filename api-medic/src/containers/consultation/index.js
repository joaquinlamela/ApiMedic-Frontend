import { Notify } from "notiflix";
import React, { useEffect, useState } from "react";
import { BiSend } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import { axiosInstance } from "../../config/axios";
import { transformDate } from "../../utils/functions";
import ConfirmDiagnosis from "./styles/ConfirmDiagnosis";

import Container from "./styles/Container";
import ListSymptoms from "./styles/ListSymptoms";
import ReportedSymptoms from "./styles/ReportedSymptoms";
import Symptom from "./styles/Symptom";

const Consultation = () => {
  const params = useParams();
  const consultationId = parseInt(params.id);

  const [consultation, setConsultation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [symptoms, setSymptoms] = useState([]);
  const [diagnoses, setDiagnoses] = useState([]);
  const [confirmedDiagnosis, setConfirmedDiagnosis] = useState("");

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
        setSymptoms(response.data.symptoms);
        setDiagnoses(response.data.diagnosis);
        setConfirmedDiagnosis(response.data.confirmedDiagnosis);
        setIsLoading(false);
      } catch (err) {
        Notify.failure(`${err.response.data.message}`);
      }
    };
    getConsultation();
  }, [consultationId]);

  const handleSelectedDiagnosis = async (name) => {
    setConfirmedDiagnosis(name);
    try {
      const config = {
        params: {
          consultationId,
        },
      };
      await axiosInstance.patch(
        `diagnosis/consultation/`,
        { confirmedDiagnosis: name },
        config
      );
      Notify.success(
        "Thanks for update the consultation with the correct diagnosis."
      );
    } catch (err) {
      Notify.failure(`${err.response.data.message}`);
    }
  };

  if (isLoading) return <Loading id="loading-icon" />;

  return (
    <Container>
      <Title>Consultation with date {transformDate(consultation.date)}</Title>
      <ReportedSymptoms>
        <Subtitle>Reported symptoms:</Subtitle>
        <ListSymptoms>
          {symptoms.map((symptom) => (
            <Symptom key={symptom}>{symptom}</Symptom>
          ))}
        </ListSymptoms>
      </ReportedSymptoms>

      {confirmedDiagnosis ? (
        <ConfirmDiagnosis>
          <Subtitle>The confirmed diagnosis is: {confirmedDiagnosis}</Subtitle>
        </ConfirmDiagnosis>
      ) : (
        <ConfirmDiagnosis>
          <Subtitle>
            Click on one of the diagnoses to confirm which one was correct
          </Subtitle>

          <ListSymptoms>
            {diagnoses.map((diagnosis) => (
              <Button
                size="Auto"
                action="SignUp"
                key={diagnosis.Issue.ID}
                onClick={() =>
                  handleSelectedDiagnosis(diagnosis.Issue.ProfName)
                }
              >
                {diagnosis.Issue.ProfName} <BiSend />
              </Button>
            ))}
          </ListSymptoms>
        </ConfirmDiagnosis>
      )}
    </Container>
  );
};

export default Consultation;
