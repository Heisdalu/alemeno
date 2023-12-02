import CourseCard from "../components/CourseCard/CourseCard";
import Wrapper from "../components/Wrapper/Wrapper";
import { db } from "../config/data";

const HomePage = () => {
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
export default HomePage;
