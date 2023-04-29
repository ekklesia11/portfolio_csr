import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Github } from '../../assets/github-icon.svg';
import { ReactComponent as Blog } from '../../assets/blog-icon.svg';
import { ReactComponent as Insta } from '../../assets/insta-icon.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin-icon.svg';
import { ReactComponent as Email } from '../../assets/email-icon.svg';

const ContactBox = () => {
  const contact = [
    { name: 'github', link: 'https://github.com/ekklesia11', icon: Github },
    { name: 'linkedin', link: 'https://linkedin.com/in/danielpark11', icon: Linkedin },
    // { name: 'instagram', link: 'https://instagram.com/hometowndeveloper', icon: Insta },
    { name: 'blog', link: 'http://blog.hometowndeveloper.com', icon: Blog },
    { name: 'email', link: 'mailto:happyyquokka@gmail.com', icon: Email },
  ];

  return (
    <Container>
      <div className='word'>"It always seems impossible until it's done."</div>
      <div className='contact'>
        <div>Contact</div>
        <div className='mail'>happyyquokka@gmail.com</div>
      </div>
      <div className='info'>
        {contact.map((data) => (
          <a
            href={data.link}
            target='_blank'
            rel='noopener noreferrer'
            key={data.name}
          >
            <data.icon
              fill={data.name === 'github' || data.name === 'blog' ? '#f1f2f6' : 'none'}
              stroke='#f1f2f6'
              width={data.name === 'linkedin' ? '20px' : '24px'}
              height={data.name === 'linkedin' ? '20px' : '24px'}
            />
          </a>
        ))}
      </div>
      <div className='copyright'>© Daniel Park</div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 72px 0 36px;

  .word {
    font-size: 24px;
    font-style: italic;
  }

  .contact {
    font-size: 24px;
    margin: 72px 0 24px;

    .mail {
      margin-top: 12px;
      font-size: 16px;
    }
  }

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;

    a {
      width: 42px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: ease-out 0.2s;

      &:hover {
        transform: translateY(-8px);
      }
    }
  }

  .copyright {
    font-size: 12px;
    margin-top: 24px;
  }

  @media only screen and (max-width: 959px) {
    .word {
      font-size: 18px;
    }

    .contact {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 439px) {
    .word {
      font-size: 16px;
    }
  }
`;

export default ContactBox;
