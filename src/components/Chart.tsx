import React, { FC } from "react";
import { ChartAttr, TableState } from "../types";

import { useSelector } from "react-redux";
import { PlotData } from "plotly.js";
import Plot from "react-plotly.js";
import _ from "lodash";

const Chart: FC<ChartAttr> = (attr) => {
  const tableState = useSelector(
    (state: TableState) => state.dBReducer.tableData
  );
  let layout = {
    xaxis: {},
    yaxis: {},
    title: "",
  };

  let plotData: Array<Partial<PlotData>> = [];
  if (!_.isEmpty(attr)) {
    const tableId = attr.table_id;
    if (typeof tableState[tableId] !== "undefined") {
      const cols = tableState[tableId].cols;
      let xTitleArr = cols.filter((el: { key: string; name: string }) => {
        return el.key === "x";
      });
      let yTitleArr = cols.filter((el: { key: string; name: string }) => {
        return el.key === "y";
      });
      layout.xaxis = { title: xTitleArr[0]["name"] };
      layout.yaxis = { title: yTitleArr[0]["name"] };
      layout.title = attr.plot_title;

      const rows = tableState[tableId].rows;
      const xRow = attr.x,
        yRows = attr.y
          .slice(1, -1)
          .split(",")
          .map((item: string) => item.trim());

      // put all the same x row in each object with separate y rows
      for (let i = 0; i < yRows.length; i++) {
        plotData.push({});
        plotData[i].x = rows.map((child: { [xRow: string]: string }) =>
          parseFloat(child[xRow])
        );
        plotData[i].y = rows.map((child: { [yRow: string]: string }) =>
          parseFloat(child[yRows[i]])
        );
      }
    }
  }

  return <Plot data={plotData} layout={layout} />;
};

export default Chart;
