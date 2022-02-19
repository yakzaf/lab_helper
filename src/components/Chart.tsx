import _ from "lodash";
import Plot from "react-plotly.js";
import React, { FC, useState } from "react";
import { ChartAttr } from "../types";

const Chart: FC<ChartAttr> = (attr) => {
  let layout = {
    xaxis: {},
    yaxis: {},
    title: "",
  };

  const [plotData, setPlotData] = useState<{}>({});
  if (!_.isEmpty(attr)) {
    let table = document.querySelector(`#${attr.tableId}`);
    // @ts-ignore
    if (_.isEmpty(plotData.type)) {
      setPlotData((prevState) => ({
        ...prevState,
        type: attr.type,
      }));
    }
    // if (!_.isEmpty(cols)) {
    //   let xTitleArr = cols.filter((el) => {
    //     return el.key === "x";
    //   });
    //   let yTitleArr = cols.filter((el) => {
    //     return el.key === "y";
    //   });
    //   layout.xaxis = { title: xTitleArr[0]["name"] };
    //   layout.yaxis = { title: yTitleArr[0]["name"] };
    //   layout.title = attr.plotTitle;
    // }
  }

  return <Plot data={[plotData]} layout={layout} />;
};
