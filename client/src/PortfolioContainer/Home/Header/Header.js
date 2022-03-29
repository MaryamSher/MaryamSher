import React, { useState } from "react";
import "./Header.css";
// import { TOTAL_SCREENS } from "../../../utilities/CommonUtilities";
// import { faBars } from "@fontawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";


const Header = (props) => {
  const [selectedScreen, setselectedScreen] = useState(0);
  const [showHeaderOptions, setshowHeaderOptions] = useState(false);

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    screenComponent.scrollIntoView({ behavior: "smooth" });
    setselectedScreen(index);
    setshowHeaderOptions(false);
  };

  return (
    <>
      <div
        className="header-container"
        onClick={() => setshowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setshowHeaderOptions(!showHeaderOptions)}
          >
            {/* <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} /> */}
          </div>
          {/* <div className="header-logo">
            <span>
              MARYAM~<span className="sub-logo">the coder</span>
            </span>
          </div> */}
          {/* <div
            className={
              showHeaderOptions
                ? "header-options show-hamburger-options"
                : "header-options"
            }
          >
            {TOTAL_SCREENS.map((screen) => {
              return (
                <div
                  key={screen.screen_name}
                  className="header-options show-hamburger-options"
                >
                  <div className="selected-header-option">
                    {screen.screen_name}
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Header;
