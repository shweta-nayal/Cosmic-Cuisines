import React from "react";
import "./HeroSection.css";
import spaceVideo from "../assets/vid1.mp4";

const HeroSection = ({ onDiveIn }) => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={spaceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <h1 className="hero-title">Welcome, Explorer..!! </h1>
        <p className="hero-text">Get ready for a taste that's out of this world..!!</p>
        <button className="hero-button" onClick={onDiveIn}>
          Let's Dive In 
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
