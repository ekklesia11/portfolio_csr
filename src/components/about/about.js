import React from 'react';
import styled from 'styled-components';

import me from '../../assets/clear_me.png';

import Description from './description';

const About = () => {
  return (
    <Container>
      <div className='top-intro'>
        <div className='brief'>
          <h3>Daniel Park</h3>
          <div className='desc'>
            Seoul based Software Engineer
            <br />
            and love what I do
          </div>
          <div className='skill'>
            <div>main language:</div>
            <div>Nodejs</div>
            {/* <div>Python</div> */}
          </div>
        </div>
        <div className='profile' />
      </div>
      <Description />
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  text-align: center;

  .top-intro {
    display: flex;
    height: 70vh;

    .brief {
      flex: 1;
      background-color: #000;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      text-align: right;

      h3 {
        margin: 0 36px;
        padding: 0;
        font-size: 72px;
        line-height: 64px;
      }

      .desc {
        margin-top: 36px;
        margin-right: 36px;
        font-size: 24px;
        border-left: 4px solid #fff;
        padding-left: 24px;
      }

      .skill {
        display: flex;
        gap: 12px;
        font-style: italic;
        margin-top: 72px;
        margin-right: 36px;
        font-size: 18px;
      }
    }

    .profile {
      flex: 1;
      background-color: #fff;
      background-image: url('${me}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: bottom;
    }
  }

  @media only screen and (max-width: 959px) {
    .top-intro {
      flex-direction: column;
      height: 100vh;
    }

    .profile {
      background-size: 100%;
    }
  }

  @media only screen and (max-width: 439px) {
    .top-intro {
      flex-direction: column;
      height: 100vh;

      .brief {
        h3 {
          font-size: 48px;
          line-height: 36px;
          margin-right: 18px;
        }

        .desc {
          margin-top: 36px;
          margin-right: 18px;
          font-size: 18px;
          border-left: 3px solid #fff;
          padding-left: 12px;
        }

        .skill {
          font-size: 16px;
          margin-right: 18px;
        }
      }
    }

    .profile {
      background-size: 100%;
    }
  }
`;

export default About;
