import { FC, useEffect, useRef, useState } from "react";
import { PiVideo } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { LessonTypes } from "../../../@types";
// toggle button class
// edit aria controls id... add a number to make it unique

interface WeekLessonTypes {
  item: LessonTypes;
  count: number;
  specialkey: number;
}

const WeekLesson: FC<WeekLessonTypes> = ({ item, count, specialkey }) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleFunc = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (count === specialkey) {
      // focus
      buttonRef.current?.focus();
    }
  }, [count, specialkey]);

  return (
    <div
      aria-label={`week ${item.week}`}
      className="flex flex-col border-[1px] border-b-[0] border-[#d1d7dc] last:border-b-[1px]"
    >
      <button
        ref={buttonRef}
        aria-expanded={isOpen}
        aria-controls="buttonDropdown"
        aria-haspopup="true"
        onClick={toggleFunc}
        className="lessonBtn outline-[0] focus-within:outline-[0] focus-within:border-1 p-[1rem] border-b-[0px] border-[#d1d7dc] text-left flex items-center space-x-[1rem] bg-[#f7f9fa] break-all"
      >
        <span aria-hidden="true">
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
        <span className="capitalize">{item.topic}</span>
      </button>

      <div
        role="list"
        className={isOpen ? "flex flex-col" : "hidden"}
        id="buttonDropDown"
      >
        {item.content.map((subtopic, i) => (
          <div
            key={i}
            className="flex items-center p-[1rem] space-x-[1rem] break-all"
            role="listitem"
          >
            <span>
              <PiVideo />
            </span>
            <p className="">{subtopic}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WeekLesson;
