import _ from "lodash";
import Plot from "react-plotly.js";
import React, { FC } from "react";
import { ChartAttr, TableState } from "../types";
import { useSelector } from "react-redux";
import { PlotData } from "plotly.js";

const Chart: FC<ChartAttr> = (attr) => {
  console.log(attr);
  const tableState = useSelector(
    (state: TableState) => state.dBReducer.tableData
  );
  let layout = {
    xaxis: {},
    yaxis: {},
    title: "",
  };

  let plotData: Partial<PlotData> = {};
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
        yRow = attr.y;
      console.log(xRow, yRow);
      plotData.x = rows.map((child: { [xRow: string]: string }) =>
        parseFloat(child[xRow])
      );
      plotData.y = rows.map((child: { [xRow: string]: string }) =>
        parseFloat(child[yRow])
      );
    }
  }

  return <Plot data={[plotData]} layout={layout} />;
};

export default Chart;
