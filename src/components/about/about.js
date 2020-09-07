import React from "react";
import styled from "styled-components";

import main from "../../assets/main.jpg";
import programming from "../../assets/programming.png";
// import server from "../../assets/server.svg";
// import client from "../../assets/client.svg";

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
      {/* <div className="description">
        <p>
          <h4>Hi, I'm Daniel. Glad to meet you.</h4>
          <span>
            Since beginning my journey as a developer, I've participated in
            various service projects, and collaborated with talented people to
            achieve great work perfomence. I'm naturally positive, reasonably
            curious, and perpetually working on improving my skills and problems
            at all time.
          </span>
        </p>
        <div className="details">
          <div className="detail detail-1">
            <img src={client} alt="" className="client" />
            <div className="detail-text">
              <strong>Front-end</strong>
              <div>For client side coding</div>
            </div>
          </div>
          <div className="vertical-line" />
          <div className="detail detail-2">
            <img src={server} alt="" className="server" />
            <div className="detail-text">
              <strong>Back-end</strong>
              <div>For server side coding</div>
            </div>
          </div>
        </div>
      </div> */}
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
      box-shadow: 0px 0px 6px ${(props) => props.theme.color.main};
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
  /* 
  .description {
    width: 100%;
    height: 320px;
    background-color: ${(
    props
  ) =>
    props.theme.color
      .main};
    padding: 84px 0;
    margin-bottom: 500px;

    p {
      margin: 0 auto;
      text-align: center;
      width: 58%;
      line-height: 2rem;
      color: ${(
    props
  ) =>
    props.theme.color
      .textInverse};
    }

    span {
      word-wrap: break-word;
    }
  }

  .details {
    margin: 84px auto 0;
    display: flex;
    justify-content: center;

    .detail {
      background-color: ${(
    props
  ) =>
    props.theme.color
      .background};
      padding: 36px 24px;
    }

    .vertical-line {
      border-right: 1px solid #dfe4ea;
    }

    .detail-text {
      font-size: 1.2rem;
      font-weight: 100;

      div {
        margin: 24px auto;
      }
    }

    .detail-1 {
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
  } */
`;

export default About;
