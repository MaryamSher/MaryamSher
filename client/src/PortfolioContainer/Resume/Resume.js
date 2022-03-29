import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

const Resume = (props) => {
  const [selectedBulletIndex, setselectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setcarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span> {props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoScr: "education.svg" },
    { label: "Work History", logoScr: "work-history.svg" },
    { label: "Programming Skills", logoScr: "programming-skills.svg" },
    { label: "Projects", logoScr: "projects.svg" },
    { label: "Interests", logoScr: "interests.svg" },
  ];

  const programmingSkillsDetail = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 90 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      subHeading: "Technologies Used: React JS, Bootstrap",
      description:
        "A Portfolio website to showcase all my details and projects at one place.",
    },
    {
      title: "Restaurant Website",
      subHeading: "Technologies Used: React Js, Redux, Ant-design.",
      description:
        "Restaurant website for showcasing and selling online with payment system integration.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"High School: KIPS, Lahore"}
        subHeading={"Fsc: Pre-Engineering"}
        fromDate={"2008"}
        toDate={"2010"}
      />
      <ResumeHeading
        heading={"Univerity: LCWU, Lahore"}
        subHeading={"BS: Applied and Computational Mathematics"}
        fromDate={"2010"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"Univerity: IIUI, Islamabad"}
        subHeading={"MS: Science of Religion"}
        fromDate={"2018"}
        toDate={"2020"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Cyrus Tech Labs"}
        subHeading={"Front-End Developer Intern"}
        fromDate={"2015"}
        toDate={"2017"}
      />
      <div className="experience-description">
        <span className="experience-description-text">
          <ul>
            <li>
              Developed a Weather & online medicaid app with mutiple features
              and dashboard for managing users, login and payments etc.
            </li>
            <li>
              Integrated the web app with backend services to create new user
              onboarding application with dynamic form content.
            </li>
            <li>
              I stretch my mental capacity to develope UI as per the given
              designs.
            </li>
          </ul>
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetail.map((currElm, index) => {
        return (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{currElm.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: currElm.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        );
      })}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((currElm, index) => {
        return (
          <ResumeHeading
            key={index}
            heading={currElm.title}
            subHeading={currElm.subHeading}
            description={currElm.description}
          />
        );
      })}
    </div>,
  ];

  const handleCarousal = (index) => {
    let offSetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px)" },
    };
    setcarousalOffSetStyle(newCarousalOffset);
    setselectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => {
      return (
        <div
          onClick={() => handleCarousal(index)}
          className={
            index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
          }
          key={index}
        >
          <img
            className="bullet-logo"
            src={require(`../../assets/Resume/${bullet.logoScr}`)}
          />
          <span className="bullet-label">{bullet.label}</span>
        </div>
      );
      
    });
  };
  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };
  return (
    <div className="resume-container screen-container">
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
