import _ from "lodash";
import Plot from "react-plotly.js";
import React, { useState } from "react";

const Chart = (attr) => {
  let layout = {};
  const [plotData, setPlotData] = useState({});
  if (!_.isEmpty(attr)) {
    let table = document.querySelector(`#${attr.tableId}`);

    if (_.isEmpty(plotData.type)) {
      setPlotData((prevState) => ({
        ...prevState,
        type: attr.type,
      }));
    }
    if (!_.isEmpty(cols)) {
      let xTitleArr = cols.filter((el) => {
        return el.key === "x";
      });
      let yTitleArr = cols.filter((el) => {
        return el.key === "y";
      });
      layout.xaxis = { title: xTitleArr[0]["name"] };
      layout.yaxis = { title: yTitleArr[0]["name"] };
      layout.title = attr.plotTitle;
    }
  }

  return <Plot data={[plotData]} layout={layout} />;
};
