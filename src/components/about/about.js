import React from "react";
import styled from "styled-components";

import main from "../../assets/main.jpg";
import programming from "../../assets/programming.png";

import Description from "./description";

const About = () => {
  return (
    <Container>
      <p>
        <h3>Web/App Developer</h3>
        <span>I code simple and modern things, and I love what I do.</span>
      </p>
      <div className="img-ring">
        <div className="cartoon-img" />
      </div>
      <div className="programming-img" />
      <Description />
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  text-align: center;
  margin-top: 180px;

  p {
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
    margin: 0 auto 8px;
  }
`;

export default About;
