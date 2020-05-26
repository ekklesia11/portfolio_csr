import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const PrevBtn = ({ goPrev }) => {
  return <StyledImg icon={faChevronLeft} size="lg" onClick={goPrev} />;
};

const StyledImg = styled(FontAwesomeIcon)`
  opacity: 0.6;
  transition: 0.2s;
  margin-left: 1vw;

  &:hover {
    opacity: 1;
    cursor: pointer;
    transition: 0.2s;
    transform: scale(2);
  }
`;

export default PrevBtn;
