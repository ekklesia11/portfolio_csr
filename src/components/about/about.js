import React from 'react';
import styled from 'styled-components';

import new_me from '../../assets/new_my.jpeg';
import programming from '../../assets/programming.png';

import Description from './description';
import SkillSet from './skillSet';

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
        <span className='desc'>{obj.en.describe}</span>
        <h3>{obj.en.title}</h3>
      </div>
    ) : (
      <div className='main'>
        <span className='desc'>{obj.kr.describe}</span>
        <h3>{obj.kr.title}</h3>
      </div>
    );
  };

  return (
    <Container>
      <div className='programming-img' />
      {introView(intro)}
      <div className='img-ring'>
        <div className='cartoon-img' />
      </div>
      <Description />
      <SkillSet />
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 2rem;
  text-align: center;

  .main {
    font-weight: 100;

    .desc {
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
    border: 2px solid ${(props) => props.theme.color.main};
    width: 230px;
    height: 230px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 54px auto 120px;

    &:hover {
      box-shadow: 0px 0px 8px ${(props) => props.theme.color.main};
    }
  }

  .programming-img {
    background-image: url("${programming}");
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 auto;
  }

  @media only screen and (max-width: 959px) {
    .main {
      .desc {
        font-size: 1rem;
      }
    }
  }
`;

export default About;
