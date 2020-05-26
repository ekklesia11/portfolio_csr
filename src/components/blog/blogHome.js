import React from "react";
import styled from "styled-components";

import BlogList from "./blogList";
import BlogNav from "./blogNav";

const BlogHome = () => {
  const blogs = [
    {
      title: "first blog!",
      created_year: "2020",
      created_month: "May",
      created_date: "12",
      description: "text here",
    },
    {
      title: "second blog!",
      created_year: "2020",
      created_month: "May",
      created_date: "12",
      description: "text here",
    },
    {
      title: "third blog!",
      created_year: "2020",
      created_month: "May",
      created_date: "12",
      description: "text here",
    },
  ];

  return (
    <Container>
      <BlogList blogs={blogs} />
      <BlogNav />
    </Container>
  );
};

const Container = styled.div`
  color: ${(props) => props.theme.color.text};
  font-size: 5vw;
  line-height: 1.5em;
  padding: 2vw;
`;

export default BlogHome;
