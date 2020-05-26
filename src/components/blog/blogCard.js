import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BlogCard = ({ blog }) => {
  return (
    <Container>
      <div>{blog.title}</div>
      <p>{blog.description}</p>
      <div>
        posted on {blog.created_month} {blog.created_date}, {blog.created_year}
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: #232129;
  width: 70vw;
  height: 30vw;
  margin: 20px auto;

  p {
    font-size: 4vw;
  }

  div:nth-child(3) {
    font-size: 3vw;
  }
`;

export default BlogCard;
