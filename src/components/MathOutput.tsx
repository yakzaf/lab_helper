import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { MOAttr, MIState } from "../types";

const MathOutput: FC<MOAttr> = (attr) => {
  const [solvedVal, setSolvedVal] = useState("");
  const targetIds = attr.target_ids
    .slice(1, -1)
    .split(",")
    .map((item: string) => item.trim());
  let targetStates =
    useSelector((state: MIState) => state.mFReducer.mathFields) || {};
  let parsedEquation = attr.eq;
  for (let i = 0; i < targetIds.length; i++) {
    parsedEquation = parsedEquation.replaceAll(
      ` ${targetIds[i]} `,
      ` ${targetStates[targetIds[i]]} `
    );
  }

  useEffect(() => {
    try {
      setSolvedVal(
        Function('"use strict";return (' + parsedEquation + ")")() || ""
      );
    } catch (err) {
      console.log(err);
    }
  }, [targetStates]);

  return (
    <div className="math-output">
      <input value={solvedVal} readOnly />
    </div>
  );
};

export default MathOutput;
