import React from "react";
import { Element } from "react-scroll";

import About from "./components/about/about";
import ProjectBox from "./components/project/projectBox";
import ContactBox from "./components/contact/contactBox";

const Main = () => {
  return (
    <div>
      <Element id="about">
        <About />
      </Element>
      <Element id="project">
        <ProjectBox />
      </Element>
      <Element id="contact">
        <ContactBox />
      </Element>
    </div>
  );
};

export default Main;
