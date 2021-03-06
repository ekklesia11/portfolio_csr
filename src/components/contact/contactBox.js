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
      <div className="mail">
        <h2>프로젝트 시작하기</h2>
        <p>
          함께 프로젝트를 준비해볼까요?
          <br />
          커피는 제가 살게요 :)
        </p>
        <a
          href="mailto:happyyquokka@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="send-mail"
        >
          메일 보내기
        </a>
      </div>
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
  background-image: linear-gradient(
    to top left,
    rgba(46, 213, 160, 1),
    ${(props) => props.theme.color.main}
  );
  color: ${(props) => props.theme.color.textInverse};
  padding: 16px 0 96px;
  text-align: center;
  font-weight: 200;

  .mail {
    font-size: 1.2rem;
    background-color: ${(props) => props.theme.color.text};
    padding: 46px 0;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    top: -70px;
    border-radius: 12px;
    box-shadow: 1px 1px 6px rgba(47, 53, 66, 0.4);
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    p {
      margin: 0;
      line-height: 2rem;
    }
  }

  .send-mail {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 400;
    color: ${(props) => props.theme.color.textInverse};
    padding: 12px 36px;
    border: 2px solid ${(props) => props.theme.color.main};
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 80px;

    &:hover {
      background-color: ${(props) => props.theme.color.main};
    }
  }

  @media only screen and (max-width: 880px) {
    .mail {
      flex-direction: column;
      align-items: center;

      p {
        margin-bottom: 24px;
      }
    }
  }

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
      transition: all 0.2s;

      &:hover {
        border-color: ${(props) => props.theme.color.background};
        box-shadow: 0 0 8px ${(props) => props.theme.color.background};
      }
    }
  }
`;

export default ContactBox;
