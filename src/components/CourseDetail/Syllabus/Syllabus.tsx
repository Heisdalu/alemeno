import WeekLesson from "./WeekLesson";
import { LessonTypes } from "../../../@types";
import { useState, useEffect } from "react";
const Syllabus = () => {
  // improve web accesibilty for keyboards user using arrow keys
  const [count, setCount] = useState(0);

  useEffect(() => {
    const func = (e: KeyboardEvent) => {
      console.log(e);
    };
    window.addEventListener("keydown", func);

    return () => window.removeEventListener("keydown", func);
  }, []);

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

  return (
    <div className="space-y-[1rem] max-w-[650px]">
      <h1 className="text-[1.2rem] font-[500]">Courses Syallbes</h1>
      <div>
        {data.map((item: LessonTypes) => (
          <WeekLesson item={item} key={item.week} />
        ))}
      </div>
    </div>
  );
};
export default Syllabus;
