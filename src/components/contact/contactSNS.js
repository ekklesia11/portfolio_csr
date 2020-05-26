import React, { useState } from "react";

const ContactSNS = () => {
  const [blog, setBlog] = useState("블로그");
  const [sns, setSns] = useState("인스타그램");

  const hoverOnBlog = (value = "블로그") => {
    setBlog(value);
  };

  const hoverOnSNS = (value = "인스타그램") => {
    setSns(value);
  };

  return (
    <>
      <div
        onMouseOver={() => hoverOnBlog("https://youwaytogo.tistory.com/")}
        onMouseOut={() => hoverOnBlog()}
      >
        <a href="#" target="_blank">
          {blog}
        </a>
      </div>
      <div
        onMouseOver={() => hoverOnSNS("https://instagram.com/d_paac/")}
        onMouseOut={() => hoverOnSNS()}
      >
        <span>
          <a href="https://instagram.com/d_paac/" target="_blank">
            {sns}
          </a>
        </span>
      </div>
    </>
  );
};

export default ContactSNS;
