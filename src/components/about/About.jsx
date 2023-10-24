import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpeg";
import CV from "../../assets/MitaliGoyalResume.pdf";
import Info from "./Info";
import { HiOutlineDocumentText } from "react-icons/hi";

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A short introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="about" className="about__img" />
        <div className="about__data">
          <div className="about__description">
            <p className="home-about-body" >
              I got into front-end development a few years ago because it was a
              form of programming that let me visualize my progress and results
              in a quicker and more literal way than other types of programming.
              While I initially tried it out as a test run to see if I'd be into
              programming in general, I fell in love with the process and I've
              been doing it ever since. 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, JavaScript and Python.</b>
              </i>
              <br />
              <br />
              My fields of interest are building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Products.</b>
              </i>
              <br />
              <br />
              Currently, I am expanding my horizons and developing products with{" "}
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple">
                  &nbsp;Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like&nbsp;
              <b className="purple">Next.js</b>
            </p>
          </div>
          <a download="" href={CV} className="button button--flex" >
            Download CV
            <HiOutlineDocumentText className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
