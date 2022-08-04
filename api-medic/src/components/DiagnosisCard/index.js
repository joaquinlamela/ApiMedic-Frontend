import React from "react";

import PropTypes from "prop-types";

import Container from "./styles/Container";
import DiagnosisContainer from "./styles/DiagnosisContainer";
import Title from "./styles/Title";
import Subtitle from "./styles/Subtitle";
import SpecializationsContainer from "./styles/SpecializationsContainer";
import Information from "./styles/Information";
import ListSpecialist from "./styles/ListSpecialists";

const DiagnosisCard = ({ name, specializations, certainty }) => {
  return (
    <Container>
      <DiagnosisContainer>
        <Title>Illness</Title>
        <Subtitle>{name}</Subtitle>
      </DiagnosisContainer>
      <SpecializationsContainer>
        <Subtitle black bold>
          Recommended specialists:
        </Subtitle>
        <ListSpecialist>
          {specializations.map((specialization) => (
            <span key={specialization.ID}>{specialization.Name}</span>
          ))}
        </ListSpecialist>
      </SpecializationsContainer>

      <Information>
        {`Take this diagnosis with caution since its certainty is ${Math.floor(
          certainty
        )}%. Visit a specialist to confirm.`}
      </Information>
    </Container>
  );
};

DiagnosisCard.propTypes = {
  name: PropTypes.string,
  specializations: PropTypes.array,
  certainty: PropTypes.number,
};

export default DiagnosisCard;
