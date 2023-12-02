import WeekLesson from "./WeekLesson";
import { LessonTypes } from "../../../@types";
import { useState, useEffect } from "react";
const Syllabus = () => {
  // improve web accesibilty for keyboards user using arrow keys
  const [count, setCount] = useState(0);

  const data = [
    {
      week: 1,
      topic: "Introduction To Javascript",
      content: [
        "Welcome to the course, amazing to have you on board of this JavaScript course!",
        "Let me walk you through the content of this complete JavaScript course and explain what you're going to learn!",
      ],
    },
    {
      week: 2,
      topic: "How JavaScript Is Executed",
      content: [
        "Let's have a look at how JavaScript is executed",
        "what the browser's role is and how all these pieces fit together!",
      ],
    },
    {
      week: 3,
      topic: "Javascript Executes In A Hosted Environmnet",
      content: [
        "JavaScript is a versatile language. That's awesome - but what does it mean?",
        "Let's explore the concept of host environments and see how JavaScript fits into that picture!",
      ],
    },
  ];

  useEffect(() => {
    const func = (e: KeyboardEvent): void => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (e.code === "ArrowDown" && e?.target?.closest(".lessonBtn")) {
        // using arrowdown to move down for keyboard users
        count < data.length - 1
          ? setCount((prev) => prev + 1)
          : setCount(() => 0);
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (e.code === "ArrowUp" && e?.target?.closest(".lessonBtn")) {
        // useing arrowdown to move around for keyboard users

        count > 0
          ? setCount((prev) => prev - 1)
          : setCount(() => data.length - 1);
      }
    };
    window.addEventListener("keydown", func);

    return () => window.removeEventListener("keydown", func);
  }, [count, data.length]);

  return (
    <div className="space-y-[1rem] max-w-[650px]">
      <h1 className="text-[1.2rem] font-[500]">Course Syllabus</h1>
      <div>
        {data.map((item: LessonTypes, i) => (
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
