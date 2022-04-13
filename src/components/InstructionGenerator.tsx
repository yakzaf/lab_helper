import React, { useEffect, useState, FC } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript/html.js";
import remarkGfm from "remark-gfm";
import DataTable from "./DataTable";
import Chart from "./Chart";
import { SimulatorMd } from "./Simulator";
import { ChartAttr, DTAttr } from "../types";

const InstructionGenerator: FC = () => {
  const [inst, setInst] = useState("");

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

  const reactMarkdownRemarkDirective = () => {
    return transform;

    function transform(tree: any) {
      visit(tree, ondirective);
    }

    function ondirective(node: any) {
      let data = node.data || (node.data = {});
      if (
        node.type === "textDirective" ||
        node.type === "leafDirective" ||
        node.type === "containerDirective"
      ) {
        let hast: any = h(node.name, node.attributes);
        data.hName = node.name;
        data.hProperties = hast.properties;
      }
    }
  };

  const customDirectives: any = {
    dataTable: (attr: DTAttr) => DataTable(attr),
    chart: (attr: ChartAttr) => Chart(attr),
    circuitSim: (attr: any) => SimulatorMd(attr),
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
