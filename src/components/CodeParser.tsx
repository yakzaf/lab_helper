import "./CodeParser.css";

import React, { FC, useState } from "react";
import { Attr } from "../types";

const CodeParser: FC<Attr> = (attr) => {
  const [value, setValue] = useState("");
  const [parsedVal, setParsedVal] = useState("");

  const handleValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setParsedVal(Function('"use strict";return (' + value + ")")());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="code-parser">
      <form id="parser-form" onSubmit={handleSubmit}>
        <textarea
          id="parser-input"
          value={value}
          onChange={handleValueChange}
        />
        <input type="submit" value="Evaluate" className="btn btn-primary" />
      </form>
      <textarea id="parser-output" value={parsedVal} readOnly />
    </div>
  );
};

export default CodeParser;
