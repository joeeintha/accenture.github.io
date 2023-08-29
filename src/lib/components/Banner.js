import React from "react";
import "./Banner.css";
import bannerVideo5g from "../assets/accenture-5g-banner-1280x480.mp4";

const Banner = () => {
  return (
    <div className="banner">
      <video autoPlay loop muted src={bannerVideo5g} />
      <div className="banner__padding">
        <div className="banner_content">
          <h1>The future is 5G</h1>
          <p>
            Explore the technology transforming how we work, play and learn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
