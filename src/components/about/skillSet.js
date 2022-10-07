import React from 'react';
import styled from 'styled-components';
import server from '../../assets/server.svg';
import client from '../../assets/client.svg';

const SkillSet = () => {
  const skillSet = {
    kr: [
      {
        position: '백엔드',
        describe: 'DB 설계와 API, 그리고 안정적인 개발환경 구축, 서비스에 필요한 서버를 개발하고 운영합니다.',
        stack: ['Node.js', 'Express', 'Python', 'Django', 'AWS', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Postgres', 'Docker'],
        img: server,
      },
      {
        position: '프론트엔드',
        describe:
          '기획과 디자인을 시작으로 클라이언트의, 클라이언트에 의한, 클라이언트를 위한 프론트엔드를 개발합니다.',
        stack: ['JavaScript(ES6+)', 'React', 'Nextjs', 'React-Native', 'HTML', 'CSS'],
        img: client,
      },
    ],
    en: [
      {
        position: 'Backend',
        describe: 'For server side coding',
        stack: ['Node.js', 'Express', 'Python', 'Django', 'MySQL', 'MongoDB', 'AWS'],
        img: server,
      },
      {
        position: 'Frontend',
        describe: 'For client side coding',
        stack: ['JavaScript(ES6+)', 'React', 'React-Native', 'HTML', 'CSS'],
        img: client,
      },
    ],
  };

  let language = 0;

  const stackView = (obj) => {
    return obj[language ? 'en' : 'kr'].map((data, i) => (
      <div className={`detail detail-${i}`} key={i}>
        <img src={data.img} alt='' className='client' />
        <div className='detail-text'>
          <strong>{data.position}</strong>
          <div className='description'>{data.describe}</div>
          <div className='title'>{language ? 'stacks' : '기술스택'}:</div>
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
  background-color: ${(props) => props.theme.color.white};
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
    }

    .detail-text {
      font-size: 1.2rem;
      font-weight: 100;
      margin-top: 12px;

      .description {
        width: 80%;
        margin: 24px auto 0;
      }

      .title {
        margin: 48px 0 12px;
        font-weight: 400;
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
