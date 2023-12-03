import WeekLesson from "./WeekLesson";
import { LessonTypes } from "../../../@types";
import { useState, useEffect, FC } from "react";
interface SyllabusTypes {
  list: LessonTypes[];
}

const Syllabus: FC<SyllabusTypes> = ({ list }) => {

  // improve web accesibilty for keyboards user using arrow keys
  const [count, setCount] = useState(0);

  useEffect(() => {
    const func = (e: KeyboardEvent): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (e.code === "ArrowDown" && e?.target?.closest(".lessonBtn")) {
        // using arrowdown to move down for keyboard users
        count < list.length - 1
          ? setCount((prev) => prev + 1)
          : setCount(() => 0);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (e.code === "ArrowUp" && e?.target?.closest(".lessonBtn")) {
        // useing arrowdown to move around for keyboard users

        count > 0
          ? setCount((prev) => prev - 1)
          : setCount(() => list.length - 1);
      }
    };
    window.addEventListener("keydown", func);

    return () => window.removeEventListener("keydown", func);
  }, [count, list.length]);

  return (
    <div className="space-y-[1rem] max-w-[650px]">
      <h1 className="text-[1.2rem] font-[500]">Course Syllabus</h1>
      <div>
        {list.map((item: LessonTypes, i) => (
          <WeekLesson
            item={item}
            key={item.week}
            count={count}
            specialkey={i}
          />
        ))}
      </div>
    </div>
  );
};
export default Syllabus;
