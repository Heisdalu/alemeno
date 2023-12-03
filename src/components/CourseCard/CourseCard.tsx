import { FC } from "react";
import { CourseCardTypes } from "../../@types";
import { Link } from "react-router-dom";

import { CiHeart } from "react-icons/ci";
// import { FcLike } from "react-icons/fc";
// mnumber of students liked #f23
interface Props {
  data: CourseCardTypes;
}

const CourseCard: FC<Props> = ({ data }) => {

  return (
    <div className="max-w-[350px] mx-auto md:grid md:[grid-template-columns:250px_1fr] md:[grid-gap:1.5rem] md:max-w-[none]">
      <Link to={`/course-detail?course=${data.id}`}>
        <div className="max-w-[400px]">
          <img
            src={data.thumbnail}
            className=" bg-gray-200 h-[auto] w-[100%]"
            alt={data.name}
          />
        </div>
      </Link>
      <div
        aria-label="Course Information"
        className=" pt-[0.3rem] space-y-[0.3rem] md:py-[0]"
      >
        <Link to={`/course-detail?course=${data.id}`}>
          <h1 className="bg-red font-[700] text-[1.2rem] break-words">
            {data.name}
          </h1>
          <p className=" break-words">{data.description}</p>
        </Link>
        <div className="flex items-center space-x-[0.3rem]">
          {<CiHeart />}{" "}
          <span className="text-[0.8rem]">
            {data.students.length === 0 ? "" : data.students.length}
          </span>
        </div>
        <Link to={`/course-detail?course=${data.id}`}>
          <div className="text-gray-500 flex space-x-[0.4rem]">
            <h3>Instructor:</h3>
            <span className="break-words">{data.instructor}</span>
          </div>
          <div className="md:flex md:space-x-[1rem]">
            <div aria-label="course duration">{data.duration}</div>
            <div className="flex space-x-[1rem]">
              <div
                aria-label="enrollment status"
                className="px-[0.5rem] rounded-[0.5rem] border-1"
              >
                {data.enrollmentStatus}
              </div>
              <div aria-label="course location">{data.location}</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default CourseCard;
