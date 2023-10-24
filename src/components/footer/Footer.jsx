import React from "react";
import "./footer.css";
import CV from "../../assets/MitaliGoyalResume.pdf";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p>
          "Speak in such a way that others love to listen to you.
          <br />
          Listen in such a way that others love to speak to you!"
        </p>
        <h3 className="footer__title">-Mitali</h3>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a download href={CV} className="footer__link">
              Download CV
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://twitter.com/MitaliG05987539"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
          <a
            href="https://www.github.com/Mitali-goyal"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mitaligoyal"
            className="home__social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </div>
        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default Footer;
