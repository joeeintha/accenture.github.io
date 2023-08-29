import React from "react";
import "./Anchorlinks.css";

const Footer = () => {
  return (
    <div className="anchor-links">
      <div className="anchor-links__padding">
        <ul className="anchor-links__option-list">
          <li className="anchor-links__option-item">
            <a href="index.html">Explore Our Latest Insights</a>
          </li>
          <li className="anchor-links__option-item">
            <a href="index.html">Why Does 5G Matter?</a>
          </li>
          <li className="anchor-links__option-item">
            <a href="index.html">How is 5G Different From 4G?</a>
          </li>
          <li className="anchor-links__option-item">
            <a href="index.html">What Can 5G Offer?</a>
          </li>
          <li className="anchor-links__option-item">
            <a href="index.html">How Can Business Prepare For 5G?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
