import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLegend,
} from "victory";

const data = [
  { company: 1, loanAmount: 8, fill: "#ff896b" },
  { company: 2, loanAmount: 6, fill: "blue" },
  { company: 3, loanAmount: 4, fill: "green" },
  { company: 4, loanAmount: 0, fill: "red" },
  { company: 5, loanAmount: 0, fill: "red" },
  { company: 6, loanAmount: 0, fill: "red" },
];

function BarChart2() {
  return (
    <div className="chart2">
      <VictoryChart
        width={1100}
        height={400}
        domainPadding={40}
        theme={VictoryTheme.material}
      >
        <VictoryLegend />
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3]}
          tickFormat={["Party 1", "Party 2", "Party 3"]}
        />
        <VictoryAxis
          dependentAxis
          orientation="right"
          tickValues={[2, 4, 6, 8]}
          minDomain={{ x: 2 }}
        />
        <VictoryBar
          data={data}
          x="company"
          y="loanAmount"
        />
      </VictoryChart>
    </div>
  );
}

export default BarChart2;
