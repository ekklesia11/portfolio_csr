import React from 'react';
import styled from 'styled-components';

import new_me from '../../assets/new_my.jpeg';
import programming from '../../assets/programming.png';

import Description from './description';

const About = () => {
  const intro = {
    kr: {
      title: '백엔드 개발자',
      describe: '열정적이고 즐겁게, 단순하지만 확실하게 개발하는',
    },
    en: {
      title: 'Backend Developer',
      describe: 'I code simple and modern things, and I love what I do.',
    },
  };

  let language = 0;

  const introView = (obj) => {
    return language ? (
      <div className='main'>
        <span>{obj.en.describe}</span>
        <h3>{obj.en.title}</h3>
      </div>
    ) : (
      <div className='main'>
        <span>{obj.kr.describe}</span>
        <h3>{obj.kr.title}</h3>
      </div>
    );
  };

  return (
    <Container>
      {introView(intro)}
      <div className='img-ring'>
        <div className='cartoon-img' />
      </div>
      <div className='programming-img' />
      <div
        style={{
          fontSize: '0.5rem',
          color: '#2ed573',
          textDecoration: 'none',
        }}
      >
        일러스트:{' '}
        <a
          href='https://iconscout.com/illustrations/blog-writer'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            color: '#2ed573',
            textDecoration: 'none',
          }}
        >
          Blog writer Illustration
        </a>{' '}
        by{' '}
        <a
          href='https://iconscout.com/contributors/delesign'
          target='_blank'
          rel='noopener noreferrer'
          style={{
            color: '#2ed573',
            textDecoration: 'none',
          }}
        >
          Delesign Graphics
        </a>
      </div>
      <Description />
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  text-align: center;
  padding-top: 180px;

  .main {
    font-weight: 100;
    margin: 0;

    span {
      font-size: 1.2rem;
    }

    h3 {
      margin: 8px 0;
    }
  }

  .cartoon-img {
    background-image: url("${new_me}");
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
    margin: 54px auto 120px;

    &:hover {
      box-shadow: 0px 0px 4px ${(props) => props.theme.color.main};
    }
  }

  .programming-img {
    background-image: url("${programming}");
    width: 600px;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center left;
    margin: 0 auto;
  }

  @media only screen and (max-width: 959px) {
    .programming-img {
      width: 460px;
      height: 230px;
    }
  }
`;

export default About;
