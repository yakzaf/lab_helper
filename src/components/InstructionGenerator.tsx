import "./InstructionGenerator.css";

import React, { useEffect, useState, FC } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript/html.js";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import DataTable from "./DataTable";
import Chart from "./Chart";
import { SimulatorMd } from "./Simulator";
import CodeParser from "./CodeParser";
import { ChartAttr, DTAttr, Attr } from "../types";

interface Props {
  filename: string;
}

const InstructionGenerator: FC<Props> = ({ filename }) => {
  const [inst, setInst] = useState("");
  console.log(filename);
  //fetching the instruction file
  useEffect(() => {
    const fetchFile = async () => {
      const file = await import(`../instructions/${filename}.md`);
      const res = await fetch(file.default);
      const text = await res.text();
      setInst(text);
    };

    fetchFile().catch(console.error);
  });

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
    jsParser: (attr: Attr) => CodeParser(attr),
  };

  return (
    <div className="mdown-container">
      <ReactMarkdown
        remarkPlugins={[
          directive,
          reactMarkdownRemarkDirective,
          remarkGfm,
          remarkMath,
        ]}
        rehypePlugins={[rehypeKatex]}
        components={customDirectives}
        className="mdown-contents"
      >
        {inst}
      </ReactMarkdown>
    </div>
  );
};

export default InstructionGenerator;
