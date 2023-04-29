import React, { useState } from 'react';
import styled from 'styled-components';
import { faInfoCircle, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

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
    // {
    //   name: 'project',
    //   link: 'project',
    //   // location: 'rotate(260deg) translateY(-105px) rotate(100deg)',
    //   location: 'translateX(-120px)',
    //   timing: '0.1s',
    //   icon: faBriefcase,
    // },
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
        {menus.map((menu) => (
          <Link
            className='menu-item'
            key={menu.name}
            to={menu.link}
            smooth={true}
            duration={500}
            onClick={menuToggler}
          >
            {menu.name.toUpperCase()}
          </Link>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 12px;
  right: 24px;

  .menu {
    display: flex;
    gap: 36px;
    font-weight: bold;
    font-size: 18px;
  }

  .menu-item {
    cursor: pointer;
  }

  @media only screen and (max-width: 959px) {
    .menu-item {
      background-color: #000;
      padding: 4px 8px;
      border-radius: 8px;
    }

    color: #fff;
  }
`;

export default MenuTab;
