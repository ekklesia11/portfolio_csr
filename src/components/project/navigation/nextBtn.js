import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const NextBtn = ({ goNext }) => {
  return <StyledImg icon={faChevronRight} size="lg" onClick={goNext} />;
};

const StyledImg = styled(FontAwesomeIcon)`
  opacity: 0.6;
  transition: 0.2s;
  margin-right: 1vw;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transition: 0.2s;
    transform: scale(2);
  }
`;

export default NextBtn;
