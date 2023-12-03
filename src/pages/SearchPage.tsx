import Wrapper from "../components/Wrapper/Wrapper";
import CourseCard from "../components/CourseCard/CourseCard";
import { useEffect, FC } from "react";
import { courseListTypes } from "../@types";
import { useSearchParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ErrorModal from "../components/ErrorModal/ErrorModal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const SearchPage: FC<courseListTypes> = ({ data, error, loading }) => {
  const [course_name] = useSearchParams();
  const allCoureList = useSelector((state: RootState) => state.courseList.data);
  const course = course_name?.get("course")?.toLowerCase() || "";
  const courseItem = data.filter(
    (el) =>
      el.name.toLowerCase().includes(course) ||
      el.instructor.toLowerCase().includes(course) ||
      el.description.toLowerCase().includes(course)
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

  if (courseItem.length === 0 || !course) {
    return (
      <div className="h-[300px] pt-[2rem] grid place-items-center">
        <div>
          <h1>Course Not available</h1>
          <Link
            to="/"
            className="text-center block border-1 p-[0.5rem] rounded-[0.5rem] mt-[1rem]"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="space-y-[2rem] py-[1rem]">
        <div className="text-center">Your search: {course}</div>
        {courseItem.map((item) => (
          <CourseCard key={item.id} data={item} allData={allCoureList} />
        ))}
      </div>
    </Wrapper>
  );
};
export default SearchPage;
