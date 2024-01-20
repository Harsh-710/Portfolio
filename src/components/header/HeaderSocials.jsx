import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/harsh-chhachhia-78095722a/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/harsh-710" rel="noreferrer" target="_blank">
        <BsGithub />
      </a>
      <a href="https://leetcode.com/harsh_7_10" target="_blank">
        <SiLeetcode />
      </a>
    </div>
  );
};

export default HeaderSocials;
