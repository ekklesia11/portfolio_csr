import React from "react";
import styled from "styled-components";

import NextBtn from "./nextBtn";
import PrevBtn from "./prevBtn";

const Navigation = ({ handleNavigation }) => {
  return (
    <Container>
      <PrevBtn goPrev={handleNavigation.goPrev} />
      <NextBtn goNext={handleNavigation.goNext} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export default Navigation;
