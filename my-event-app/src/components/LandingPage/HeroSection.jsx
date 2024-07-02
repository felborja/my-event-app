import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import heroImage from "../../assets/hero-image.jpg";

function HeroSection() {
  const navigate = useNavigate();

  const handleStartNowClick = () => {
    navigate("/signup");
  };

  return (
    <div
      className="hero-section flex items-center justify-between p-8 mb-16 mt-16"
      style={{ padding: "0 4.8rem" }}
    >
      <div className="left-column max-w-lg">
        <h1 className="text-4xl font-bold mb-4">
          Organize Your Events Effortlessly
        </h1>
        <p className="text-gray-700 mb-4">
          Manage all your events in one place with EventMaster <br /> Plan,
          organize, and execute events seamlessly.
        </p>
        <Button text="Start now" onClick={handleStartNowClick} />
      </div>
      <div className="right-column w-[800px]">
        <img
          src={heroImage}
          alt="Event Management"
          className="rounded shadow-lg"
        />
      </div>
    </div>
  );
}

export default HeroSection;
