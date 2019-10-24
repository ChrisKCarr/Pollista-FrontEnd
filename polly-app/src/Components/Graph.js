import React, { Component } from "react";
import CanvasJSReact from "./Canvas/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  render() {
    const options = {
      exportEnabled: false,
      animationEnabled: true,
      //   title: {
      //     text: ""
      //   },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Direct" },
            { y: 49, label: "Organic Search" },
            { y: 9, label: "Paid Search" },
            { y: 5, label: "Referral" },
            { y: 19, label: "Social" }
          ]
        }
      ]
    };

    return (
      <div>
        <h1></h1>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Graph;
