import React, { useEffect } from "react";
import Lottie from "lottie-web";
import PropTypes from "prop-types";

import Data from "../../lottie/loading.json";

import LoadingIcon from "./styles/LoadingIcon";
import Container from "./styles/Container";

export default function Loading({ id }) {
  useEffect(() => {
    Lottie.loadAnimation({
      container: document.getElementById(id),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: Data,
    });
  });

  return (
    <Container
      middle="xs"
      center="xs"
      grow="xs"
      aria-live="polite"
      aria-busy="true"
      vSpread
    >
      <LoadingIcon id={id} />
    </Container>
  );
}

Loading.propTypes = {
  id: PropTypes.string.isRequired,
};
