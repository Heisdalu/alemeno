import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseDetailTypes } from "../../@types";

export interface courseListTypes {
  data: CourseDetailTypes[];
  error: boolean;
  loading: boolean;
}

interface CourseListPayloadTypes {
  new_data_state: CourseDetailTypes[];
  errorPresent: boolean;
  loading: boolean;
}

const initial_state: courseListTypes = {
  data: [],
  error: false,
  loading: true,
};

const courseListSlice = createSlice({
  name: "courselist",
  initialState: initial_state,
  reducers: {
    update(state, action: PayloadAction<CourseListPayloadTypes>) {
      state.data = action.payload.new_data_state;
      state.error = action.payload.errorPresent;
      state.loading = action.payload.loading;
    },
  },
});

export const { update } = courseListSlice.actions;
export default courseListSlice.reducer;
