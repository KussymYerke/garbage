import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/7903545-removebg.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home" className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          {/*<img src={BannerBackground} alt="" />*/}
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Future of Cleanliness!
          </h1>
          <p className="primary-text">
            Say goodbye to the hassle of messy hands and fumbling with lids. Our cutting-edge automatic trash can is designed to make your life easier and your environment cleaner.
          </p>
          <button className="secondary-button">
            <a href="#mission" className={"link"}><span className={"link-text"}>Learn more</span><FiArrowRight />{" "}</a>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
