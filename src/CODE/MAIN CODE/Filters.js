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
} from "../Actions";

function Filters() {
  const inputRef = useRef();

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const [input, setInput] = useState([]);
  const [mainDisplay, setMainDisplay] = useState(false);
  const [displayFrontEnd, setDisplayFrontEnd] = useState(false);

  let show = false;

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
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    // dispatch(toggleFrontend(show));
    setInput(inputRef.current.props.value);
    const frontEndDevelopment = inputRef.current.props.value.some(
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

  return (
    <div style={{ marginLeft: "5%", marginRight: "17%" }}>
      <div>
        <h4>Skills</h4>
        <p>{globalState.front}</p>
        <Select ref={inputRef} isMulti options={skills} />
        <br />
        <button onClick={(e) => handleClick(e)}>Show Results</button>
        <br />
        <h5>With any skills:</h5>
        {input.map((item, id) => (
          <div key={id}>
            <h4>
              <i>
                <u>
                  <b>{item.value}</b>
                </u>
              </i>
            </h4>
          </div>
        ))}
      </div>
      <div>
        <h4>Job Category</h4>
        {mainDisplay ? (
          <div>
            {displayFrontEnd ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("full")} />{" "}
                  <label>Full-stack Developer(4)</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("tech")} />{" "}
                  <label>Technology Leadership (4)</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("cSS")} />
                  <label>CSS Development</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("hTML")} />
                  <label>HTML Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("javaScript")}
                  />
                  <label>JavaScript Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("reactJS")}
                  />
                  <label>ReactJS Development</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("soft")} />
                  <label>Software Development</label>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("back")}
                    // onClick={(e) => handleCheck(e)}
                  />
                  <label> Backend Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("cLanguage")}
                  />
                  <label>C Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("cSharp")}
                  />
                  <label>C# Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("cPlusPlus")}
                  />
                  <label>C++ Development</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("cSS")} />
                  <label>CSS Development</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("hTML")} />
                  <label>HTML Development</label>
                </div>
                <div></div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("javaScript")}
                  />
                  <label>JavaScript Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("nodeJs")}
                  />
                  <label>NodeJS Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => handleToggle("reactJS")}
                  />
                  <label>ReactJS Development</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("soft")} />
                  <label>Software Development</label>
                </div>
                <div>
                  <input type="checkbox" onClick={() => handleToggle("web")} />
                  <label>Web Development</label>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "-15%" }}>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleFrontend(!show))}
                // onClick={(e) => handleCheck(e)}
                // onClick={() => dispatch(toggleFrontend())}
                onClick={() => handleToggle("front")}
              />{" "}
              <label> Front-end Developer(7) </label>
            </div>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleFullStack())}
                onClick={() => handleToggle("full")}
              />{" "}
              <label>Full-stack Developer(4)</label>
            </div>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleTechnology())}
                onClick={() => handleToggle("tech")}
              />{" "}
              <label>Technology Leadership (4)</label>
            </div>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleCSs())}
                onClick={() => handleToggle("cSS")}
              />
              <label>CSS Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => handleToggle("hTML")} />
              <label>HTML Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => handleToggle("javaScript")}
              />
              <label>JavaScript Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => handleToggle("reactJS")} />
              <label>ReactJS Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => handleToggle("soft")} />
              <label>Software Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleFrontend(0))}
                onClick={() => handleToggle("back")}
              />
              <label> Backend Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => handleToggle("cLanguage")}
              />
              <label>C Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => handleToggle("cSharp")} />
              <label>C# Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => handleToggle("cPlusPlus")}
              />
              <label>C++ Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => handleToggle("nodeJs")} />
              <label>NodeJS Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => handleToggle("web")} />
              <label>Web Development</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
