const CourseCard = () => {
  // bg-yellow-300 bg-green-300
  return (
    <div className="border-1 max-w-[350px] mx-auto md:grid md:[grid-template-columns:250px_1fr] md:[grid-gap:1.5rem] md:max-w-[none]">
      <div className="max-w-[400px]">
        <img
          src="https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701473848/js_axmirm.jpg"
          className=" bg-gray-200 h-[auto] w-[100%]"
          alt=""
        />
      </div>
      <div
        aria-label="Course Information"
        className=" pt-[0.3rem] space-y-[0.3rem] md:py-[0]"
      >
        <h1 className="bg-red font-[700] text-[1.2rem] break-words">Next</h1>
        <p className=" break-words">
          Modern JavaScript from the beginining - all the way up to JavaScript
          expert. The Must have JavaScript course
        </p>
        <div className="text-gray-500 flex space-x-[0.4rem]">
          <h3>Instructor:</h3>
          <span>David Smith</span>
        </div>
        <div className="md:flex md:space-x-[1rem]">
          <div aria-label="course duration">3 weeks</div>
          <div className="flex space-x-[1rem]">
            <div
              aria-label="enrollment status"
              className="px-[0.5rem] rounded-[0.5rem] bg-green-300"
            >
              Open
            </div>
            <div aria-label="course location">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
