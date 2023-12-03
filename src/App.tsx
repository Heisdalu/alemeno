import "./index.css";
import CourseDetail from "./pages/CourseDetail";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import SearchPage from "./pages/SearchPage";
import useId from "./hooks/useId";
import { useEffect } from "react";
import { db } from "./config/firebase";
import { doc, onSnapshot, DocumentData } from "firebase/firestore";
import { update } from "./redux/slice/courseListSlice";
import { studentUpdate } from "./redux/slice/studentSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";

// fix any issue

function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useId();
  const courseList = useSelector((state: RootState) => state.courseList);
  const dispatch = useDispatch();

  const courseData = {
    ...courseList,
    id,
  };


  useEffect(() => {
    const fetchLatestChanges = async () => {
      // get all courses
      onSnapshot(doc(db, "courses", "ER73xsXKT6GnYIkJxZAn"), (doc) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const latestData: DocumentData | any = doc?.data();
        // if it returns undefined.. an error occured
        if (latestData) {
          dispatch(
            update({
              new_data_state: latestData.data,
              errorPresent: false,
              loading: false,
            })
          );
        } else {
          dispatch(
            update({
              new_data_state: [],
              errorPresent: true,
              loading: false,
            })
          );
        }
      });

      // get student dashboard as you long the first content
      // id might be null
      if (id) {
        onSnapshot(doc(db, "students", id), (doc) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const studentLatestData: DocumentData | any = doc?.data();
          // if it returns undefined.. an error occured
          if (studentLatestData) {
            dispatch(
              studentUpdate({
                student_new_data_state: studentLatestData.studentInfo || [],
                loading: false,
                errorPresent: false,
              })
            );
          } else {
            dispatch(
              studentUpdate({
                student_new_data_state: [],
                loading: false,
                errorPresent: true,
              })
            );
          }
        });
      }
    };
    fetchLatestChanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, id]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage {...courseData} />} />
        <Route
          path="/course-detail"
          element={<CourseDetail {...courseData} />}
        />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/search" element={<SearchPage {...courseData} />} />
        {/* <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </>
  );
}

export default App;
