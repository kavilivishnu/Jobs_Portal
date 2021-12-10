import React, { useRef, useEffect, useState } from "react";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleFrontend,
  toggleFullStack,
  toggleTechnology,
  toggleBackend,
  toggleWebDev,
  toggleSoftDev,
  toggleCLanguage,
  toggleCPlusPlus,
  toggleCSharp,
  toggleCSs,
  toggleHTml,
  toggleJavaScript,
  toggleReactJS,
  toggleNodetJS,
  setFrontEndToFalse,
  showSkills,
} from "../Actions";

function Filters() {
  const inputRef = useRef();

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [mainDisplay, setMainDisplay] = useState(false);
  const [displayFrontEnd, setDisplayFrontEnd] = useState(false);
  const [showSkillBar, setShowSkillBar] = useState(false);
  const [showJobDescriptionBar, setShowJobDescriptionBar] = useState(false);

  // const [frontEndView, setFrontEndView] = useState(false);

  const skills = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React JS", label: "React JS" },
    { value: "Node.JS", label: "Node.JS" },
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Frontend Development", label: "Frontend Development" },
    { value: "Backend Development", label: "Backend Development" },
    { value: "Software Development", label: "Software Development" },
    { value: "Web Development", label: "Web Development" },
  ];

  useEffect(() => {
    if (showSkillBar) {
      inputRef.current.focus();
    } else {
      return null;
    }
  }, [showSkillBar]);

  const handleClick = () => {
    let frontEndDevelopment;
    console.log(inputRef.current.props.value);
    if (inputRef.current.props.value === null) {
      alert("Please enter a SKILL to proceed.");
    } else {
      dispatch(showSkills(inputRef.current.props.value));
      frontEndDevelopment = inputRef.current.props.value.some(
        (item) => item.value === "Frontend Development"
      );
      if (frontEndDevelopment) {
        setMainDisplay(true);
        setDisplayFrontEnd(true);
        dispatch(toggleFrontend());
      } else if (inputRef.current.props.value.length === 0) {
        setMainDisplay(false);
        dispatch(setFrontEndToFalse());
      } else {
        setDisplayFrontEnd(false);
        dispatch(setFrontEndToFalse());
      }
    }
  };

  const handleToggle = (val) => {
    switch (val) {
      case "front":
        dispatch(toggleFrontend());
        break;
      case "full":
        dispatch(toggleFullStack());
        break;
      case "tech":
        dispatch(toggleTechnology());
        break;
      case "back":
        dispatch(toggleBackend());
        break;
      case "cLanguage":
        dispatch(toggleCLanguage());
        break;
      case "cPlusPlus":
        dispatch(toggleCPlusPlus());
        break;
      case "cSharp":
        dispatch(toggleCSharp());
        break;
      case "cSS":
        dispatch(toggleCSs());
        break;
      case "hTML":
        dispatch(toggleHTml());
        break;
      case "javaScript":
        dispatch(toggleJavaScript());
        break;
      case "nodeJs":
        dispatch(toggleNodetJS());
        break;
      case "reactJS":
        dispatch(toggleReactJS());
        break;
      case "soft":
        dispatch(toggleSoftDev());
        break;
      case "web":
        dispatch(toggleWebDev());
        break;

      default:
        break;
    }
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: 250,
    }),
  };

  return (
    // <div className="leftMostSection">
    <div style={{ marginTop: "5%" }}>
      <div style={{ marginLeft: "-15%" }}>
        {/* <div> */}
        <div style={{ marginLeft: "30%" }}>
          {/* <div> */}
          <div>
            <h4 style={{ color: "rgb(167, 166, 166)" }}>Skills </h4>
            <div className="skillToggle">
              <button
                className="toggleButton"
                onClick={() => setShowSkillBar(!showSkillBar)}
              >
                {showSkillBar ? (
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    -
                  </span>
                ) : (
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    +
                  </span>
                )}
              </button>{" "}
            </div>
            <br />
          </div>
          {/* <p>{globalState.front}</p> */}
          {showSkillBar ? (
            <div>
              <Select
                styles={customStyles}
                ref={inputRef}
                isMulti
                options={skills}
              />
              <br />
              <button onClick={(e) => handleClick(e)}>Show Results</button>
            </div>
          ) : (
            <div style={{ opacity: "0" }}>
              <Select
                styles={customStyles}
                ref={inputRef}
                isMulti
                options={skills}
              />
              <br />
              <button onClick={(e) => handleClick(e)}>Show Results</button>
            </div>
          )}
          <br />
          <br />
          <div>
            <h4 style={{ color: "rgb(167, 166, 166)" }}>Job Category</h4>
            <div className="jobToggle">
              <button
                className="toggleButton"
                onClick={() => setShowJobDescriptionBar(!showJobDescriptionBar)}
              >
                {showJobDescriptionBar ? (
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    -
                  </span>
                ) : (
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: "18px",
                    }}
                  >
                    +
                  </span>
                )}
              </button>
            </div>
            <br />
          </div>
        </div>
      </div>
      {/* <div style={{ marginLeft: "20%" }}> */}
      <div style={{ marginLeft: "20%" }}>
        {showJobDescriptionBar ? (
          <div>
            {mainDisplay ? (
              <div>
                {displayFrontEnd ? (
                  <div className="allcontents2">
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("full")}
                      />{" "}
                      <label>Full-stack Developer(4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("tech")}
                      />{" "}
                      <label>Technology Leadership (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cSS")}
                      />
                      <label>CSS Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("hTML")}
                      />
                      <label>HTML Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("javaScript")}
                      />
                      <label>JavaScript Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("reactJS")}
                      />
                      <label>ReactJS Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("soft")}
                      />
                      <label>Software Development</label>
                    </div>
                  </div>
                ) : (
                  <div className="allContents1">
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("back")}
                        // onClick={(e) => handleCheck(e)}
                      />
                      <label> Backend Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cLanguage")}
                      />
                      <label>C Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cSharp")}
                      />
                      <label>C# Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cPlusPlus")}
                      />
                      <label>C++ Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cSS")}
                      />
                      <label>CSS Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("hTML")}
                      />
                      <label>HTML Development</label>
                    </div>
                    <div></div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("javaScript")}
                      />
                      <label>JavaScript Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("nodeJs")}
                      />
                      <label>NodeJS Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("reactJS")}
                      />
                      <label>ReactJS Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("soft")}
                      />
                      <label>Software Development</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("web")}
                      />
                      <label>Web Development</label>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="allContents">
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("front")}
                  />{" "}
                  <label> Front-end Developer(7) </label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    // onClick={() => dispatch(toggleFullStack())}
                    onClick={() => handleToggle("full")}
                  />{" "}
                  <label>Full-stack Developer(4)</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    // onClick={() => dispatch(toggleTechnology())}
                    onClick={() => handleToggle("tech")}
                  />{" "}
                  <label>Technology Leadership (4)</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    // onClick={() => dispatch(toggleCSs())}
                    onClick={() => handleToggle("cSS")}
                  />
                  <label>CSS Development</label>
                </div>
                <div className="wrap">
                  <input type="checkbox" onClick={() => handleToggle("hTML")} />
                  <label>HTML Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("javaScript")}
                  />
                  <label>JavaScript Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("reactJS")}
                  />
                  <label>ReactJS Development</label>
                </div>
                <div className="wrap">
                  <input type="checkbox" onClick={() => handleToggle("soft")} />
                  <label>Software Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    // onClick={() => dispatch(toggleFrontend(0))}
                    onClick={() => handleToggle("back")}
                  />
                  <label> Backend Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("cLanguage")}
                  />
                  <label>C Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("cSharp")}
                  />
                  <label>C# Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("cPlusPlus")}
                  />
                  <label>C++ Development</label>
                </div>
                <div className="wrap">
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("nodeJs")}
                  />
                  <label>NodeJS Development</label>
                </div>
                <div className="wrap">
                  <input type="checkbox" onClick={() => handleToggle("web")} />
                  <label>Web Development</label>
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Filters;
