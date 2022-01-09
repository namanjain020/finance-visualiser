import React from "react";
import BarChart2 from "./BarChart2";
import Heading from "../Heading"

function Box2() {
  return (
    <div className="box Box2">
    <div>
    <Heading text={"Loans Metrics"} p={"Loans owners"}/>
      <BarChart2 />
    </div>
    </div>
  );
}

export default Box2;
