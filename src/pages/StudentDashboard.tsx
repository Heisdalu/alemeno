import CourseEnrolled from "../components/CourseEnrolled/CourseEnrolled";
import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Loading from "../components/Loading/Loading";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { Link } from "react-router-dom";
/*
thumbnail
title
description
random date
random value.. 1,100
*/

const StudentDashboard = () => {
  const { data, error, loading } = useSelector(
    (state: RootState) => state.studentList
  );

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="h-[300px] pt-[2rem]">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <ErrorModal />;
  }

  if (data.length === 0) {
    return (
      <div className="h-[300px] grid place-items-center">
        <div className="flex flex-col space-y-[1rem]">
          <span>No course enrolled yet</span>
          <Link
            className="p-[0.5rem] bg-purple-500 rounded-[0.5rem] text-white"
            to="/"
          >
            Enroll some courses here
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="">
        <h1 className="text-center font-[700] text-[1.1rem] py-[0.5rem] md:text-[1.2rem]">
          My Dashboard
        </h1>
        <div className="space-y-[2rem] flex flex-col items-center md:space-y-0 md:items-start md:grid md:grid-cols-2 md:[grid-gap:2rem] lg:[grid-gap:4rem] py-[1rem]">
          {data.map((el) => (
            <CourseEnrolled
              key={el.topic}
              enrolledPercent={el.enrolledPercent}
              instructor={el.instructor}
              text={el.text}
              thumbnail={el.thumbnail}
              topic={el.topic}
              date={el.date}
              allData={data}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default StudentDashboard;
