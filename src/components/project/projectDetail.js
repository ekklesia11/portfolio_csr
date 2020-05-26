import React from "react";
import styled from "styled-components";

const ProjectDetail = ({ project }) => {
  return (
    <Container>
      <h3>{project.title}</h3>
      <h4>설명</h4>
      <p>{project.description}</p>
      <h4>역할</h4>
      <ul>
        {project.roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
      <h4>스택</h4>
      <StyledStack>
        {project.stacks.map((stack) => (
          <div key={stack}>{stack}</div>
        ))}
      </StyledStack>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 50%;
  margin-right: 1vw;
`;

const StyledStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    background-color: #f5eded;
    padding: 8px;
    margin: 4px;
    border-radius: 50px;
    color: #000;
  }
`;

export default ProjectDetail;
