import React from "react";
import Button from "../common/Button";
import heroImage from "../../assets/hero-image.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="left-column">
        <h1>Organize Your Events Effortlessly</h1>
        <p>
          Manage all your events in one place with EventMaster. Plan, organize,
          and execute events seamlessly.
        </p>
        <Button text="Start now" onClick={() => alert("Button clicked")} />
      </div>
      <div className="right-column">
        <img src={heroImage} alt="Event Management" />
      </div>
    </div>
  );
}

export default HeroSection;
