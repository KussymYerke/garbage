import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";
import Sensor from "../Assets/sensor.png";
import Touchless from "../Assets/gear.png";
import Energy from "../Assets/energy.png";

const Work = () => {
  const workInfoData = [
    {
      image: Sensor,
      title: "Motion Sensor Technology",
      text: "The moment you approach, the sensor detects your presence, triggering the seamless opening of the lid",
    },
    {
      image: Touchless,
      title: "Touchless Lid Opening",
      text: "The lid smoothly and quietly opens, allowing you to dispose of your trash without any physical contact",
    },
    {
      image: Energy,
      title: "Energy-Efficient Operation",
      text: "it is designed with energy efficiency in mind, operates seamlessly while minimizing its ecological footprint",
    },
  ];
  return (
    <div id="proccess" className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Process</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Our passion for innovation has led us to create a revolutionary product
          that seamlessly blends technology, convenience, and cleanliness:
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} width={"180px"} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
