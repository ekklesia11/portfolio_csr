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
        onMouseOver={() => hoverOnBlog("https://blog.chanhyun.org/")}
        onMouseOut={() => hoverOnBlog()}
      >
        <a
          href="https://blog.chanhyun.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {blog}
        </a>
      </div>
      <div
        onMouseOver={() => hoverOnSNS("https://instagram.com/d_paac/")}
        onMouseOut={() => hoverOnSNS()}
      >
        <span>
          <a
            href="https://instagram.com/d_paac/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {sns}
          </a>
        </span>
      </div>
    </>
  );
};

export default ContactSNS;
