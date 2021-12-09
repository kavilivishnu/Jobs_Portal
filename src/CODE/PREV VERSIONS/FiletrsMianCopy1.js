import React, { useRef, useEffect, useState } from "react";
import Select from "react-select";

function Filters() {
  const inputRef = useRef();

  const [input, setInput] = useState([]);
//   const [display, setDisplay] = useState(0);

  const skills = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React JS", label: "React JS" },
    { value: "Node.JS", label: "Node.JS" },
    { value: "C", label: "C" },
    { value: "C++", label: "C++" },
    { value: "C#", label: "C#" },
    { value: "Frontend Developement", label: "Frontend Developement" },
    { value: "Backend Developement", label: "Backend Developement" },
    { value: "Software Development", label: "Software Developer" },
    { value: "Web Development", label: "Web Developer" },
  ];

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    // console.log(
    //   inputRef.current.props.value.map((item) => console.log(item.value))
    // );
    // setTimeout(() => {
    //     setDisplay(1);
    // }, 10)
    // if (display === 1) {
    //   setInput(inputRef.current.props.value);
    // }
    // setTimeout(() => {
    //   setInput(inputRef.current.props.value);
    // }, 1000);
    setInput(inputRef.current.props.value);
  };

  return (
    <div>
      <div>
        <p>Skills</p>
        <Select
          ref={inputRef}
          isMulti
          options={skills}
        />
        <button onClick={(e) => handleClick(e)}>show</button>
        {/* <input
          ref={inputRef}
          type="text"
          list="data"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          multiple
        />

        <datalist id="data">
          {skills.map((item, key) => (
            <option key={key} value={item.value} />
          ))}
        </datalist> */}
        {/* <button onClick={(e) => handleClick(e)}>Show</button> */}
        {/* {inputRef.current.props.value.map((items) => (
          <div>
            <p>{items.value}</p>
          </div>
        ))} */}
        {input.map((item, id) => (
          <div key={id}>
            <p>{item.value}</p>
          </div>
        ))}
        {/* <p>{display}</p> */}
      </div>
      <div>
        <p>Job Category</p>
      </div>
    </div>
  );
}

export default Filters;
