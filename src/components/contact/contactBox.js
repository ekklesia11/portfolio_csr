import React from "react";
import styled from "styled-components";

import github from "../../assets/github-icon.png";
import blog from "../../assets/blog-icon.png";
import insta from "../../assets/insta-icon.png";
import email from "../../assets/email-icon.png";

const ContactBox = () => {
  const contact = [
    { name: "github", link: "https://github.com/ekklesia11", icon: github },
    { name: "instagram", link: "https://instagram.com/d_paac", icon: insta },
    { name: "blog", link: "https://blog.chanhyun.org", icon: blog },
    { name: "email", link: "mailto:happyyquokka@gmail.com", icon: email },
  ];

  return (
    <Container>
      <div className="word">It always seems impossible until it's done.</div>
      <div className="info">
        {contact.map((data) => (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            key={data.link}
          >
            <img src={data.icon} alt={data.name} />
          </a>
        ))}
      </div>
      <div className="copyright">Developed by my © 2020</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: ${(props) => props.theme.color.textInverse};
  padding: 96px 0;
  text-align: center;
  font-weight: 200;

  .word {
    font-size: 1.5rem;
  }

  .copyright {
    margin-top: 48px;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 56px;
      height: 56px;
      border: 1px solid ${(props) => props.theme.color.textInverse};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 24px;
    }

    img {
      display: block;
      width: 24px;
    }
  }
`;

export default ContactBox;
