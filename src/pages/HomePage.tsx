/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CourseDetailTypes } from "../@types";
import CourseCard from "../components/CourseCard/CourseCard";
import Loading from "../components/Loading/Loading";
import Wrapper from "../components/Wrapper/Wrapper";
import { useEffect, FC } from "react";
import { courseListTypes } from "../redux/slice/courseListSlice";
// import { getFirestore } from "firebase/firestore";

const HomePage: FC<courseListTypes> = (props) => {
  console.log(props);

  // const [userData, setUserData] = useState<any[]>([]);
  const clickMe = async () => {
    // const { data } = userData;
    // const shit = data.map((el: { id: number; students: string[] }) => {
    //   if (el.id === 1) {
    //     el.students.push("2345");
    //   }
    //   return el;
    // });
    // console.log(shit);
    // const washingtonRef = doc(db, "courses", "ER73xsXKT6GnYIkJxZAn");
    // // Set the "capital" field of the city 'DC'
    // await updateDoc(washingtonRef, {
    //   data: shit,
    // });
  };

  // console.log("current data", userData);

  useEffect(() => {
    window.scroll(0, 0);

    // func();
  }, []);

  return (
    <Wrapper>
      <div className="space-y-[2rem] py-[1rem]">
        <Loading />
        <button onClick={clickMe}>click me</button>
        {/* {db.map((item) => (
          <CourseCard key={item.id} data={item} />
        ))} */}
      </div>
    </Wrapper>
  );
};
export default HomePage;
