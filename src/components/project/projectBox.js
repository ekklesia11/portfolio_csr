import React from 'react';
import styled from 'styled-components';

import lunchgogo from '../../assets/lunchgogo.png';
import secondhand from '../../assets/secondhand.png';
import talab from '../../assets/talab.png';
import bbegi from '../../assets/bbegi.png';
import cashwalk from '../../assets/cashwalk.png';
import futureplay from '../../assets/futureplay.png';
import pumpkinmelon from '../../assets/pumpkinmelon.jpeg';
import { ReactComponent as gatda } from '../../assets/gatda.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const project = [
  {
    title: 'FuturePlay',
    description: ['Backend engineer', 'Tech team'],
    roles: [
      'Node 및 Lambda cron server 개발',
      'Web crawler 개발',
      'Redis, DynamoDB, Athena(firehose) 를 활용한 랭킹 API 개발',
    ],
    stacks: ['#Nodejs', '#AWS', '#React', '#Nextjs'],
    images: futureplay,
    link: '',
  },
  {
    title: 'Nudge Healthcare',
    description: ['Backend/Frontend engineer'],
    roles: [
      'Node 및 Lambda cron server 개발',
      'Web crawler 개발',
      'Redis, DynamoDB, Athena(firehose) 를 활용한 랭킹 API 개발',
    ],
    stacks: ['#Nodejs', '#AWS', '#React', '#Nextjs'],
    images: cashwalk,
    link: '',
  },
  {
    title: '타바타 운동 타이머',
    description: ['고강도 인터벌 운동을 위해 제작된', '인터벌 전용 타이머'],
    roles: [
      'React 및 pure javascript function 으로 구성된 타이머',
      'Basic static webapp 구현',
      'AWS CloudFront 를 활용한 https 인증서 구현',
    ],
    stacks: ['#React', '#Javascript', '#AWS S3', '#Route53', '#CloudFront'],
    images: talab,
    link: 'https://timer.talab.pro',
  },
  {
    title: '서비스 홈페이지',
    description: ['서비스 소개 및 제휴', '고객을 위한 랜딩 페이지'],
    roles: [
      '바닐라 자바스크립트 및 CSS 구현',
      '함수형 리액트, 적응형 웹페이지 구현',
      'SEO 를 위해 Node.js 서버 구현 및 Nginx 활용',
      'SSL 인증서 적용(certbot/letsencrypt)',
      'AWS EC2 서버환경으로 배포',
    ],
    stacks: ['#React', '#Nodejs', '#Express', '#Webpack', '#Babel', '#AWS EC2', '#Route53'],
    images: bbegi,
    link: 'https://gatda.com/',
  },
  {
    title: '서비스 어드민 페이지',
    description: ['서비스의 운영 관리를 위한', '사용자 권한별 어드민 페이지'],
    roles: [
      'React Client Side Rendering 페이지 구현',
      'ES6 기준 Webpack 및 babel(IE9) 환경세팅',
      'AWS S3 배포 Static 웹 구현',
      '공지/이벤트/배너 CRUD API 제작',
      'Bitbucket Pipeline 활용 및 배포 자동화',
    ],
    stacks: ['#React', '#Nodejs', '#Express', '#Webpack', '#Babel', '#MongoDB', '#AWS S3', '#Route53'],
    images:
      'https://images.unsplash.com/photo-1541560052-5e137f229371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    link: '#',
  },
  {
    title: 'SecondHand',
    description: ['유모차의 적정한 중고시장 가격을 판단하기 위한', '브랜드 및 모델별 평균가격 제공앱'],
    roles: [
      '기획 및 플로우 구성',
      'Django 를 활용한 중고거래 플랫폼 전용 크롤러 구현',
      'React Native(expo) 활용 및 특정 가격내 상품 검색페이지 구현',
      '게시글 타이틀/내용 필터링 함수 및 브랜드/모델 매칭 구현',
      '날짜기반 간략한 그래프 구현',
    ],
    stacks: ['#Python3', '#Django', '#KoNLPy', '#MySQL', '#React Native'],
    images: secondhand,
    link: 'https://github.com/ekklesia11/secondhand-server-repo',
  },
  {
    title: 'Lunch-gogo',
    description: ['실시간 점심메뉴 투표게임 방식의', '메뉴선정 서비스 웹앱'],
    roles: [
      'Node.js 및 Socket.io 을 활용한 실시간 투표 API 구현',
      'MongoDB 시스템으로 각 투표 결과 데이터관리',
      'heroku 서버 자동 배포 및 netlify client 배포(github)',
    ],
    stacks: ['#JavaScript', '#Nodejs', '#Express', '#Socket.io', '#MongoDB', '#React'],
    images: lunchgogo,
    github: 'https://github.com/ekklesia11/secondhand-server-repo',
    link: 'https://flamboyant-ptolemy-79e553.netlify.app',
  },
];

