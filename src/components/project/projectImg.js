import React from "react";
import styled from "styled-components";

const ProjectImg = ({ imgs, link, github }) => {
  return (
    <Container
      style={{
        backgroundImage: `url(${imgs})`
      }}
    >
      {github !== "" ? (
        <a
          href={link}
          title="깃헙 페이지로 이동!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../assets/external-link.png" alt="github" />
        </a>
      ) : null}
      {link !== "" ? (
        <a
          href={link}
          title="관련 페이지로 이동!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../assets/external-link.png" alt="External link!" />
        </a>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-left: 1vw;

  a {
    float: right;
    margin: 16px;
    text-decoration: none;
    color: #f5eded;
  }
`;

export default ProjectImg;
