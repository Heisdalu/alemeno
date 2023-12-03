/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CourseCardTypes } from "../@types";
import CourseCard from "../components/CourseCard/CourseCard";
import Loading from "../components/Loading/Loading";
import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect, FC } from "react";
import { courseListTypes } from "../@types";
import ErrorModal from "../components/ErrorModal/ErrorModal";

const HomePage: FC<courseListTypes> = ({ data, error, loading }) => {
  const courseData: CourseCardTypes[] = data;

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="space-y-[2rem] py-[1rem]">
        {loading && <Loading />}
        {error && <ErrorModal />}
        {!loading &&
          !error &&
          courseData.map((item) => (
            <CourseCard key={item.id} data={item} allData={courseData} />
          ))}
        {}
      </div>
    </Wrapper>
  );
};
export default HomePage;
