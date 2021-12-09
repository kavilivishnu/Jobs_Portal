import React from "react";
import Filters from "./Filters";
import JobDescription from "./JobDescription";

function MainPage() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Filters />
      <JobDescription />
    </div>
  );
}

export default MainPage;
