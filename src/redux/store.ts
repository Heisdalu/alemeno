import { configureStore } from "@reduxjs/toolkit";
import courseListReducer from "./slice/courseListSlice";

export const store = configureStore({
  reducer: {
    courseList: courseListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
