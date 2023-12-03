import { FC, useEffect, useRef } from "react";

import { CourseEnrolledTypes } from "../../@types";

const CourseEnrolled: FC<CourseEnrolledTypes> = ({
  enrolledPercent,
  instructor,
  date,
  text,
  thumbnail,
  topic,
}) => {
  const progessRef = useRef<HTMLDivElement | null>(null);

  console.log(enrolledPercent);

  useEffect(() => {
    if (progessRef.current) {
      progessRef.current.style.width = `${enrolledPercent}%`;
    }
  }, [enrolledPercent]);

  return (
    <div className="max-w-[350px]">
      <div className="max-w-[350px]">
        <img src={thumbnail} className="w-[100%] h-[auto]" alt="" />
      </div>
      <div className="py-[0.5rem] space-y-[0.5rem]">
        <h1>{topic}</h1>
        <p>{text}</p>
        <div aria-label="due date">{date}</div>
        <div className="space-y-[1rem]">
          <button>Created by {instructor}</button>
          <div>
            <div
              aria-label="progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={enrolledPercent}
              className="max-w-[300px] bg-[#d1d7dc]"
            >
              <div
                ref={progessRef}
                className={`h-[5px] w-[0] bg-blue-500 rounded-[0.5rem]`}
              ></div>
            </div>
            <span>{enrolledPercent}% complete</span>
          </div>
          <button className="rounded-[0.5rem] bg-purple-500 text-white p-[0.5rem]">
            Mark as completed
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseEnrolled;
