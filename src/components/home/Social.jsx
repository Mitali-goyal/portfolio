import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com/MitaliG05987539"
        className="home__social-icon"
        target="_blank"
      >
        <FiTwitter />
      </a>
      <a
        href="https://www.github.com/Mitali-goyal"
        className="home__social-icon"
        target="_blank"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mitaligoyal"
        className="home__social-icon"
        target="_blank"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
