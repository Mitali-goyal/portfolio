import React from "react";
import {TbSend } from "react-icons/tb";
import HiImg from "../../assets/hand.svg";

const Data = () => {
  return (
    <div className="home__data">
      <p>Hi, I'm</p>
      <h1 className="home__title">
        Mitali Goyal
        <img src = {HiImg} className = "home__hand"/>
       
      </h1>
      <h3 className="home__subtitle">Software Developer</h3>
      <p className="home__description">
        Front-end developer dedicated to develop creative solutions.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <TbSend className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
