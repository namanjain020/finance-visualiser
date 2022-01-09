import React from "react";
import BarChart1 from "./BarChart1";
import Heading from "../Heading";
import ValueBox from "./ValueBox";
import data from "./data1.json";

var sum = data.reduce((total, cv) => total + cv.y, 0);

function Box1() {
  return (
    <div class="box Box1">
        <Heading text={"Your company information"} p={"Main metrics"} />
        <ValueBox text={"Total Shares"} value={sum} />
        <ValueBox text={"Total Values"} value={sum} dollar={true} />
        <BarChart1 />
    </div>
  );
}

export default Box1;
