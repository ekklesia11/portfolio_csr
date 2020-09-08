import React from "react";
import styled from "styled-components";

import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import secondhand from "../../assets/secondhand.png";
import tabata from "../../assets/tabata-timer.jpg";
import bbegi from "../../assets/bbegi.png";

const ProjectBox = () => {
  const project = [
    {
      title: "타바타 운동 타이머",
      description: "고강도 인터벌 운동을 위해 제작된 인터벌 전용 타이머입니다.",
      roles: [
        "React 및 pure javascript function 으로 구성된 타이머",
        "Basic static webapp 구현",
      ],
      stacks: ["#React", "#Javascript", "#AWS S3", "#Route53"],
      images: tabata,
      github: "",
      link: "http://timer.talab.pro",
    },
    {
      title: "서비스 홈페이지",
      description: "서비스 소개 및 제휴, 고객을 위한 랜딩 페이지입니다.",
      roles: [
        "React Server Side Rendering 및 적응형 홈페이지 구현",
        "Nginx 서버와 Let's Encrypt 를 활용한 HTTPS 페이지 구현",
      ],
      stacks: [
        "#React",
        "#Nodejs",
        "#Express",
        "#Webpack",
        "#Babel",
        "#AWS EC2",
        "#Route53",
      ],
      images: bbegi,
      github: "",
      link: "https://gatda.com/",
    },
    {
      title: "서비스 어드민 페이지",
      description: "서비스의 운영 관리를 위한 권한별 어드민 페이지입니다.",
      roles: [
        "React Client Side Rendering, AWS S3 기반 Static 웹 사이트 구현",
        "토큰 기반 권한별 로그인, 기능별 CRUD API 및 Front side 페이지 구현",
        "Webpack 및 Babel 환경 세팅",
      ],
      stacks: [
        "#React",
        "#Nodejs",
        "#Express",
        "#Webpack",
        "#Babel",
        "#MongoDB",
        "#AWS S3",
        "#Route53",
      ],
      images:
        "https://images.unsplash.com/photo-1541560052-5e137f229371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      github: "",
      link: "",
    },
    {
      title: "SecondHand",
      description:
        "최근 30일 내 중고거래가를 알아보자! 중고거래가 활발한 유모차를 시작으로 중고거래 사이트의 크롤링한 데이터를 브랜드와 모델로 매칭시켜 중고거래시 기준을 세우는데 도움을 주는 어플리케이션입니다.",
      roles: [
        "중고거래 사이트별 크롤링 구현",
        "게시글 타이틀/내용 필터링 함수 구현 및 브랜드/모델 매칭",
        "선택가격범위 내 브랜드/모델 검색페이지 구현 및 월/일 데이터기반 간략한 그래프 구현",
      ],
      stacks: ["#Python3", "#Django", "#KoNLPy", "#MySQL", "#React Native"],
      images: project2,
      github: "https://github.com/ekklesia11/secondhand-server-repo",
      link: "",
    },
    {
      title: "Lunch-gogo",
      description:
        "오늘 뭐먹지? 매일하는 고민, 이제는 재밌게 메뉴를 골라보자! 직장인들이 점심메뉴를 선정할 때 실시간 투표를 통해서 재밌게 정하고, 투표결과에 따라 반경 500m 내 거리순으로 식당목록을 제공합니다.",
      roles: [
        "실시간 투표 API 구현",
        "사용자 위치기반 반경 500m 내 거리순 식당목록 제공",
      ],
      stacks: [
        "#JavaScript",
        "#Nodejs",
        "#Express",
        "#Socket.io",
        "#MongoDB",
        "#React",
      ],
      images: project1,
      github: "https://github.com/ekklesia11/secondhand-server-repo",
      link: "https://flamboyant-ptolemy-79e553.netlify.app",
    },
  ];

  const projectCard = (obj) => {
    return (
      <Card key={obj.title}>
        <div className="container">
          <div
            className="background"
            style={{ backgroundImage: `url(${obj.images})` }}
          />
          <div className="detail">
            <div className="description">{obj.description}</div>
            <div className="position">{obj.roles.join(", ")}</div>
            <div className="stack">{obj.stacks.join(", ")}</div>
            <div className="button">페이지 이동하기</div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Container>
      <h1>최근 프로젝트</h1>
      <p>필요에 따라 프론트엔드와 서버 개발에 참여한 프로젝트들 입니다.</p>
      <div className="project-layout">
        {project.map((data) => projectCard(data))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  position: relative;
  width: 80%;
  margin-bottom: 50px;
  text-align: center;
  margin: 0 auto;

  p {
    font-size: 1.2rem;
    margin-bottom: 72px;
  }

  .project-layout {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.color.textInverse};
  margin: 24px;

  .container {
    .detail {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.5s;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .button {
        padding: 12px 0;
        border: 1px solid ${(props) => props.theme.color.main};
        width: 140px;
        margin: 0 auto;
        cursor: pointer;
        transition: all 0.3s;
        border-radius: 24px;
        margin-top: 8px;

        &:hover {
          background-color: ${(props) => props.theme.color.main};
        }
      }

      div {
        opacity: 0;
      }
    }

    .background {
      transition: all 0.5s;
      background-repeat: no-repeat;
      background-size: 140px;
      background-position: center;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      border: 1px solid #dfe4ea;
      border-radius: 12px;
    }

    &:hover {
      .detail {
        background-color: ${(props) => props.theme.color.text};

        div {
          opacity: 1;
        }
      }

      .background {
        transform: scale(1.5);
        opacity: 0;
      }
    }
  }
`;

export default ProjectBox;
