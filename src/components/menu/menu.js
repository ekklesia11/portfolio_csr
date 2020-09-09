import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = ({ menu }) => {
  return (
    <Container>
      {menu.name === "블로그" ? (
        <a
          href="https://blog.chanhyun.org/"
          target="_blank"
          rel="noopener noreferrer"
          className={menu.link}
        >
          {menu.name}
        </a>
      ) : (
        <StyledLink
          to={menu.link}
          smooth={true}
          duration={500}
          className={menu.link}
        >
          {menu.name}
        </StyledLink>
      )}
    </Container>
  );
};

const Container = styled.div`
  transition: transform 0.5s;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.main};
    font-size: 0.9rem;
  }

  .about,
  .project,
  .contact,
  .blog {
    border: 2px solid ${(props) => props.theme.color.main};
    border-radius: 50%;
    width: 56px;
    height: 56px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about {
    top: -24px;
    left: -124px;
  }

  .project {
    top: 42px;
    left: -100px;
  }

  .contact {
    top: 92px;
    left: -52px;
  }

  .blog {
    top: 106px;
    left: 16px;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

export default Menu;
