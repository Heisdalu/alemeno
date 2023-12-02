import CourseCard from "../components/CourseCard/CourseCard";
import Wrapper from "../components/Wrapper/Wrapper";

const HomePage = () => {
  return (
    <Wrapper>
      <div className="space-y-[2rem] py-[1rem]">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </Wrapper>
  );
};
export default HomePage;
