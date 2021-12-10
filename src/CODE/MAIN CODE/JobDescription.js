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
import { useSelector, useDispatch } from "react-redux";
import { clearAllSkills } from "../Actions";

function JobDescription() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: "5%" }}>
      <div className="skillSet">
        <h3 style={{ marginRight: "10px" }}>With any skills:</h3>
        {globalState.skillSet.map((item, id) => (
          <div key={id} className="selectedSkills">
            <span>{item.value},</span>
          </div>
        ))}
        <button className="clearAll" onClick={() => dispatch(clearAllSkills())}>
          Clear All
        </button>
      </div>

      {globalState.front ? (
        <div>
          {FrontendDev.map((items, id) => (
            <div key={id}>
              <div className="cardBackground">
                <div>
                  <img
                    className="companyLogo"
                    src={items.image}
                    alt="nothing"
                  />
                </div>
                <div>
                  <p>
                    <span className="position"> {items.position}</span>
                    <span className="status">
                      {" "}
                      <span style={{ marginRight: "15px" }}>|</span>{" "}
                      {items.status}
                    </span>
                  </p>
                  <p>
                    <span className="company">{items.company}</span>
                    <span className="location">{items.location}</span>
                    <span className="workExperience">
                      {items.workExperience}
                    </span>
                  </p>
                  <p className="salaryRange">{items.salaryRange}</p>
                  <p>
                    <span className="skill2">{items.skills.skill2}</span>
                    <span className="skill3">{items.skills.skill3}</span>
                    <span className="skill4">{items.skills.skill4}</span>
                    <span className="skill5">{items.skills.skill5}</span>
                  </p>
                </div>
              </div>
              <br />
              <br />
            </div>
          ))}
          {/* ------------------pasting here the updated logic */}
          <div>
            {globalState.full ? (
              <div>
                {FullStack.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          {/* ------------------pasting here the updated logic */}
        </div>
      ) : (
        <div>
          <div>
            {globalState.front ? (
              ""
            ) : (
              <div>
                {globalState.front ? (
                  ""
                ) : (
                  <div>
                    {FrontendDev.map((items, id) => (
                      <div key={id}>
                        <div className="cardBackground">
                          <div>
                            <img
                              className="companyLogo"
                              src={items.image}
                              alt="nothing"
                            />
                          </div>
                          <div>
                            <p>
                              <span className="position">
                                {" "}
                                {items.position}
                              </span>
                              <span className="status">
                                {" "}
                                <span style={{ marginRight: "15px" }}>
                                  |
                                </span>{" "}
                                {items.status}
                              </span>
                            </p>
                            <p>
                              <span className="company">{items.company}</span>
                              <span className="location">{items.location}</span>
                              <span className="workExperience">
                                {items.workExperience}
                              </span>
                            </p>
                            <p className="salaryRange">{items.salaryRange}</p>
                            <p className="skills">
                              <span className="skill2">
                                {items.skills.skill2}
                              </span>
                              <span className="skill3">
                                {items.skills.skill3}
                              </span>
                              <span className="skill4">
                                {items.skills.skill4}
                              </span>
                              <span className="skill5">
                                {items.skills.skill5}
                              </span>
                            </p>
                          </div>
                        </div>
                        <br />
                        <br />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
          <div>
            {globalState.full ? (
              ""
            ) : (
              <div>
                {FullStack.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p className="skills">
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p className="skills">
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>

                          <br />
                          <br />
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.back ? (
              ""
            ) : (
              <div>
                {BackendDevelopment.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.clanguage ? (
              ""
            ) : (
              <div>
                {C.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.csharp ? (
              ""
            ) : (
              <div>
                {CSharp.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.cplusplus ? (
              ""
            ) : (
              <div>
                {CPlusPlus.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.css ? (
              ""
            ) : (
              <div>
                {CSS.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.nodejs ? (
              ""
            ) : (
              <div>
                {NodeJS.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.reactjs ? (
              ""
            ) : (
              <div>
                {ReactJS.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
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
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div>
            {globalState.web ? (
              ""
            ) : (
              <div>
                {WebDevelopment.map((items, id) => (
                  <div key={id}>
                    <div className="cardBackground">
                      <div>
                        <img
                          className="companyLogo"
                          src={items.image}
                          alt="nothing"
                        />
                      </div>
                      <div>
                        <p>
                          <span className="position"> {items.position}</span>
                          <span className="status">
                            {" "}
                            <span style={{ marginRight: "15px" }}>|</span>{" "}
                            {items.status}
                          </span>
                        </p>
                        <p>
                          <span className="company">{items.company}</span>
                          <span className="location">{items.location}</span>
                          <span className="workExperience">
                            {items.workExperience}
                          </span>
                        </p>
                        <p className="salaryRange">{items.salaryRange}</p>
                        <p>
                          <span className="skill2">{items.skills.skill2}</span>
                          <span className="skill3">{items.skills.skill3}</span>
                          <span className="skill4">{items.skills.skill4}</span>
                          <span className="skill5">{items.skills.skill5}</span>
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDescription;
