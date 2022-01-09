import React from "react";
import data from "./data1.json"
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory";


function BarChart1() {
  return (
    <div>
      <VictoryChart
         width={1000}
         height={600}
         
        domainPadding={ {x:30} }
        theme={VictoryTheme.material}
      >
      <VictoryAxis />
      <VictoryAxis dependentAxis orientation="top" />
          <VictoryBar
          horizontal
          style={{ data: { fill: "#7467f0"} }}
          data={data}
            
          />
      </VictoryChart>
    </div>
  );
}

export default BarChart1;
