import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = ({ menu, toggleMenu }) => {
  return (
    <Container>
      {menu.name === "BLOG" ? (
        <a
          href="https://blog.chanhyun.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          {menu.name}
        </a>
      ) : (
        <StyledLink
          to={menu.link}
          smooth={true}
          duration={500}
          onClick={toggleMenu}
        >
          {menu.name}
        </StyledLink>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #000;
  border: 2px solid ${(props) => props.theme.color.red};
  margin: 0 2vw 1vw 0;
  text-align: right;
  position: relative;
  right: 1vw;
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

export default Menu;
