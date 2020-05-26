import React, { useState } from "react";

const ContactDirect = () => {
  const [email, setEmail] = useState("이메일");
  const [phone, setPhone] = useState("연락처");

  const hoverOnEmail = (value = "이메일") => {
    setEmail(value);
  };

  const hoverOnPhone = (value = "연락처") => {
    setPhone(value);
  };

  return (
    <>
      <div
        onMouseOver={() => hoverOnEmail("happyyquokka@gmail.com")}
        onMouseOut={() => hoverOnEmail()}
      >
        <a
          href="mailto:happyyquokka@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {email}
        </a>
      </div>
      <div
        onMouseOver={() => hoverOnPhone("+82 (0)10 2614 0384")}
        onMouseOut={() => hoverOnPhone()}
      >
        <a href="tel:01026140384">{phone}</a>
      </div>
    </>
  );
};

export default ContactDirect;
