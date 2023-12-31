import Requirement from "../components/CourseDetail/Requirement";
import Syllabus from "../components/CourseDetail/Syllabus/Syllabus";
import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect, FC } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { courseListTypes } from "../@types";
import Loading from "../components/Loading/Loading";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import useId from "../hooks/useId";
import { generateRandomNumber, randomDueDate } from "../helper";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const CourseDetail: FC<courseListTypes> = ({ data, error, loading }) => {
  const { id } = useId();
  const [course_id] = useSearchParams();
  const navigate = useNavigate();
  const studentList = useSelector((state: RootState) => state.studentList.data);

  const courseDetailItem = data.find(
    (el) => el.id === Number(course_id?.get("course"))
  );

  /*
thumbnail
title
description
random date
random value.. 1,100
*/

  // i do not want to refetch this course_id.. since it's more of
  // a dummy project..instead i use the recently real time fetched data
  // so when there is a new chnage like liking courses.. it reflect as fast as possible

  const enrolledHandler = async () => {
    const mainData = studentList.filter(
      (el) => el.topic !== courseDetailItem?.name
    );

    const oldinfo = [
      ...mainData,
      {
        topic: courseDetailItem?.name,
        instructor: courseDetailItem?.instructor,
        thumbnail: courseDetailItem?.thumbnail,
        text: courseDetailItem?.description,
        date: randomDueDate(),
        enrolledPercent: generateRandomNumber(1, 70),
      },
    ];

    if (id) {
      try {
        await setDoc(doc(db, "students", id), {
          studentInfo: [...oldinfo],
        });

        navigate("/dashboard");
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [loading]);

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

  // if courseitemdetail is not found

  if (!courseDetailItem) {
    return (
      <div className="h-[300px] grid place-items-center">
        <div className="flex flex-col space-y-[1rem]">
          <span>No course found</span>
          <Link
            className="p-[0.5rem] bg-purple-500 rounded-[0.5rem] text-white"
            to="/"
          >
            Go back Home
          </Link>
        </div>
      </div>
    );
  }

  const status =
    courseDetailItem?.enrollmentStatus?.toLowerCase() === "closed"
      ? true
      : false;
  return (
    <Wrapper>
      <div className="py-[1rem] space-y-1 pb-[3rem] md:space-y-[2rem]">
        <div className="md:grid md:[grid-template-columns:250px_1fr] lg:[grid-template-columns:350px_1fr] md:[grid-gap:2rem]">
          <div>
            <img
              className="w-full h-[auto]"
              src={courseDetailItem?.thumbnail}
              alt={courseDetailItem?.name}
            />
          </div>
          <div className="space-y-1">
            <h1 className="break-words font-[700] text-[1.25rem] mt-[0.5rem] md:mt-[0]">
              {courseDetailItem?.name}
            </h1>
            <p className="break-words">{courseDetailItem?.description}</p>
            <div className="text-gray-500">
              Created by {courseDetailItem?.instructor}
            </div>
          </div>
        </div>

        <div className="space-y-[1rem] flex flex-col py-[1rem] md:py-[0] md:pb-[2rem]">
          <button
            onClick={enrolledHandler}
            disabled={status}
            className="disabled:bg-gray-400 max-w-[200px] bg-gray-600 p-[1rem] rounded-[0.5rem] text-white"
          >
            {status ? "Closed" : "Enroll to this course"}
          </button>
          <div className="flex flex-col space-y-1">
            <h1 className="text-[1.1rem] font-[500]">
              Requirements for this course
            </h1>
            <Requirement list={courseDetailItem?.prerequisites} />
          </div>

          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Enrollment status:</h1>
            <div className="capitalize">Open</div>
          </div>
          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Course duration:</h1>
            <span>{courseDetailItem?.duration}</span>
          </div>
          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Schedule:</h1>
            <span className="capitalize">{courseDetailItem?.schedule}</span>
          </div>
          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Location:</h1>
            <span className="capitalize break-words">
              {courseDetailItem?.location}
            </span>
          </div>

          <div>
            {courseDetailItem?.syllabus ? (
              <Syllabus list={courseDetailItem?.syllabus} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CourseDetail;
