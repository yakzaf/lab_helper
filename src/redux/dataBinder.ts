import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TableState } from "../types";

export const dataBinderSlice = createSlice({
  name: "dataBinder",
  initialState: {
    tableData: {},
  },
  reducers: {
    addData: (
      state: TableState,
      action: PayloadAction<{ [key: string]: object }>
    ) => {
      let keysArr = Object.keys(action.payload);
      let key = keysArr[0];
      state.tableData[key] = action.payload[key];
    },
  },
});

export const { addData } = dataBinderSlice.actions;

export default dataBinderSlice.reducer;
