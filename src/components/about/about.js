import React from "react";
import styled from "styled-components";

const About = () => {
  // return (
  //   <Container>
  //     <p>
  //       HI MY NAME IS DANIEL
  //       <br />
  //       I CREATE MODERN WEB/APP SERVICES
  //       <br />
  //       POSITIVE FRIENDLY
  //       <br />
  //       LIKE TO DEVELOP MYSELF
  //       <br />
  //       NOT ONLY CAN WRITE AWESOME CODES
  //       <br />
  //       BUT ALSO UNDERSTAND SERVICES
  //       <br />
  //       FROM A TO Z<br />
  //     </p>
  //   </Container>
  // );
  return (
    <Container>
      <p>
        안녕하세요 개발자 다니엘 입니다
        <br />
        다양한 서비스를 모던한 웹/앱으로 개발합니다
        <br />
        긍정적이고 친근하며 성장하길 좋아합니다
        <br />
        University of Cape Town 을 졸업하고
        <br />
        연구원, 스타트업, 영업 등 다양한 경험을 쌓았습니다
        <br />
        단순히 코딩만 잘하는 개발자가 아니라
        <br />
        서비스 전체를 이해하는
        <br />
        개발자입니다
        <br />
      </p>
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 4vw;
  line-height: 1.5em;
  padding: 2vw;

  p {
    margin: 0;
  }
`;

export default About;
