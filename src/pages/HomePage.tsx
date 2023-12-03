import CourseCard from "../components/CourseCard/CourseCard";
import Loading from "../components/Loading/Loading";
import Wrapper from "../components/Wrapper/Wrapper";
import { db } from "../config/data";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="space-y-[2rem] py-[1rem]">
        <Loading />
        {db.map((item) => (
          <CourseCard key={item.id} data={item} />
        ))}
      </div>
    </Wrapper>
  );
};
export default HomePage;
