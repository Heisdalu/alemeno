import { FC, useEffect, useRef } from "react";

import { CourseEnrolledTypes } from "../../@types";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import useId from "../../hooks/useId";

const CourseEnrolled: FC<CourseEnrolledTypes> = ({
  enrolledPercent,
  instructor,
  date,
  text,
  thumbnail,
  topic,
  allData,
}) => {
  const progessRef = useRef<HTMLDivElement | null>(null);
  const { id } = useId();

  const completeButton = async () => {
    // const
    if (allData && id) {
      const item = structuredClone(allData).map((el) => {
        if (el.thumbnail === thumbnail) {
          el.enrolledPercent = 100;
        }
        return el;
      });
      try {
        await setDoc(doc(db, "students", id), {
          studentInfo: [...item],
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

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
            <span className="">{enrolledPercent}% complete</span>
          </div>
          <button
            onClick={completeButton}
            disabled={enrolledPercent === 100 ? true : false}
            className="disabled:bg-slate-600 disabled:hover:[cursor:not-allowed] rounded-[0.5rem] bg-purple-500 text-white p-[0.5rem]"
          >
            Mark as completed
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseEnrolled;
