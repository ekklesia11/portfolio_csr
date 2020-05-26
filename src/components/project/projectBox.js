import React, { useState } from "react";
import styled from "styled-components";

import ProjectDetail from "./projectDetail";
import ProjectImg from "./projectImg";
import Navigation from "./navigation/navigation";

const ProjectBox = () => {
  const [page, setPage] = useState(0);
  const [imgPage, setImgPage] = useState(0);

  const project = [
    {
      title: "대형폐기물 수거 중개서비스 홈페이지",
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
      images: [
        "https://images.unsplash.com/photo-1575314027842-c33656c1f3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      ],
      github: "",
      link: "https://bbegi.com/",
    },
    {
      title: "대형폐기물 수거 중개서비스 어드민 페이지",
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
      images: [
        "https://images.unsplash.com/photo-1541560052-5e137f229371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      ],
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
      images: ["../../assets/project2.png", "../../assets/secondhand.png"],
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
      images: ["../../assets/project1.png"],
      github: "https://github.com/ekklesia11/secondhand-server-repo",
      link: "",
    },
  ];

  const handleNavigation = {
    goNext: () => {
      if (imgPage < project[page].images.length - 1) {
        setImgPage(imgPage + 1);
      } else {
        if (page < project.length - 1) {
          setPage(page + 1);
        } else {
          setPage(0);
        }
        setImgPage(0);
      }
    },
    goPrev: () => {
      if (imgPage > 0) {
        setImgPage(imgPage - 1);
      } else {
        if (page > 0) {
          setPage(page - 1);
        } else {
          setPage(project.length - 1);
        }
        setImgPage(0);
      }
    },
  };

  return (
    <Container>
      <StyledProject>
        <ProjectDetail project={project[page]} />
        <ProjectImg
          imgs={project[page].images[imgPage]}
          link={project[page].link}
          github={project[page].github}
        />
      </StyledProject>
      <Navigation handleNavigation={handleNavigation} />
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 2vw;
  position: relative;
  width: 100%;
  margin-bottom: 50px;
`;

const StyledProject = styled.div`
  display: flex;
  padding: 0 5vw;
`;

export default ProjectBox;
