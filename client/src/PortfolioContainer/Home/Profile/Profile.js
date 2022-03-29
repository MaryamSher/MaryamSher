import React from "react";
import Typical from "react-typical";
import "./Profile.css";

const Profile = () => {
  const scrollToHireMe = () => {
    let contactMeScreen = document.getElementById("ContactMe");
    contactMeScreen.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="logo">
            <span>
              MARYAM~<span className="sub-logo">the coder</span>
            </span>
          </div>
          <div className="social">
            <div className="social-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/maryam-saleem-228ba9189/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://twitter.com/MaryamSher_Dev">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Maryam</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Self-taught Dev 🎓 ",
                    1000,
                    "Front-end Developer </> ",
                    1000,
                    "React Developer 💻 ",
                    1000,
                    ,
                    "UI/UX Designer 🔴 ",
                    1000,
                    "USA Based 🇺🇸 ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passionate front-end Web Developer, Cabable of building Web
                Applications using React/Redux.
              </span>
            </span>
          </div>
          <div className="profile-options">
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
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
