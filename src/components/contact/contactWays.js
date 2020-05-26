import React from "react";
import styled from "styled-components";

const ContactWays = props => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  position: relative;
  width: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin: 10px;
    width: 24vw;
    height: 24vw;
    border: 3px solid ${props => props.theme.color.red};
    transition: 0.2s;
    white-space: nowrap;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      outline: none;
      color: ${props => props.theme.color.text};
      cursor: pointer;
    }
  }

  div:hover {
    border-radius: 50%;
    transition: 0.2s;

    span,
    a {
      background-color: #000;
      border-style: solid;
      border-color: ${props => props.theme.color.red};
      border-width: 3px 0;
      padding-bottom: 0.5vw;
    }

    span:hover,
    a:hover {
      color: ${props => props.theme.color.brown};
    }
  }
`;

export default ContactWays;
