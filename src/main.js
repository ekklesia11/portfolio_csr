import React from "react";
import { Switch, Route } from "react-router-dom";
import { Element } from "react-scroll";

import About from "./components/about/about";
import ProjectBox from "./components/project/projectBox";
import ContactBox from "./components/contact/contactBox";
import BlogHome from "./components/blog/blogHome";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Element id="about">
          <About />
        </Element>
        <Element id="project">
          <ProjectBox />
        </Element>
        <Element id="contact">
          <ContactBox />
        </Element>
      </Route>
      <Route path="/blog">
        <BlogHome />
      </Route>
    </Switch>
  );
};

export default Main;
