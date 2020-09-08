import React from "react";
import styled from "styled-components";

import main from "../../assets/main.jpg";
import programming from "../../assets/programming.png";

import Description from "./description";

const About = () => {
  const intro = {
    kr: {
      title: "프론트엔드 개발자",
      describe:
        "심플하고 간단하게 서비스를 개발하면서 내 일을 사랑하는 개발자입니다.",
    },
    en: {
      title: "Front-end Developer",
      describe: "I code simple and modern things, and I love what I do.",
    },
  };

  let language = 0;

  const introView = (obj) => {
    return language ? (
      <div className="main">
        <h3>{obj.en.title}</h3>
        <span>{obj.en.describe}</span>
      </div>
    ) : (
      <div className="main">
        <h3>{obj.kr.title}</h3>
        <span>{obj.kr.describe}</span>
      </div>
    );
  };

  return (
    <Container>
      {introView(intro)}
      <div className="img-ring">
        <div className="cartoon-img" />
      </div>
      <div className="programming-img" />
      <div
        style={{
          fontSize: "0.5rem",
          color: "#2ed573",
          textDecoration: "none",
        }}
      >
        일러스트:{" "}
        <a
          href="https://iconscout.com/illustrations/blog-writer"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2ed573",
            textDecoration: "none",
          }}
        >
          Blog writer Illustration
        </a>{" "}
        by{" "}
        <a
          href="https://iconscout.com/contributors/delesign"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2ed573",
            textDecoration: "none",
          }}
        >
          Delesign Graphics
        </a>
      </div>
      <Description />
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  text-align: center;
  padding-top: 180px;

  .main {
    font-weight: 100;
    margin: 0;

    span {
      font-size: 1.2rem;
    }

    h3 {
      margin: 0 0 16px;
    }
  }

  .cartoon-img {
    background-image: url("${main}");
    border: 1px solid #fff;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .img-ring {
    border: 1px solid ${(props) => props.theme.color.main};
    width: 230px;
    height: 230px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px auto 72px;

    &:hover {
      box-shadow: 0px 0px 4px ${(props) => props.theme.color.main};
    }
  }

  .programming-img {
    background-image: url("${programming}");
    width: 600px;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center left;
    margin: 0 auto;
  }
`;

export default About;
