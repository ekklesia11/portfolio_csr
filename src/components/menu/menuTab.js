import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfoCircle, faBriefcase, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const MenuTab = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menus = [
    {
      name: 'about',
      link: 'about',
      location: 'rotate(300deg) translateY(-100px) rotate(60deg)',
      timing: '0s',
      icon: faInfoCircle,
    },
    {
      name: 'project',
      link: 'project',
      location: 'rotate(260deg) translateY(-105px) rotate(100deg)',
      timing: '0.1s',
      icon: faBriefcase,
    },
    {
      name: 'contact',
      link: 'contact',
      location: 'rotate(220deg) translateY(-105px) rotate(140deg)',
      timing: '0.2s',
      icon: faEnvelope,
    },
    {
      name: 'resume',
      link: 'https://warp-iguanodon-bdc.notion.site/774d91a896cb416ab71533f6cdb2a423',
      location: 'rotate(180deg) translateY(-100px) rotate(180deg)',
      timing: '0.3s',
      icon: faAddressCard,
    },
  ];

  const menuToggler = () => setToggleMenu(!toggleMenu);

  return (
    <Container>
      <div className='menu'>
        <div className='menu-button' onClick={menuToggler}>
          <FontAwesomeIcon icon={faBars} color='#f1f2f6' size='lg' />
        </div>
        {menus.map((menu) =>
          menu.name === 'resume' ? (
            <a
              className='menu-item'
              key={menu.name}
              href={menu.link}
              target='_blank'
              rel='noopener noreferrer'
              style={
                toggleMenu
                  ? {
                      transform: menu.location,
                      transitionDelay: menu.timing,
                    }
                  : {
                      transform: 'translate(0px, 0px)',
                    }
              }
              onClick={menuToggler}
            >
              <FontAwesomeIcon icon={menu.icon} color='#f1f2f6' size='lg' />
            </a>
          ) : (
            <Link
              className='menu-item'
              key={menu.name}
              to={menu.link}
              smooth={true}
              duration={500}
              style={
                toggleMenu
                  ? {
                      transform: menu.location,
                      transitionDelay: menu.timing,
                    }
                  : {
                      transform: 'translate(0px, 0px)',
                    }
              }
              onClick={menuToggler}
            >
              <FontAwesomeIcon icon={menu.icon} color='#f1f2f6' size='lg' />
            </Link>
          )
        )}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .menu {
    position: fixed;
    top: 72px;
    right: 96px;
  }

  .menu-button {
    z-index: 1;
    width: 48px;
    height: 48px;
    position: absolute;
    border-radius: 50%;
    background: ${(props) => props.theme.color.main};
    overflow: hidden;
    text-decoration: none;
    line-height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu-item {
    width: 48px;
    height: 48px;
    position: absolute;
    line-height: 5px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.color.main};
    transition: transform 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
      box-shadow: 0 0 6px ${(props) => props.theme.color.main};
    }
  }
`;

export default MenuTab;
