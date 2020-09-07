import React from "react";
import styled from "styled-components";

import server from "../../assets/server.svg";
import client from "../../assets/client.svg";

const Description = () => {
  // const about =
  //   "안녕하세요 개발자 다니엘 입니다. 다양한 서비스를 모던한 웹/앱으로 개발합니다. 긍정적이고 친근하며 성장하길 좋아합니다. University of Cape Town 을 졸업하고 연구원, 스타트업, 영업 등 다양한 경험을 쌓았습니다. 단순히 코딩만 잘하는 개발자가 아니라 서비스 전체를 이해하는 개발자입니다.";

  return (
    <Container>
      <div className="intro">
        <h4>Hi, I'm Daniel. Glad to meet you.</h4>
        <span>
          Since beginning my journey as a developer, I've participated in
          various service projects, and collaborated with talented people to
          achieve great work perfomence. I'm naturally positive, reasonably
          curious, and perpetually working on improving my skills and problems
          at all time.
        </span>
      </div>
      <div className="details">
        <div className="detail detail-1">
          <img src={client} alt="" className="client" />
          <div className="detail-text">
            <strong>Front-end</strong>
            <div>For client side coding</div>
            <div className="title">Stacks:</div>
            <div>JavaScript, React, React Native, HTML, CSS</div>
          </div>
        </div>
        <div className="vertical-line" />
        <div className="detail detail-2">
          <img src={server} alt="" className="server" />
          <div className="detail-text">
            <strong>Back-end</strong>
            <div>For server side coding</div>
            <div className="title">Stacks:</div>
            <div>Node.js, Express, Python, Django, MySQL, MongoDB, AWS</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  font-size: 2rem;
  font-weight: 100;
  height: 450px;
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
  }
`;

export default Description;
