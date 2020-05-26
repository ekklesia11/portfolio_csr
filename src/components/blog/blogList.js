import React from "react";

import BlogCard from "./blogCard";

const BlogList = ({ blogs }) => {
  return blogs.map(blog => <BlogCard blog={blog} key={blog.title} />);
};

export default BlogList;
