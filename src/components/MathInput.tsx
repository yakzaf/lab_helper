import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { recordInput } from "../redux/mathFieldVals";
import { MIAttr } from "../types";

const MathInput: FC<MIAttr> = (attr) => {
  let fieldValues = {};
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleValueChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    try {
      fieldValues = {
        [attr.id]: e.currentTarget.value,
      };
    } catch (err) {
      console.log(err);
    }
    return dispatch(recordInput(fieldValues));
  };

  return (
    <div className="math-input">
      <input value={value} onInput={handleValueChange} />
    </div>
  );
};

export default MathInput;
