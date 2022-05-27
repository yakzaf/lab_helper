import React, { FC } from "react";
import { ChartAttr, TableState } from "../types";

import { useSelector } from "react-redux";

import { PlotData, PlotType } from "plotly.js";
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
    showlegend: false,
  };

  let plotData: Array<Partial<PlotData>> = [];
  if (!_.isEmpty(attr)) {
    const tableId = attr.table_id;
    if (typeof tableState[tableId] !== "undefined") {
      let xTitleArr = [],
        yTitleArr = [];
      const yRows = attr.y
          .slice(1, -1)
          .split(",")
          .map((item: string) => item.trim()),
        traceTypes = attr.types
          .slice(1, -1)
          .split(",")
          .map((item: string) => item.trim());
      const cols = tableState[tableId].cols;
      xTitleArr = cols.filter((el: { key: string; name: string }) => {
        return el.key === attr.x;
      });
      for (let i = 0; i < yRows.length; i++) {
        yTitleArr.push(
          cols.filter((el: { key: string; name: string }) => {
            return el.key === yRows[i];
          })[0].name
        );
      }
      layout.xaxis = { title: xTitleArr[0]["name"] };
      layout.yaxis = { title: attr.ytitle };
      layout.showlegend = yTitleArr.length > 1;
      layout.title = attr.chart_title;

      const rows = tableState[tableId].rows;

      for (let i = 0; i < yRows.length; i++) {
        plotData.push({ name: yTitleArr[i] });
        plotData[i].x = rows.map((child: { [xRow: string]: string }) =>
          parseFloat(child[attr.x])
        );
        plotData[i].y = rows.map((child: { [yRow: string]: string }) =>
          parseFloat(child[yRows[i]])
        );

        plotData[i].type = traceTypes[i] as PlotType;
      }
    }
  }

  return (
    <div className="chart">
      <div
        className="chart-ctd"
        style={{ display: "grid", justifyContent: "center" }}
      >
        <Plot data={plotData} layout={layout} />
      </div>
      <p style={{ textAlign: "center" }}>{attr.caption}</p>
    </div>
  );
};

export default Chart;
