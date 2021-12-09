import React, { useState } from "react";
import Filters from "../MAIN CODE/Filters";

function AllToggle() {
  const [frontEnd, setFrontEnd] = useState(false);
  const [fullStack, setFullStack] = useState(false);
  const [techLeaderShip, setTechLearderShip] = useState(false);
  const [backEnd, setBackEnd] = useState(false);
  const [webDev, setWebDev] = useState(false);
  const [softDev, setSoftDev] = useState(false);
  const [c, setC] = useState(false);
  const [cPlusPlus, setCPlusPlus] = useState(false);
  const [cSharp, setCSharp] = useState(false);
  const [html, setHtml] = useState(false);
  const [css, setCSS] = useState(false);
  const [nodeJS, setNodeJS] = useState(false);
  const [javaScript, setJavaScript] = useState(false);
  const [reactJS, setReactJS] = useState(false);

  return (
    <div>
      <Filters
        frontEnd={frontEnd}
        setFrontEnd={setFrontEnd}
        fullStack={fullStack}
        setFullStack={setFullStack}
        techLeaderShip={techLeaderShip}
        setTechLearderShip={setTechLearderShip}
        backEnd={backEnd}
        setBackEnd={setBackEnd}
        webDev={webDev}
        setWebDev={setWebDev}
        softDev={softDev}
        setSoftDev={setSoftDev}
        c={c}
        setC={setC}
        cPlusPlus={cPlusPlus}
        setCPlusPlus={setCPlusPlus}
        cSharp={cSharp}
        setCSharp={setCSharp}
        html={html}
        setHtml={setHtml}
        css={css}
        setCSS={setCSS}
        nodeJS={nodeJS}
        setNodeJS={setNodeJS}
        javaScript={javaScript}
        setJavaScript={setJavaScript}
        reactJS={reactJS}
        setReactJS={setReactJS}
      />
    </div>
  );
}

export default AllToggle;
