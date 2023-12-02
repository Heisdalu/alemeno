const CourseCard = () => {
  return (
    <div className="max-w-[500px]">
      <div>
        <img src="" className="w-[400px] bg-green-600" alt="" />
      </div>
      <div aria-label="Course Information">
        <h1 className="bg-red">Next</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vitae
          distinctio possimus saepe. Tempore, dicta aut? Illo consequatur
          laudantium, officiis dicta ut temporibus officia mollitia repellat
          dolorem facere quae magnam.
        </p>
        <div aria-label="course Instructor" className="">
          David Smith
        </div>
        <div aria-label="course duration">3 weeks</div>
        <div aria-label="course location">Online</div>
      </div>
    </div>
  );
};
export default CourseCard;
