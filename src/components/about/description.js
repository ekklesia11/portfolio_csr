import React from 'react';
import styled from 'styled-components';
import meWorking from '../../assets/me_working.jpeg';

const Description = () => {
  const description = {
    kr: {
      greeting: 'Hello World',
      describe:
        '8기통의 nodejs V8 엔진을 장착한 전설의 고래 docker 는 AWS 구름 위를 마음껏 날 수 있지만, 경쟁이 심한 개발 트랙에서 고속으로 달리려면 성능좋은 API 를 지속적으로 공급해주어야 합니다. 일단 고래 뒤쪽으로 가서 살펴보아야 하는데... 제가 한번 봐 드릴까요?',
      // '개발자로써의 삶을 시작한 이후로 다양한 서비스와 프로젝트, 그리고 좋은 결과를 만들어내기 위해 재능있는 사람들과 함께 했습니다. 그렇다보니 늘 긍정적이고, 호기심 가득하며, 끊임없이 성장하고 발전하기를 힘쓰는 개발자 입니다. 지금도 넘치는 아이디어로 시도하고 도전하기를 즐기고 있습니다. 낯을 많이 가리지만 잘 웃고, 친해지면 재밌습니다.',
    },
    en: {
      greeting: 'Hello World',
      describe:
        // "Since beginning my journey as a developer, I've participated in various service projects, and collaborated with talented people to achieve great work perfomence. I'm naturally positive, reasonably curious, and perpetually working on improving my skills and problems at all time.",
        'Collaborated with talented people, strived to improve my skills at all times',
    },
  };

  return (
    <Container>
      <div className='intro'>
        <div className='intro-left'>
          <div className='photo'>
            <div className='square' />
            <div className='rectangle' />
          </div>
        </div>
        <div className='intro-right'>
          <div className='desc'>
            Every engineer creates or modifies a <b>system</b> that helps any kind of business, and synchronizes those
            systems together perfectly. Programming is not the only part I care about, but what, when and how the system
            <b> handles problems and obstacles</b> that we are facing.
            <br />
            <br />
            So several years of my work was on the <b>architecture of the infrastructure, database and APIs</b>, and
            also <b>client webpages and in-house systems</b>, collaborating with talented people and striving to improve
            my skills at all times.
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  padding: 128px 0;

  .intro {
    margin: 0 auto;
    color: #000;
    display: flex;

    .intro-left {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .photo {
        position: relative;
        padding-right: 36px;
        background-image: url('${meWorking}');
        background-color: #fff;
        background-size: 600px 400px;
        background-repeat: no-repeat;
        background-position: center;
        width: 600px;
        height: 400px;

        .rectangle {
          position: absolute;
          top: 0;
          left: 0;
          width: 48px;
          height: 100%;
          background-color: rgba(0, 0, 0, 1);
        }
      }
    }

    .intro-right {
      flex: 1;
      display: flex;
      align-items: center;

      .desc {
        font-size: 18px;
        line-height: 36px;
        text-align: left;
        padding-left: 36px;
        width: 600px;
      }
    }
  }

  @media only screen and (max-width: 1279px) {
    .intro {
      .intro-left {
        .photo {
          background-size: 400px 266px;
          width: 400px;
          height: 266px;

          .rectangle {
            width: 36px;
          }
        }
      }

      .intro-right {
        .desc {
          width: 400px;
          line-height: 24px;
        }
      }
    }
  }

  @media only screen and (max-width: 959px) {
    padding: 64px 0;

    .intro {
      flex-direction: column;

      .intro-left {
        justify-content: center;

        .photo {
          background-size: 300px 200px;
          width: 300px;
          height: 200px;
          padding: 0 24px;

          .rectangle {
            width: 24px;
          }
        }
      }

      .intro-right {
        justify-content: center;

        .desc {
          width: 300px;
          padding: 24px 24px 0;
        }
      }
    }
  }

  @media only screen and (max-width: 439px) {
    .intro {
      .intro-left {
        .photo {
          background-size: 300px 200px;
          width: 300px;
          height: 200px;
          padding: 0;

          .rectangle {
            width: 24px;
          }
        }
      }

      .intro-right {
        justify-content: center;

        .desc {
          width: 300px;
          padding: 24px 0;
        }
      }
    }
  }
`;

export default Description;
