import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfoCircle, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { theme } from '../../common/theme';

const MenuTab = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menus = [
    {
      name: 'about',
      link: 'about',
      // location: 'rotate(300deg) translateY(-100px) rotate(60deg)',
      location: 'translateX(-180px)',
      timing: '0s',
      icon: faInfoCircle,
    },
    {
      name: 'project',
      link: 'project',
      // location: 'rotate(260deg) translateY(-105px) rotate(100deg)',
      location: 'translateX(-120px)',
      timing: '0.1s',
      icon: faBriefcase,
    },
    {
      name: 'contact',
      link: 'contact',
      // location: 'rotate(220deg) translateY(-105px) rotate(140deg)',
      location: 'translateX(-60px)',
      timing: '0.2s',
      icon: faEnvelope,
    },
  ];

  const menuToggler = () => setToggleMenu(!toggleMenu);

  return (
    <Container>
      <div className='menu'>
        <div className='menu-button' onClick={menuToggler}>
          <FontAwesomeIcon icon={faBars} color={theme.color.background} size='lg' />
        </div>
        {menus.map((menu) => (
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
            <FontAwesomeIcon icon={menu.icon} color={theme.color.background} size='lg' />
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .menu {
    position: fixed;
    top: 36px;
    right: 80px;
  }

  .menu-button {
    z-index: 1;
    width: 48px;
    height: 48px;
    position: absolute;
    border-radius: 50%;
    background: ${(props) => props.theme.color.white};
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
    background-color: ${(props) => props.theme.color.white};
    transition: transform 0.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
      opacity: 1;
      box-shadow: 0 0 6px ${(props) => props.theme.color.main};
    }
  }
`;

export default MenuTab;
