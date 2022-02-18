import React, { useEffect, useState, useReducer } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript/html.js";
import remarkGfm from "remark-gfm";
import DataGrid, { TextEditor } from "react-data-grid";
import _ from "lodash";
import Plot from "react-plotly.js";
import DataTable from "./DataTable";

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

  //hook for updating plot data
  useEffect(() => {
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
    dataTable: (attr) => DataTable(attr),

    // chart: (attr) => Chart(attr),
  };

  return (
    <ReactMarkdown
      remarkPlugins={[directive, reactMarkdownRemarkDirective, remarkGfm]}
      components={customDirectives}
    >
      {inst}
    </ReactMarkdown>
  );
};

export default InstructionGenerator;
