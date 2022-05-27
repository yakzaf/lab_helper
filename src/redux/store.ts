import { configureStore } from "@reduxjs/toolkit";
import dataBinderReducer from "./dataBinder";
import mathFieldValsReducer from "./mathFieldVals";

//TODO: remove serializable object check from middleware
const store = configureStore({
  reducer: { dBReducer: dataBinderReducer, mFReducer: mathFieldValsReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
