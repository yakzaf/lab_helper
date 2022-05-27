import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MIState } from "../types";

export const mathFieldVals = createSlice({
  name: "mathFields",
  initialState: {
    mathFields: {},
  },
  reducers: {
    recordInput: (
      state: MIState,
      action: PayloadAction<{ [key: string]: string }>
    ) => {
      let keysArr = Object.keys(action.payload);
      let key = keysArr[0];
      state.mathFields[key] = action.payload[key];
    },
  },
});

export const { recordInput } = mathFieldVals.actions;

export default mathFieldVals.reducer;
