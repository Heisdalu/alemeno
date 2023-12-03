import { configureStore } from "@reduxjs/toolkit";
import courseListReducer from "./slice/courseListSlice";
import studentReducer from "./slice/studentSlice";

export const store = configureStore({
  reducer: {
    courseList: courseListReducer,
    studentList: studentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
