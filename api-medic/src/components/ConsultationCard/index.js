import React from "react";

import PropTypes from "prop-types";

import Container from "./styles/Container";
import Title from "./styles/Title";
import Subtitle from "./styles/Subtitle";
import DiagnosesContainer from "./styles/DiagnosesContainer";
import ListDiagnoses from "./styles/ListDiagnoses";
import DiagnosisContainer from "./styles/DiagnosisContainer";
import SymptomsContainer from "./styles/SymptomsContainer";
import ConfirmedDiagnosis from "./styles/ConfirmedDiagnosis";
import Information from "./styles/Information";
import { transformDate } from "../../utils/functions";

const ConsultationCard = ({
  id,
  diagnoses,
  date,
  symptoms,
  confirmedDiagnosis,
}) => {
  return (
    <Container to={`/consultation/${id}`}>
      <Title>Consultation with date {transformDate(date)}</Title>

      <SymptomsContainer>
        <Subtitle black bold>
          Your symptoms:
        </Subtitle>
        <ListDiagnoses>
          {symptoms.map((symptoms) => (
            <span key={symptoms}>{symptoms}</span>
          ))}
        </ListDiagnoses>
      </SymptomsContainer>

      <DiagnosesContainer>
        <Subtitle black bold>
          Possible diagnoses:
        </Subtitle>
        <ListDiagnoses>
          {diagnoses.map((diagnosis) => (
            <DiagnosisContainer key={diagnosis.ID}>
              <span>{diagnosis.Issue.ProfName}</span>
              <span>{Math.floor(diagnosis.Issue.Accuracy)}%</span>
            </DiagnosisContainer>
          ))}
        </ListDiagnoses>
      </DiagnosesContainer>

      <ConfirmedDiagnosis>
        <Subtitle black bold>
          Confirmed diagnosis:{" "}
          <span>
            {confirmedDiagnosis ? confirmedDiagnosis : `not confirmed`}
          </span>
        </Subtitle>
      </ConfirmedDiagnosis>

      {!confirmedDiagnosis && (
        <Information>
          Click on the card to confirm the correct diagnosis
        </Information>
      )}
    </Container>
  );
};

ConsultationCard.propTypes = {
  id: PropTypes.number,
  diagnoses: PropTypes.array,
  date: PropTypes.instanceOf(Date),
  symptoms: PropTypes.array,
  confirmedDiagnosis: PropTypes.string,
};

export default ConsultationCard;
