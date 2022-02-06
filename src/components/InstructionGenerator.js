import React, { useEffect, useState, useReducer } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript/html.js";
import remarkGfm from "remark-gfm";
import DataGrid, { TextEditor } from "react-data-grid";
import _ from "lodash";
import Plot from "react-plotly.js";

const InstructionGenerator = () => {
  const [inst, setInst] = useState("");
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [plotData, setPlotData] = useState({});

  //fetching the instruction file
  useEffect(() => {
    const fetchFile = async () => {
      const file = await import("../instructions/index.md");
      const res = await fetch(file.default);
      const text = await res.text();
      setInst(text);
    };

    fetchFile().catch(console.error);
  }, []);

  //hook for updating data table
  useEffect(() => {
    // console.log(rows);
    // console.log(cols);

    if (!_.isEmpty(rows)) {
      let data = [
        {
          x: [],
          y: [],
        },
      ];
      // let layout = { xaxis: { title: "" }, yaxis: { title: "" }, title: "" };

      for (let i = 0; i < rows.length; i++) {
        data[0]["x"].push(parseFloat(rows[i]["x"]));
        data[0]["y"].push(parseFloat(rows[i]["y"]));
      }
      //   let plotObj = {
      //     data: [
      //       {
      //         x: attr.x,
      //         y: attr.y,
      //         type: attr.type,
      //       },
      //     ],
      //     layout: {
      //       xaxis: { title: attr.xtitle },
      //       yaxis: { title: attr.ytitle },
      //       title: attr.plotTitle,
      //     },
      //   };
      setPlotData((prevState) => ({
        ...prevState,
        x: data[0]["x"],
        y: data[0]["y"],
      }));
      console.log(plotData);
    }
  }, [rows]);

  const reactMarkdownRemarkDirective = () => {
    return transform;

    function transform(tree) {
      visit(tree, ondirective);
    }

    function ondirective(node) {
      let data = node.data || (node.data = {});
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        let hast = h(node.name, node.attributes);
        data.hName = node.name;
        data.hProperties = hast.properties;
      }
    }
  };

  const customDirectives = {
    dataTable: (attr) => {
      let colsMd = attr.columns.slice(1, -1).split(" , ");
      let colsMdObj = colsMd.map((x) => JSON.parse(x));
      let rowsMd = attr.rows.slice(1, -1).split(" , ");
      let rowsMdObj = rowsMd.map((x) => JSON.parse(x));

      for (let i = 0; i < colsMdObj.length; i++) {
        colsMdObj[i].editable = true;
        colsMdObj[i].editor = TextEditor;
      }

      //set proper state for rows and cols ONCE per page load (cols don't change outside of the md file)
      if (!_.isEqual(cols, colsMdObj)) {
        setCols(colsMdObj);
        setRows(rowsMdObj);
      }

      return (
        <DataGrid
          className={attr.className}
          id={attr.id}
          rows={rows}
          onRowsChange={setRows}
          columns={cols}
        />
      );
    },

    chart: (attr) => {
      let layout = {};
      if (!_.isEmpty(attr)) {
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
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[directive, reactMarkdownRemarkDirective, remarkGfm]}
      components={customDirectives}
      children={inst}
    />
  );
};

export default InstructionGenerator;
