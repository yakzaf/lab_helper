import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript/html.js";
import remarkGfm from "remark-gfm";
import DataGrid, { TextEditor } from "react-data-grid";

const InstructionGenerator = () => {
  const [inst, setInst] = useState("");
  const [rowsTest, setRows] = useState([
    { id: 0, title: "" },
    { id: 1, title: "" },
  ]);

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
    console.log(rowsTest);
  }, [rowsTest]);

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
      let cols = attr.columns.slice(1, -1).split(" , ");
      let colsObj = cols.map((x) => JSON.parse(x));
      for (let i = 0; i < colsObj.length; i++) {
        colsObj[i].editable = true;
        colsObj[i].editor = TextEditor;
      }

      let rows = attr.rows.slice(1, -1).split(" , ");
      let rowsObj = rows.map((x) => JSON.parse(x));
      // setRows(rowsObj);

      return (
        <DataGrid
          className={attr.className}
          id={attr.id}
          rows={rowsTest}
          onRowsChange={setRows}
          columns={colsObj}
        />
      );
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
