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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function Filters() {
  const inputRef = useRef();

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [mainDisplay, setMainDisplay] = useState(false);
  const [displayFrontEnd, setDisplayFrontEnd] = useState(false);
  const [showSkillBar, setShowSkillBar] = useState(false);
  const [showJobDescriptionBar, setShowJobDescriptionBar] = useState(false);
  const [switchName, setSwitchName] = useState("");

  let value;
  let frontEndDevelopment;

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
    // let frontEndDevelopment;
    console.log(inputRef.current.props.value);
    if (inputRef.current.props.value === null) {
      alert("Please enter a SKILL to proceed.");
    } else {
      dispatch(showSkills(inputRef.current.props.value));
      frontEndDevelopment = inputRef.current.props.value.some(
        (item) => item.value === "Frontend Development"
      );
      if (frontEndDevelopment) {
        value = frontEndDevelopment;
        setSwitchName("ADDED");
        setMainDisplay(true);
        setDisplayFrontEnd(true);
        dispatch(toggleFrontend());
      } else if (inputRef.current.props.value.length === 0) {
        setMainDisplay(false);
        dispatch(setFrontEndToFalse());
      } else {
        value = 0;
        setSwitchName("FILTERED OUT");
        setDisplayFrontEnd(false);
        dispatch(setFrontEndToFalse());
      }
    }
  };

  const handleToggle = (val) => {
    switch (val) {
      case "front":
        dispatch(toggleFrontend());
        if (!globalState.front) {
          toast.info("Showing only the Jobs Related to FRONT-END DEVELOPMENT", {
            autoClose: 5000,
          });
        }
        break;
      case "full":
        dispatch(toggleFullStack());
        if (!globalState.full) {
          // toast.info(`FILTERED OUT the Jobs Related to FULLSTACK DEVELOPMENT`, {
          //   autoClose: 5000,
          // });
          toast.info(
            `${switchName} the Jobs Related to FULLSTACK DEVELOPMENT`,
            {
              autoClose: 5000,
            }
          );
        }
        break;
      case "tech":
        dispatch(toggleTechnology());
        if (!globalState.tech) {
          toast.info(
            `${switchName} the Jobs Related to TECHNOLOGY LEADERSHIP`,
            {
              autoClose: 5000,
            }
          );
        }
        break;
      case "back":
        dispatch(toggleBackend());
        if (!globalState.back) {
          toast.info("FILTERED OUT the Jobs Related to BACK-END DEVELOPMENT", {
            autoClose: 5000,
          });
        }
        break;
      case "cLanguage":
        dispatch(toggleCLanguage());
        if (!globalState.clanguage) {
          toast.info(
            "FILTERED OUT the Jobs Related to C-LANGUAGE DEVELOPMENT",
            {
              autoClose: 5000,
            }
          );
        }
        break;
      case "cPlusPlus":
        dispatch(toggleCPlusPlus());
        if (!globalState.cplusplus) {
          toast.info(
            "FILTERED OUT the Jobs Related to C-PLUS-PLUS DEVELOPMENT",
            {
              autoClose: 5000,
            }
          );
        }
        break;
      case "cSharp":
        dispatch(toggleCSharp());
        if (!globalState.csharp) {
          toast.info("FILTERED OUT the Jobs Related to C-SHARP DEVELOPMENT", {
            autoClose: 5000,
          });
        }
        break;
      case "cSS":
        dispatch(toggleCSs());
        if (!globalState.css) {
          toast.info(
            `${switchName} the Jobs Related to CASCADING STYLE SHEETS(CSS) DEVELOPMENT`,
            { autoClose: 5000 }
          );
        }
        break;
      case "hTML":
        dispatch(toggleHTml());
        if (!globalState.html) {
          toast.info(`${switchName} the Jobs Related to HTML DEVELOPMENT`, {
            autoClose: 5000,
          });
        }
        break;
      case "javaScript":
        dispatch(toggleJavaScript());
        if (!globalState.javascript) {
          toast.info(
            `${switchName} the Jobs Related to JAVASCRIPT DEVELOPMENT`,
            {
              autoClose: 5000,
            }
          );
        }
        break;
      case "nodeJs":
        dispatch(toggleNodetJS());
        if (!globalState.nodejs) {
          toast.info("FILTERED OUT the Jobs Related to NODE.JS DEVELOPMENT", {
            autoClose: 5000,
          });
        }
        break;
      case "reactJS":
        dispatch(toggleReactJS());
        if (!globalState.reactjs) {
          toast.info(`${switchName} the Jobs Related to REACT.JS DEVELOPMENT`, {
            autoClose: 5000,
          });
        }
        break;
      case "soft":
        dispatch(toggleSoftDev());
        if (!globalState.soft) {
          toast.info(`${switchName} the Jobs Related to SOFTWARE DEVELOPMENT`, {
            autoClose: 5000,
          });
        }
        break;
      case "web":
        dispatch(toggleWebDev());
        if (!globalState.web) {
          toast.info("FILTERED OUT the Jobs Related to WEB DEVELOPMENT", {
            autoClose: 5000,
          });
        }
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
      <h3 style={{ marginLeft: "15%" }}>
        Select the SKILLS first, FILTER next
      </h3>
      <div style={{ marginLeft: "-15%" }}>
        {/* <div> */}
        <div style={{ marginLeft: "30%" }}>
          {/* <div> */}
          <br />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "3px 3px 3px 3px",
          marginLeft: "15%",
          width: "150%",
          paddingBottom: "15%",
        }}
      >
        <div>
          <div>
            <br />
            <h3
              style={{
                color: "rgb(167, 166, 166)",
                marginLeft: "20%",
                cursor: "pointer",
              }}
            >
              Skills{" "}
            </h3>
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
                      fontSize: "25px",
                    }}
                  >
                    -
                  </span>
                ) : (
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: "25px",
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
            <div className="skillContents">
              <Select
                styles={customStyles}
                ref={inputRef}
                isMulti
                options={skills}
              />
              <br />
              <button className="showResults" onClick={(e) => handleClick(e)}>
                Show Results
              </button>
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
        </div>
        <div>
          <div>
            <h3
              style={{
                color: "rgb(167, 166, 166)",
                marginLeft: "20%",
                cursor: "pointer",
              }}
            >
              Job Category
            </h3>
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
                      fontSize: "25px",
                    }}
                  >
                    -
                  </span>
                ) : (
                  <span
                    style={{
                      cursor: "pointer",
                      fontWeight: "bolder",
                      fontSize: "25px",
                    }}
                  >
                    +
                  </span>
                )}
              </button>
            </div>
            <br />
          </div>
          <div className="allJobCategories">
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
                          <label>Technology Leadership (1)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("cSS")}
                          />
                          <label>CSS Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("hTML")}
                          />
                          <label>HTML Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("javaScript")}
                          />
                          <label>JavaScript Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("reactJS")}
                          />
                          <label>ReactJS Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("soft")}
                          />
                          <label>Software Development (4)</label>
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
                          <label> Backend Development (8)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("cLanguage")}
                          />
                          <label>C Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("cSharp")}
                          />
                          <label>C# Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("cPlusPlus")}
                          />
                          <label>C++ Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("cSS")}
                          />
                          <label>CSS Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("hTML")}
                          />
                          <label>HTML Development (4)</label>
                        </div>
                        <div></div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("javaScript")}
                          />
                          <label>JavaScript Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("nodeJs")}
                          />
                          <label>NodeJS Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("reactJS")}
                          />
                          <label>ReactJS Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("soft")}
                          />
                          <label>Software Development (4)</label>
                        </div>
                        <div className="wrap">
                          <input
                            type="checkbox"
                            onClick={() => handleToggle("web")}
                          />
                          <label>Web Development (4)</label>
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
                      <label> Front-end Developer(8) </label>
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
                      <label>Technology Leadership (1)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        // onClick={() => dispatch(toggleCSs())}
                        onClick={() => handleToggle("cSS")}
                      />
                      <label>CSS Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("hTML")}
                      />
                      <label>HTML Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("javaScript")}
                      />
                      <label>JavaScript Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("reactJS")}
                      />
                      <label>ReactJS Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("soft")}
                      />
                      <label>Software Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        // onClick={() => dispatch(toggleFrontend(0))}
                        onClick={() => handleToggle("back")}
                      />
                      <label> Backend Development (8)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cLanguage")}
                      />
                      <label>C Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cSharp")}
                      />
                      <label>C# Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("cPlusPlus")}
                      />
                      <label>C++ Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("nodeJs")}
                      />
                      <label>NodeJS Development (4)</label>
                    </div>
                    <div className="wrap">
                      <input
                        type="checkbox"
                        onClick={() => handleToggle("web")}
                      />
                      <label>Web Development (4)</label>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* <div style={{ marginLeft: "20%" }}> */}
    </div>
  );
}

export default Filters;
