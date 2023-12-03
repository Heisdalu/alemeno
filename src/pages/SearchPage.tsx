import Wrapper from "../components/Wrapper/Wrapper";
import { db } from "../config/data";
import CourseCard from "../components/CourseCard/CourseCard";
import { useEffect } from "react";

const SearchPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <Wrapper>
      <div className="space-y-[2rem] py-[1rem]">
        {db.map((item) => (
          <CourseCard key={item.id} data={item} />
        ))}
      </div>
    </Wrapper>
  );
};
export default SearchPage;
