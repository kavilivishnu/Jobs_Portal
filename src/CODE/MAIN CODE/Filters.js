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

  // const handleCheck = () => {
  //   dispatch(toggleFrontend());
  //   console.log(globalState);
  // };

  return (
    <div style={{ marginLeft: "5%", marginRight: "17%" }}>
      <div>
        <h4>Skills</h4>
        <p>{globalState.front}</p>
        <Select ref={inputRef} isMulti options={skills} />
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
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleFullStack())}
                  />{" "}
                  <label>Full-stack Developer(4)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleTechnology())}
                  />{" "}
                  <label>Technology Leadership (4)</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleCSs())}
                  />
                  <label>CSS Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleHTml())}
                  />
                  <label>HTML Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleJavaScript())}
                  />
                  <label>JavaScript Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleReactJS())}
                  />
                  <label>ReactJS Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleSoftDev())}
                  />
                  <label>Software Development</label>
                </div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleBackend())}
                    // onClick={(e) => handleCheck(e)}
                  />
                  <label> Backend Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleCLanguage())}
                  />
                  <label>C Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleCSharp())}
                  />
                  <label>C# Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleCPlusPlus())}
                  />
                  <label>C++ Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleCSs())}
                  />
                  <label>CSS Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleHTml())}
                  />
                  <label>HTML Development</label>
                </div>
                <div></div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleJavaScript())}
                  />
                  <label>JavaScript Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleNodetJS())}
                  />
                  <label>NodeJS Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleReactJS())}
                  />
                  <label>ReactJS Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleSoftDev())}
                  />
                  <label>Software Development</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => dispatch(toggleWebDev())}
                  />
                  <label>Web Development</label>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleFrontend(!show))}
                // onClick={(e) => handleCheck(e)}
                onClick={() => dispatch(toggleFrontend())}
              />{" "}
              <label> Front-end Developer(7) </label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleFullStack())}
              />{" "}
              <label>Full-stack Developer(4)</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleTechnology())}
              />{" "}
              <label>Technology Leadership (4)</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => dispatch(toggleCSs())} />
              <label>CSS Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => dispatch(toggleHTml())} />
              <label>HTML Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleJavaScript())}
              />
              <label>JavaScript Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleReactJS())}
              />
              <label>ReactJS Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleSoftDev())}
              />
              <label>Software Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                // onClick={() => dispatch(toggleFrontend(0))}
                onClick={() => dispatch(toggleBackend())}
              />
              <label> Backend Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleCLanguage())}
              />
              <label>C Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => dispatch(toggleCSharp())} />
              <label>C# Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleCPlusPlus())}
              />
              <label>C++ Development</label>
            </div>
            <div>
              <input
                type="checkbox"
                onClick={() => dispatch(toggleNodetJS())}
              />
              <label>NodeJS Development</label>
            </div>
            <div>
              <input type="checkbox" onClick={() => dispatch(toggleWebDev())} />
              <label>Web Development</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Filters;
