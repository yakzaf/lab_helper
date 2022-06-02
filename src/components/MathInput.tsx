import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { recordInput } from "../redux/mathFieldVals";
import { MIAttr } from "../types";

const MathInput: FC<MIAttr> = (attr) => {
  let fieldValues = {};
  const dispatch = useDispatch();

  const handleValueChange = (e: React.FormEvent<HTMLInputElement>) => {
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
    <input
      id={attr.id}
      onInput={handleValueChange}
      className={attr.className}
    />
  );
};

export default MathInput;
