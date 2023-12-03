import { useEffect, useRef } from "react";
import { randomDueDate } from "../../helper";

interface CourseEnrolled {
  thumbnail: string;
  topic: string;
  text: string;
  enrolledPercent: number;
}

const CourseEnrolled = () => {
  const progessRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (progessRef.current) {
      progessRef.current.style.width = "10%";
    }
  }, []);

  return (
    <div className="max-w-[350px]">
      <div className="max-w-[350px]">
        <img
          src="https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701473849/py_hhygoa.jpg"
          className="w-[100%] h-[auto]"
          alt=""
        />
      </div>
      <div className="py-[0.5rem] space-y-[0.5rem]">
        <h1>Next is Fun</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum,
          molestiae. Veniam voluptatem aliquam harum sit sed, possimus
          consequuntur error dicta.
        </p>
        <div aria-label="due date">{randomDueDate()}</div>
        <div className="space-y-[1rem]">
          <div>
            <div
              aria-label="progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={50}
              className="max-w-[300px] bg-[#d1d7dc]"
            >
              <div
                ref={progessRef}
                className={`h-[5px] w-[0] bg-blue-500 rounded-[0.5rem]`}
              ></div>
            </div>
            <span>20% complete</span>
          </div>
          <button className="rounded-[0.5rem] bg-purple-500 text-white p-[0.5rem]">
            Mark as completed
          </button>
        </div>
      </div>
    </div>
  );
};
export default CourseEnrolled;
