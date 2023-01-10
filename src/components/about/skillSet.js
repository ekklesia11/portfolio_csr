import React from 'react';
import styled from 'styled-components';
import server from '../../assets/server.svg';
import client from '../../assets/client.svg';
import blueWhale from '../../assets/blue-whale-bg.png';

const SkillSet = () => {
  const skillSet = {
    kr: [
      {
        position: '백엔드 정비',
        describe: 'DB 설계와 API, 그리고 안정적인 개발환경 구축, 서비스에 필요한 서버 개발 및 운영',
        stack: [
          'Node.js',
          'Express',
          'AWS',
          'AWS CDK',
          'Docker',
          'MySQL',
          'MongoDB',
          'Redis',
          'DynamoDB',
          'Postgres',
          'Python',
          'Django',
        ],
        img: server,
      },
      {
        position: '프론트엔드 정비',
        describe: '기획과 디자인을 시작으로 클라이언트의, 클라이언트에 의한, 클라이언트를 위한 페이지 개발',
        stack: ['JavaScript(ES6+)', 'React', 'Nextjs', 'React-Native', 'HTML', 'CSS', 'Hasura'],
        img: client,
      },
    ],
    en: [
      {
        position: 'Backend',
        describe: 'Architect of database, infrastructure and APIs for server',
        stack: [
          'Node.js',
          'Express',
          'AWS',
          'Docker',
          'MySQL',
          'MongoDB',
          'Redis',
          'DynamoDB',
          'Postgres',
          'Python',
          'Django',
        ],
        img: server,
      },
      {
        position: 'Frontend',
        describe: 'Developer of the client, by the client, and for the client',
        stack: ['JavaScript', 'React', 'Nextjs', 'React-Native', 'HTML', 'CSS', 'Hasura'],
        img: client,
      },
    ],
  };

  let language = 1;

  const stackView = (obj) => {
    return obj[language ? 'en' : 'kr'].map((data, i) => (
      <div className={`detail detail-${i}`} key={i}>
        <img src={data.img} alt='' className='client' />
        <div className='detail-text'>
          <strong>{data.position}</strong>
          <div className='description'>{data.describe}</div>
          <div>
            {data.stack.map((stack) => (
              <div key={stack}>{stack}</div>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Container>
      <div className='details'>{stackView(skillSet)}</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.background};
  background-image: url('${blueWhale}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  font-size: 2rem;
  font-weight: 100;
  padding-bottom: 84px;

  .details {
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    color: ${(props) => props.theme.color.text};
    width: 80%;
    line-height: 2rem;

    .detail {
      background-color: ${(props) => props.theme.color.background};
      padding: 36px 24px;
      position: relative;
      width: 40%;
      border-radius: 12px;
      opacity: 0.6;

      &:hover {
        cursor: cell;
      }
    }

    .detail-0 {
      transition: ease-out 0.5s;

      &:hover {
        opacity: 0.9;
      }
    }

    .detail-1 {
      transition: ease-out 0.5s;

      &:hover {
        opacity: 0.9;
      }
    }

    .detail-text {
      font-size: 1.2rem;
      font-weight: 100;
      margin-top: 12px;

      .description {
        width: 80%;
        margin: 24px auto;
      }
    }

    .server,
    .client {
      width: 60px;
    }
  }

  @media only screen and (max-width: 959px) {
    .details {
      flex-direction: column;
      width: 100%;
      align-items: center;

      .detail {
        width: 70%;
      }

      .detail-0 {
        margin-bottom: 24px;
      }
    }
  }
`;

export default SkillSet;
