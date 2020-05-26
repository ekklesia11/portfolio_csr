import React from "react";
import styled from "styled-components";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "react-scroll";

const Menu = ({ menu, toggleMenu }) => {
  return (
    <Container>
      <StyledLink
        to={menu.link}
        smooth={true}
        duration={500}
        onClick={toggleMenu}
      >
        {menu.name}
      </StyledLink>
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
