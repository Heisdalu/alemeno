import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { studentListTypes } from "../../@types";
import { CourseEnrolledTypes } from "../../@types";

interface studentListPayloadTypes {
  student_new_data_state: CourseEnrolledTypes[];
  errorPresent: boolean;
  loading: boolean;
}

const initial_state: studentListTypes = {
  data: [],
  error: false,
  loading: true,
};

const studentListSlice = createSlice({
  name: "studentlist",
  initialState: initial_state,
  reducers: {
    studentUpdate(state, action: PayloadAction<studentListPayloadTypes>) {
      state.data = action.payload.student_new_data_state;
      state.error = action.payload.errorPresent;
      state.loading = action.payload.loading;
    },
  },
});

export const { studentUpdate } = studentListSlice.actions;
export default studentListSlice.reducer;
