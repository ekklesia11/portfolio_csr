import React from "react";
import styled from "styled-components";

// import ContactWays from "./contactWays";
// import ContactDirect from "./contactDirect";
// import ContactSNS from "./contactSNS";

import github from "../../assets/github-icon.png";
import blog from "../../assets/blog-icon.png";
import insta from "../../assets/insta-icon.png";
import email from "../../assets/email-icon.png";

const ContactBox = () => {
  return (
    <Container>
      <div className="word">It always seems impossible until it's done.</div>
      <div>
        <img src={github} alt="github" />
        <img src={insta} alt="insta" />
        <img src={blog} alt="blog" />
        <img src={email} alt="email" />
      </div>
      <div className="copyright">Developed by my © 2020</div>
      {/* <ContactWays>
        <ContactDirect />
      </ContactWays>
      <ContactWays>
        <ContactSNS />
      </ContactWays> */}
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.textInverse};
  padding: 72px 0;
  text-align: center;
  font-weight: 200;

  .word {
    font-size: 1.5rem;
  }

  .copyright {
    margin-top: 56px;
  }
`;

export default ContactBox;