const company = [
  {
    title: 'Maetel',
    description: 'Software engineer / Co-founder',
    roles: ['Focuses on SaaS software', 'building a knowledge management software'],
    images: futureplay,
    link: 'https://www.maetel.team/',
  },
  {
    title: 'FuturePlay',
    description: 'Backend engineer',
    roles: ['VC that mainly focuses on tech startups', 'building an accelerating startup management software'],
    images: futureplay,
    link: 'https://futureplay.co/en',
  },
  {
    title: 'Nudge Healthcare',
    description: 'Backend/Frontend engineer',
    roles: ['Pedometer rewarding app service', 'building meditation, group walk, running apps'],
    images: cashwalk,
    link: 'https://www.cashwalk.co/',
  },
  {
    title: 'Gatda Corp.',
    description: 'Backend/Frontend engineer',
    roles: ['Bulky waste disposal platform', 'building a website and CRM'],
    stacks: ['#React', '#Javascript', '#AWS S3', '#Route53', '#CloudFront'],
    images: gatda,
    link: 'https://bbegi.com/',
  },
];

const companyLogos = [futureplay, cashwalk, pumpkinmelon, talab, bbegi, secondhand, lunchgogo];

const ProjectBox = () => {
  const projectCard = (obj) => {
    return (
      <Card key={obj.title}>
        <div className='container'>
          <div
            className='background'
            style={{ backgroundImage: `url(${obj.images})` }}
          />
          <div className='detail'>
            <div className='description'>
              <div>{obj.description[0]}</div>
              <div>{obj.description[1]}</div>
            </div>
            <div className='position'>
              {obj.roles.map((role) => (
                <div key={role}>{role}</div>
              ))}
            </div>
            <div className='stack'>{obj.stacks.join(' ')}</div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Container>
      <div className='inner-container'>
        <Carousel
          className='logos'
          centerMode={true}
          infiniteLoop={true}
          autoPlay={true}
          emulateTouch={true}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          interval={4000}
          centerSlidePercentage={100}
        >
          {company.map((com, i) => (
            <div
              className='company'
              key={com.title}
            >
              <a
                href={com.link}
                target='_blank'
                rel='noopener noreferrer'
                className='title'
              >
                {com.title}
              </a>
              <div className='role'>
                <div>{com.description}</div>
              </div>
              <div className='description'>
                {com.roles.map((role) => (
                  <div key={role}>{role}</div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  color: #000;
  position: relative;
  text-align: center;
  padding: 72px 0 36px;

  .inner-container {
    margin: 0 auto;
  }

  .logos {
    .company {
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      text-decoration: none;
      color: black;

      &:visited {
        color: black;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .role {
      display: flex;
      justify-content: center;
    }

    .description {
      margin-top: 12px;
      font-weight: bold;
    }
  }

  /* @media only screen and (max-width: 959px) {
    .inner-container {
      .logos {
        flex-direction: column;
        gap: 48px;
      }
    }
  } */
`;

const Card = styled.div`
  width: 550px;
  height: 400px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  color: ${(props) => props.theme.color.textInverse};
  margin: 24px;
  box-shadow: 0 0 6px #dfe4ea;

  .container {
    .detail {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: ease-in-out 0.7s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 12px;

      .description {
        margin: 0 auto;
        font-size: 1.5rem;
      }

      .stack {
        color: ${(props) => props.theme.color.main};
      }

      .button {
        padding: 12px 0;
        border: 1px solid ${(props) => props.theme.color.main};
        width: 140px;
        margin: 8px auto;
        cursor: pointer;
        transition: all 0.3s;
        border-radius: 24px;
        color: ${(props) => props.theme.color.textInverse};
        text-decoration: none;

        &:hover {
          background-color: ${(props) => props.theme.color.main};
        }
      }

      div,
      a {
        opacity: 0;
        margin: 8px 0;
      }
    }

    .background {
      transition: ease-in-out 0.5s;
      background-repeat: no-repeat;
      background-size: 200px;
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
        background-color: #0a3d62;

        div,
        a {
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
