import React from "react";
import Heading from "../Heading";
import WorkBox from "./WorkBox";
import work from "./Work.json";

function PastActivity() {
  return (
    <div className="box PastActivity">
      <div className="PastActivityHeading">
        <Heading text={"Past Activity"} />
      </div>
      {work.map(WorkBox)}
    </div>
  );
}

export default PastActivity;
