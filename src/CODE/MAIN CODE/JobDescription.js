import React from "react";
import FrontendDev from "../FRONTEND DEV DATA/FrontendDev.json";
import FullStack from "../FRONTEND DEV DATA/FullStackDev.json";
import TechnologyLeaderShip from "../FRONTEND DEV DATA/TechnologyLeaderShip.json";
import BackendDevelopment from "../REMAINING JSON/BackendDevelopment.json";
import C from "../REMAINING JSON/C.json";
import CSharp from "../REMAINING JSON/CSharp.json";
import CPlusPlus from "../REMAINING JSON/CPlusPlus.json";
import CSS from "../REMAINING JSON/CSS.json";
import HTML from "../REMAINING JSON/HTML.json";
import JavaScript from "../REMAINING JSON/JavaScript.json";
import NodeJS from "../REMAINING JSON/NodeJS.json";
import ReactJS from "../REMAINING JSON/ReactJS.json";
import SoftwareDevelopment from "../REMAINING JSON/SoftwareDevelopment.json";
import WebDevelopment from "../REMAINING JSON/WebDevelopment.json";
import { useSelector } from "react-redux";

function JobDescription() {
  const globalState = useSelector((state) => state);

  return (
    <div>
      {globalState.front ? (
        <div>
          {FrontendDev.map((items, id) => (
            <div key={id}>
              <p>
                <img src={items.image} alt="nothing" />
                <span className="position"> {items.position}</span>
                <span className="status">
                  {" "}
                  <span style={{ marginRight: "15px" }}>|</span> {items.status}
                </span>
              </p>
              <p className="company">{items.company}</p>
              <p className="location">{items.location}</p>
              <p className="workExperience">{items.workExperience}</p>
              <p className="salaryRange">{items.salaryRange}</p>
              <p className="skill1">{items.skills.skill1}</p>
              <p className="skill2">{items.skills.skill2}</p>
              <p className="skill3">{items.skills.skill3}</p>
              <p className="skill4">{items.skills.skill4}</p>
              <p className="skill5">{items.skills.skill5}</p>
              <p className="skill6">{items.skills.skill6}</p>
              <p className="skill7">{items.skills.skill7}</p>
              <p className="skill8">{items.skills.skill8}</p>
              <p className="skill9">{items.skills.skill9}</p>
              <br />
              <br />
            </div>
          ))}
          {/* ------------------pasting here the updated */}
          <div>
            {globalState.full ? (
              <div>
                {FullStack.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {globalState.tech ? (
              <div>
                {TechnologyLeaderShip.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {globalState.css ? (
              <div>
                {CSS.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {globalState.html ? (
              <div>
                {HTML.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {globalState.javascript ? (
              <div>
                {JavaScript.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {globalState.reactjs ? (
              <div>
                {ReactJS.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
            {globalState.soft ? (
              <div>
                {SoftwareDevelopment.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          {/* ------------------pasting here the updated */}
        </div>
      ) : (
        <div>
          <div>
            {globalState.back ? <div></div> : ""}
            {globalState.web ? <div></div> : ""}
            {globalState.clanguage ? <div></div> : ""}
            {globalState.cplusplus ? <div></div> : ""}
            {globalState.csharp ? <div></div> : ""}
            {globalState.nodejs ? <div></div> : ""}

            {/* {globalState.front ? (
              ""
              ) : (
              <div>
                {globalState.front ? (
                  ""
                ) : (
                  <div>
                    {FrontendDev.map((items, id) => (
                      <div key={id}>
                        <p>
                          <img src={items.image} alt="nothing" />
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p className="company">{items.company}</p>
                        <p className="location">{items.location}</p>
                        <p className="workExperience">{items.workExperience}</p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p className="skill1">{items.skills.skill1}</p>
                        <p className="skill2">{items.skills.skill2}</p>
                        <p className="skill3">{items.skills.skill3}</p>
                        <p className="skill4">{items.skills.skill4}</p>
                        <p className="skill5">{items.skills.skill5}</p>
                        <p className="skill6">{items.skills.skill6}</p>
                        <p className="skill7">{items.skills.skill7}</p>
                        <p className="skill8">{items.skills.skill8}</p>
                        <p className="skill9">{items.skills.skill9}</p>
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )} */}
          </div>
          <div>
            {globalState.full ? (
              ""
            ) : (
              <div>
                {FullStack.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.tech ? (
              ""
            ) : (
              <div>
                {TechnologyLeaderShip.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {BackendDevelopment.map((items, id) => (
              <div key={id}>
                <p>
                  <img src={items.image} alt="nothing" />
                  <span className="position"> {items.position}</span>
                  <span className="status">
                    {" "}
                    <span style={{ marginRight: "15px" }}>|</span>{" "}
                    {items.status}
                  </span>
                </p>
                <p className="company">{items.company}</p>
                <p className="location">{items.location}</p>
                <p className="workExperience">{items.workExperience}</p>
                <p className="salaryRange">{items.salaryRange}</p>
                <p className="skill1">{items.skills.skill1}</p>
                <p className="skill2">{items.skills.skill2}</p>
                <p className="skill3">{items.skills.skill3}</p>
                <p className="skill4">{items.skills.skill4}</p>
                <p className="skill5">{items.skills.skill5}</p>
                <p className="skill6">{items.skills.skill6}</p>
                <p className="skill7">{items.skills.skill7}</p>
                <p className="skill8">{items.skills.skill8}</p>
                <p className="skill9">{items.skills.skill9}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div>
            {C.map((items, id) => (
              <div key={id}>
                <p>
                  <img src={items.image} alt="nothing" />
                  <span className="position"> {items.position}</span>
                  <span className="status">
                    {" "}
                    <span style={{ marginRight: "15px" }}>|</span>{" "}
                    {items.status}
                  </span>
                </p>
                <p className="company">{items.company}</p>
                <p className="location">{items.location}</p>
                <p className="workExperience">{items.workExperience}</p>
                <p className="salaryRange">{items.salaryRange}</p>
                <p className="skill1">{items.skills.skill1}</p>
                <p className="skill2">{items.skills.skill2}</p>
                <p className="skill3">{items.skills.skill3}</p>
                <p className="skill4">{items.skills.skill4}</p>
                <p className="skill5">{items.skills.skill5}</p>
                <p className="skill6">{items.skills.skill6}</p>
                <p className="skill7">{items.skills.skill7}</p>
                <p className="skill8">{items.skills.skill8}</p>
                <p className="skill9">{items.skills.skill9}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div>
            {CSharp.map((items, id) => (
              <div key={id}>
                <p>
                  <img src={items.image} alt="nothing" />
                  <span className="position"> {items.position}</span>
                  <span className="status">
                    {" "}
                    <span style={{ marginRight: "15px" }}>|</span>{" "}
                    {items.status}
                  </span>
                </p>
                <p className="company">{items.company}</p>
                <p className="location">{items.location}</p>
                <p className="workExperience">{items.workExperience}</p>
                <p className="salaryRange">{items.salaryRange}</p>
                <p className="skill1">{items.skills.skill1}</p>
                <p className="skill2">{items.skills.skill2}</p>
                <p className="skill3">{items.skills.skill3}</p>
                <p className="skill4">{items.skills.skill4}</p>
                <p className="skill5">{items.skills.skill5}</p>
                <p className="skill6">{items.skills.skill6}</p>
                <p className="skill7">{items.skills.skill7}</p>
                <p className="skill8">{items.skills.skill8}</p>
                <p className="skill9">{items.skills.skill9}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div>
            {CPlusPlus.map((items, id) => (
              <div key={id}>
                <p>
                  <img src={items.image} alt="nothing" />
                  <span className="position"> {items.position}</span>
                  <span className="status">
                    {" "}
                    <span style={{ marginRight: "15px" }}>|</span>{" "}
                    {items.status}
                  </span>
                </p>
                <p className="company">{items.company}</p>
                <p className="location">{items.location}</p>
                <p className="workExperience">{items.workExperience}</p>
                <p className="salaryRange">{items.salaryRange}</p>
                <p className="skill1">{items.skills.skill1}</p>
                <p className="skill2">{items.skills.skill2}</p>
                <p className="skill3">{items.skills.skill3}</p>
                <p className="skill4">{items.skills.skill4}</p>
                <p className="skill5">{items.skills.skill5}</p>
                <p className="skill6">{items.skills.skill6}</p>
                <p className="skill7">{items.skills.skill7}</p>
                <p className="skill8">{items.skills.skill8}</p>
                <p className="skill9">{items.skills.skill9}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div>
            {globalState.css ? (
              ""
            ) : (
              <div>
                {CSS.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.html ? (
              ""
            ) : (
              <div>
                {HTML.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.javascript ? (
              ""
            ) : (
              <div>
                {JavaScript.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {NodeJS.map((items, id) => (
              <div key={id}>
                <p>
                  <img src={items.image} alt="nothing" />
                  <span className="position"> {items.position}</span>
                  <span className="status">
                    {" "}
                    <span style={{ marginRight: "15px" }}>|</span>{" "}
                    {items.status}
                  </span>
                </p>
                <p className="company">{items.company}</p>
                <p className="location">{items.location}</p>
                <p className="workExperience">{items.workExperience}</p>
                <p className="salaryRange">{items.salaryRange}</p>
                <p className="skill1">{items.skills.skill1}</p>
                <p className="skill2">{items.skills.skill2}</p>
                <p className="skill3">{items.skills.skill3}</p>
                <p className="skill4">{items.skills.skill4}</p>
                <p className="skill5">{items.skills.skill5}</p>
                <p className="skill6">{items.skills.skill6}</p>
                <p className="skill7">{items.skills.skill7}</p>
                <p className="skill8">{items.skills.skill8}</p>
                <p className="skill9">{items.skills.skill9}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
          <div>
            {globalState.reactjs ? (
              ""
            ) : (
              <div>
                {ReactJS.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.soft ? (
              ""
            ) : (
              <div>
                {SoftwareDevelopment.map((items, id) => (
                  <div key={id}>
                    <p>
                      <img src={items.image} alt="nothing" />
                      <span className="position"> {items.position}</span>
                      <span className="status">
                        {" "}
                        <span style={{ marginRight: "15px" }}>|</span>{" "}
                        {items.status}
                      </span>
                    </p>
                    <p className="company">{items.company}</p>
                    <p className="location">{items.location}</p>
                    <p className="workExperience">{items.workExperience}</p>
                    <p className="salaryRange">{items.salaryRange}</p>
                    <p className="skill1">{items.skills.skill1}</p>
                    <p className="skill2">{items.skills.skill2}</p>
                    <p className="skill3">{items.skills.skill3}</p>
                    <p className="skill4">{items.skills.skill4}</p>
                    <p className="skill5">{items.skills.skill5}</p>
                    <p className="skill6">{items.skills.skill6}</p>
                    <p className="skill7">{items.skills.skill7}</p>
                    <p className="skill8">{items.skills.skill8}</p>
                    <p className="skill9">{items.skills.skill9}</p>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {WebDevelopment.map((items, id) => (
              <div key={id}>
                <p>
                  <img src={items.image} alt="nothing" />
                  <span className="position"> {items.position}</span>
                  <span className="status">
                    {" "}
                    <span style={{ marginRight: "15px" }}>|</span>{" "}
                    {items.status}
                  </span>
                </p>
                <p className="company">{items.company}</p>
                <p className="location">{items.location}</p>
                <p className="workExperience">{items.workExperience}</p>
                <p className="salaryRange">{items.salaryRange}</p>
                <p className="skill1">{items.skills.skill1}</p>
                <p className="skill2">{items.skills.skill2}</p>
                <p className="skill3">{items.skills.skill3}</p>
                <p className="skill4">{items.skills.skill4}</p>
                <p className="skill5">{items.skills.skill5}</p>
                <p className="skill6">{items.skills.skill6}</p>
                <p className="skill7">{items.skills.skill7}</p>
                <p className="skill8">{items.skills.skill8}</p>
                <p className="skill9">{items.skills.skill9}</p>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>

        // <div>
        //   {frontendNotSelected
        //     ? "Display all the remaing jobs"
        //     : "display frontend ones"}
        // </div>
      )}
    </div>
  );
}

export default JobDescription;
