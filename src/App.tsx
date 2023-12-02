import "./index.css";
import CourseDetail from "./pages/CourseDetail";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-detail" element={<CourseDetail />} />
      </Routes>
    </>
  );
}

export default App;
