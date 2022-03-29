import React, { useEffect } from "react";
import "./AboutMe.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

const AboutMe = (props) => {

  const scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="about-me-container screen-container">
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              Front-End web developer with knowledge of React, Redux, Node.js
              and UI/UX Design, capabale of building Dynamic applications with
              utmost efficiency to create user-friendly experience.
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div className="highlights">
                <ul>
                  <li>Interactive Front End as per the design</li>
                  <li>Experience with JavaScript, HTML5 and CSS</li>
                  <li>Design mobile-based features</li>

                  <li>
                    In-depth understanding of the entire web development process
                    (design, development and deployment)
                  </li>
                  <li>Excellent analytical and multitasking skills</li>
                  <li>Familiarity with browser testing and debugging</li>
                  <li>Equipped with knowledge of emerging technologies</li>
                </ul>
              </div>
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="Maryam-Resume.pdf" download="Maryam-Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
