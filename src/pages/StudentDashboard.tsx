import CourseEnrolled from "../components/CourseEnrolled/CourseEnrolled";
import Wrapper from "../components/Wrapper/Wrapper";

const StudentDashboard = () => {
  return (
    <Wrapper>
      <div className="">
        <h1 className="text-center font-[700] text-[1.1rem] py-[0.5rem] md:text-[1.2rem]">
          My Dashboard
        </h1>
        <div className="space-y-[2rem] flex flex-col items-center md:space-y-0 md:items-start md:grid md:grid-cols-2 md:[grid-gap:2rem] lg:[grid-gap:4rem] py-[1rem]">
          <CourseEnrolled />
          <CourseEnrolled />
          <CourseEnrolled />
          <CourseEnrolled />
          <CourseEnrolled />
        </div>
      </div>
    </Wrapper>
  );
};
export default StudentDashboard;
