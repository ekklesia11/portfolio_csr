import React from "react";
import styled from "styled-components";

import { ReactComponent as Github } from "../../assets/github-icon.svg";
import { ReactComponent as Blog } from "../../assets/blog-icon.svg";
import { ReactComponent as Insta } from "../../assets/insta-icon.svg";
import { ReactComponent as Email } from "../../assets/email-icon.svg";

const ContactBox = () => {
  const contact = [
    { name: "github", link: "https://github.com/ekklesia11", icon: Github },
    { name: "instagram", link: "https://instagram.com/d_paac", icon: Insta },
    { name: "blog", link: "https://blog.chanhyun.org", icon: Blog },
    { name: "email", link: "mailto:happyyquokka@gmail.com", icon: Email },
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
            key={data.name}
          >
            <data.icon
              fill={
                data.name === "github" || data.name === "blog"
                  ? "#f1f2f6"
                  : "none"
              }
              stroke="#f1f2f6"
              width="24px"
              height="24px"
            />
          </a>
        ))}
      </div>
      <div className="copyright">만듬 바이 미 © 2020</div>
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
    margin-bottom: 24px;
  }

  .copyright {
    margin-top: 36px;
    font-size: 1.2rem;
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      width: 42px;
      height: 42px;
      border: 2px solid rgba(241, 242, 246, 0.6);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 24px;
    }
  }
`;

export default ContactBox;
