import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {/* Padding container */}
      <div className="sb__footer__section__padding">
        {/* Row 1 */}
        <div className="sb__footer-links">
          {/* R1 - Col 1: Logo */}
          <div className="sb__footer-links_div" id="footer-logo">
            <a href="index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-1.88 0.72 64 64"
                width="46"
                height="46"
              >
                <path
                  d="M-.186 45.896V64.72l60.612-24.47V25.2L-.186.72V18.8l35.388 13.93z"
                  fill="#932DF6"
                />
              </svg>
            </a>
          </div>
          {/* R1 - Col 2: About */}
          <div className="sb__footer-links_div">
            <a href="index.html">ABOUT US</a>
          </div>
          {/* R1 - Col 3: Contact Us */}
          <div className="sb__footer-links_div">
            <a href="index.html">CONTACT US</a>
          </div>
          {/* R1 - Col 4:  Careers */}
          <div className="sb__footer-links_div">
            <a href="index.html">CAREERS</a>
          </div>
          {/* R1 - Col 5: Locations */}
          <div className="sb__footer-links_div">
            <a href="index.html">LOCATIONS</a>
          </div>
          {/* R1 - Col 6: Social Media */}
          <div className="sb__footer-links_div" id="footer-social-media">
            <div className="social-media">
              <a href="index.html">
                <i class="fa-brands fa-linkedin fa-xl"></i>
              </a>
              <a href="index.html">
                <i class="fa-brands fa-twitter fa-xl"></i>
              </a>
              <a href="index.html">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="index.html">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="index.html">
                <i class="fa-brands fa-youtube fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* Row 2 (sb__footer-below) */}
        <div className="sb__footer-below">
          <div className="sb__footer-below-links">
            <a href="index.html">
              <p>Privacy Statement</p>
            </a>
            <a href="index.html">
              <p>Terms & Conditions</p>
            </a>
            <a href="index.html">
              <p>Cookie Policy/Settings</p>
            </a>
            <a href="index.html">
              <p>Accessibility Statement</p>
            </a>
            <a href="index.html">
              <p>Sitemap</p>
            </a>
            <a href="index.html">
              <p>Do Not Sell/Share My Personal Information</p>
            </a>
          </div>
          <div className="sb__footer-copyright">
            <p>@{new Date().getFullYear()} Accenture. All Rights Reserved.</p>
          </div>
        </div>

        {/* End content */}
      </div>
    </div>
  );
};

export default Footer;
