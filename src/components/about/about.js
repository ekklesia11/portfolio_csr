import React from "react";
import styled from "styled-components";

import main from "../../assets/main.jpg";

const About = () => {
  return (
    <Container>
      <p>
        <strong>Web/App Developer</strong>
        <br />
        <span>I code simple and modern things, and love what I do.</span>
      </p>
      <div className="img-ring">
        <div className="cartoon-img" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  line-height: 1.5em;
  text-align: center;
  margin-top: 180px;

  p {
    margin: 0;
  }

  span {
    font-size: 1.2rem;
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
    border: 1px solid #fff;
    width: 230px;
    height: 230px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 36px auto;

    &:hover {
      border-color: #7bed9f;
    }
  }
`;

export default About;
