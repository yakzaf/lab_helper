import "./InstructionGenerator.css";

import React, { useState, FC } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript/html";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import DataTable from "./DataTable";
import Chart from "./Chart";
import Simulator from "./Simulator";
import CodeParser from "./CodeParser";
import MathInput from "./MathInput";
import Image from "./Image";
import { ChartAttr, DTAttr, Attr, MIAttr, MOAttr, ImageAttr } from "../types";
import MathOutput from "./MathOutput";

interface Props {
  filename: string;
}

const InstructionGenerator: FC<Props> = ({ filename }) => {
  const [inst, setInst] = useState("");
  //fetching the instruction file

  const fetchFile = async () => {
    try {
      const file = await import(`../instructions/${filename}.md`);
      const res = await fetch(file.default);
      const text = await res.text();
      setInst(text);
    } catch (err) {
      console.error(err);
    }
  };

  fetchFile();

  const reactMarkdownRemarkDirective = () => {
    return transform;

    function transform(tree: any) {
      visit(tree, ondirective);
    }

    function ondirective(node: any) {
      let data = node.data || (node.data = {});
      // console.log(node);
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
    circuitSim: (attr: any) => Simulator(attr),
    jsParser: (attr: Attr) => CodeParser(attr),
    mathInput: (attr: MIAttr) => MathInput(attr),
    mathOutput: (attr: MOAttr) => MathOutput(attr),
    image: (attr: ImageAttr) => Image(attr),
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
