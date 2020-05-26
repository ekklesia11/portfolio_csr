import React from "react";
import styled from "styled-components";

import ContactWays from "./contactWays";
import ContactDirect from "./contactDirect";
import ContactSNS from "./contactSNS";

const ContactBox = () => {
  return (
    <Container>
      <ContactWays>
        <ContactDirect />
      </ContactWays>
      <ContactWays>
        <ContactSNS />
      </ContactWays>
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 3vw;
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 50px;
`;

export default ContactBox;
