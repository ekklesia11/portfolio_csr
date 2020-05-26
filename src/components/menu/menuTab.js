import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Menu from "./menu";

const MenuTab = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const menus = [
    { name: "ABOUT", link: "about" },
    { name: "PROJECTS", link: "project" },
    { name: "CONTACT", link: "contact" },
    { name: "BLOG", link: "blog" },
  ];

  const toggleMenu = () => setMenuToggle(!menuToggle);

  return (
    <Container>
      <div className="menu-btn">
        <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
      </div>
      {menuToggle
        ? menus.map((menu) => (
            <Menu key={menu.name} menu={menu} toggleMenu={toggleMenu} />
          ))
        : null}
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  position: fixed;
  top: 0;
  right: 0;
  text-align: right;
  z-index: 500;
  font-size: 3vw;

  .menu-btn {
    margin: 2vw 3vw 0;
    cursor: pointer;
  }

  img {
    width: 6vw;
  }
`;

export default MenuTab;
