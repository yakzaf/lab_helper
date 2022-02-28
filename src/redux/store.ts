import { configureStore } from "@reduxjs/toolkit";
import dataBinderReducer from "./dataBinder";

//TODO: remove serializable object check from middleware
const store = configureStore({
  reducer: { dBReducer: dataBinderReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
