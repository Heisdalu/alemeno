import "./index.css";
import CourseDetail from "./pages/CourseDetail";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-detail" element={<CourseDetail />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
