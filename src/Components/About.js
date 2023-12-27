import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/33139-removebg-preview.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div id="mission" className="about-section-container">
      <div className="about-background-image-container">
        <img  src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img className={"photo"} src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
          Our mission
        </h1>
        <p className="primary-text">
            is to enhance your daily life by providing smart,
            user-friendly solutions that make a positive impact on your surroundings.
        </p>
        <p className="primary-text">
            We understand the importance of a clean and hygienic environment,
            and we are committed to delivering products that not only meet but exceed your expectations.
        </p>
        {/*<div className="about-buttons-container">*/}
        {/*  <button className="secondary-button">Learn More</button>*/}
        {/*  <button className="watch-video-button">*/}
        {/*    <BsFillPlayCircleFill /> Watch Video*/}
        {/*  </button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default About;
