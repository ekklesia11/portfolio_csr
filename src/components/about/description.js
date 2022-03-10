import React from 'react';
import styled from 'styled-components';

import server from '../../assets/server.svg';
import client from '../../assets/client.svg';

const Description = () => {
  const description = {
    kr: {
      greeting: 'Hello World !',
      describe:
        '개발자로써의 삶을 시작한 이후로 다양한 서비스와 프로젝트, 그리고 좋은 결과를 만들어내기 위해 재능있는 사람들과 함께 했습니다. 그렇다보니 늘 긍정적이고, 호기심 가득하며, 끊임없이 성장하고 발전하기를 힘쓰는 개발자 입니다. 지금도 넘치는 아이디어로 시도하고 도전하기를 즐기고 있습니다. 사실 낯을 많이 가리지만, 친해지면 재밌습니다.',
    },
    en: {
      greeting: "Hi, I'm Daniel. Glad to meet you.",
      describe:
        "Since beginning my journey as a developer, I've participated in various service projects, and collaborated with talented people to achieve great work perfomence. I'm naturally positive, reasonably curious, and perpetually working on improving my skills and problems at all time.",
    },
  };

  const skillSet = {
    kr: [
      {
        position: '프론트엔드',
        describe:
          '기획과 디자인을 시작으로 클라이언트의, 클라이언트에 의한, 클라이언트를 위한 프론트엔드를 개발합니다.',
        stack: ['JavaScript(ES6+)', 'React', 'Nextjs', 'React-Native', 'HTML', 'CSS'],
        img: client,
      },
      'line',
      {
        position: '백엔드',
        describe: 'DB 설계와 API, 그리고 안정적인 개발환경 구축, 서비스에 필요한 서버를 개발하고 운영합니다.',
        stack: ['Node.js', 'Express', 'Python', 'Django', 'AWS', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB'],
        img: server,
      },
    ],
    en: [
      {
        position: 'Frontend',
        describe: 'For client side coding',
        stack: ['JavaScript(ES6+)', 'React', 'React-Native', 'HTML', 'CSS'],
        img: client,
      },
      'line',
      {
        position: 'Backend',
        describe: 'For server side coding',
        stack: ['Node.js', 'Express', 'Python', 'Django', 'MySQL', 'MongoDB', 'AWS'],
        img: server,
      },
    ],
  };

  let language = 0;

  const descriptionView = (obj) => {
    return language ? (
      <div className='intro'>
        <h4>{obj.en.greeting}</h4>
        <span>{obj.en.describe}</span>
      </div>
    ) : (
      <div className='intro'>
        <h4>{obj.kr.greeting}</h4>
        <span>{obj.kr.describe}</span>
      </div>
    );
  };

  const stackView = (obj) => {
    return obj[language ? 'en' : 'kr'].map((data, i) =>
      data === 'line' ? (
        <div className='vertical-line' key={i} />
      ) : (
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
      )
    );
  };

  return (
    <Container>
      {descriptionView(description)}
      <div className='details'>{stackView(skillSet)}</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.color.main};
  background-image: linear-gradient(to top right, rgba(46, 213, 160, 1), ${(props) => props.theme.color.main});
  font-size: 2rem;
  font-weight: 100;
  height: 600px;
  padding-top: 84px;
  margin-bottom: 600px;

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
    margin: 96px auto 0;
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.color.text};
    width: 80%;
    max-width: 1200px;
    border-radius: 12px;
    box-shadow: 0 1px 6px #dfe4ea;
    line-height: 2rem;

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

      .description {
        width: 80%;
        margin: 24px auto 0;
      }

      .title {
        margin: 48px 0 12px;
        color: ${(props) => props.theme.color.main};
        font-weight: 400;
      }
    }

    .detail-0 {
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

  @media only screen and (max-width: 959px) {
    margin-bottom: 1200px;

    .details {
      flex-direction: column;
      box-shadow: none;
      width: 100%;
      align-items: center;
      margin: 120px auto;

      .vertical-line {
        display: none;
      }

      .detail-0 {
        border-radius: 12px 12px 0 0;
        border-right: 1px solid #dfe4ea;
        border-bottom: none;
      }

      .detail-2 {
        border-radius: 0 0 12px 12px;
        border-left: 1px solid #dfe4ea;
      }
    }
  }
`;

export default Description;
