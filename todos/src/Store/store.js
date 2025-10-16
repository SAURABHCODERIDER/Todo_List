import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "../Slice/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer
});