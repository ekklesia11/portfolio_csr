import React from "react";
import styled from "styled-components";

import server from "../../assets/server.svg";
import client from "../../assets/client.svg";

const Description = () => {
  const description = {
    kr: {
      greeting: "반갑습니다, 다니엘 입니다.",
      describe:
        "개발자로써의 삶을 시작한 이후로 다양한 서비스와 프로젝트, 그리고 좋은 결과를 만들어내기 위해 재능있는 사람들과 함께 했습니다. 늘 긍정적이고, 호기심 가득하며, 끊임없이 성장하고 발전하기를 힘쓰고 있습니다.",
    },
    en: {
      greeting: "Hi, I'm Daniel. Glad to meet you.",
      describe:
        "Since beginning my journey as a developer, I've participated in various service projects, and collaborated with talented people to achieve great work perfomence. I'm naturally positive, reasonably curious, and perpetually working on improving my skills and problems at all time.",
    },
  };

  const skillSet = {
    kr: [
      {
        position: "프론트엔드",
        describe: "클라이언트를 위한 개발",
        stack: ["JavaScript(ES6+)", "React", "React-Native", "HTML", "CSS"],
        img: client,
      },
      "line",
      {
        position: "백엔드",
        describe: "서버사이드 개발",
        stack: [
          "Node.js",
          "Express",
          "Python",
          "Django",
          "MySQL",
          "MongoDB",
          "AWS",
        ],
        img: server,
      },
    ],
    en: [
      {
        position: "Front-end",
        describe: "For client side coding",
        stack: ["JavaScript(ES6+)", "React", "React-Native", "HTML", "CSS"],
        img: client,
      },
      "line",
      {
        position: "Back-end",
        describe: "For server side coding",
        stack: [
          "Node.js",
          "Express",
          "Python",
          "Django",
          "MySQL",
          "MongoDB",
          "AWS",
        ],
        img: server,
      },
    ],
  };

  let language = 0;

  const descriptionView = (obj) => {
    return language ? (
      <div className="intro">
        <h4>{obj.en.greeting}</h4>
        <span>{obj.en.describe}</span>
      </div>
    ) : (
      <div className="intro">
        <h4>{obj.kr.greeting}</h4>
        <span>{obj.kr.describe}</span>
      </div>
    );
  };

  const stackView = (obj) => {
    return obj[language ? "en" : "kr"].map((data, i) =>
      data === "line" ? (
        <div className="vertical-line" key={i} />
      ) : (
        <div className={`detail detail-${i}`} key={i}>
          <img src={data.img} alt="" className="client" />
          <div className="detail-text">
            <strong>{data.position}</strong>
            <div>{data.describe}</div>
            <div className="title">{language ? "stacks" : "기술스택"}:</div>
            <div>{data.stack.join(", ")}</div>
          </div>
        </div>
      )
    );
  };

  return (
    <Container>
      {descriptionView(description)}
      <div className="details">{stackView(skillSet)}</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  background-image: linear-gradient(
    to top right,
    rgba(46, 213, 160, 1),
    ${(props) => props.theme.color.main}
  );
  font-size: 2rem;
  font-weight: 100;
  height: 455px;
  padding-top: 84px;
  margin-bottom: 400px;

  .intro {
    text-align: center;
    width: 58%;
    margin: 0 auto;
    line-height: 2rem;
    color: ${(props) => props.theme.color.textInverse};
  }

  span {
    font-size: 1.2rem;
    word-wrap: break-word;
  }

  h4 {
    margin: 0 auto 16px;
  }

  .details {
    margin: 84px auto 0;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color.text};
    width: 70%;
    border-radius: 12px;
    box-shadow: 0 1px 6px #dfe4ea;

    .detail {
      background-color: ${(props) => props.theme.color.background};
      padding: 36px 24px;
      position: relative;
      width: 50%;
    }

    .vertical-line {
      border-right: 1px solid #dfe4ea;
    }

    .detail-text {
      font-size: 1.2rem;
      font-weight: 100;
      margin-top: 12px;

      div:nth-child(2) {
        margin-top: 24px;
      }

      .title {
        margin: 48px 0 12px;
        color: ${(props) => props.theme.color.main};
      }
    }

    .detail-0 {
      border-radius: 12px 0 0 12px;
      border: 1px solid #dfe4ea;
      border-right: none;
    }

    .detail-2 {
      border-radius: 0 12px 12px 0;
      border: 1px solid #dfe4ea;
      border-left: none;
    }

    .server,
    .client {
      width: 60px;
    }
  }
`;

export default Description;
