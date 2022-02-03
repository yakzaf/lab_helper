import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import directive from "remark-directive";
import { visit } from "unist-util-visit";
import remarkGfm from "remark-gfm";

const InstructionGenerator = () => {
  const [inst, setInst] = useState("");

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
    return (tree) => {
      visit(
        tree,
        ["textDirective", "leafDirective", "containerDirective"],
        (node) => {
          node.data = {
            hName: node.name,
            hProperties: node.attributes,
            ...node.data,
          };
          return node;
        }
      );
    };
  };

  const customDirectives = {
    testDirective: ({ attributes }) => {
      return <input {...attributes} />;
    },
    test1Directive: ({ attributes, children }) => {
      return <span {...attributes} />;
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
