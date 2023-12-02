import Requirement from "../components/CourseDetail/Requirement";
import Syllabus from "../components/CourseDetail/Syllabus/Syllabus";
import Wrapper from "../components/Wrapper/Wrapper";

const CourseDetail = () => {
  return (
    <Wrapper>
      <div className="py-[1rem] space-y-1 pb-[3rem] md:space-y-[2rem]">
        <div className="md:grid md:[grid-template-columns:250px_1fr] lg:[grid-template-columns:350px_1fr] md:[grid-gap:2rem]">
          <div>
            <img
              className="w-full h-[auto]"
              src="https://res.cloudinary.com/dkwe6tfe7/image/upload/v1701473848/js_axmirm.jpg"
              alt=""
            />
          </div>
          <div className="space-y-1">
            <h1 className="break-words font-[700] text-[1.25rem] mt-[0.5rem] md:mt-[0]">
              Next.js is fun
            </h1>
            <p className="break-words">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id esse
              fugiat eius vitae itaque eos suscipit cumque dolorum ullam,
              pariatur corporis voluptatum aspernatur natus reiciendis numquam
              similique ea a cupiditate.
            </p>
            <div className="text-gray-500">Created by Divine Obi</div>
          </div>
        </div>

        <div className="space-y-[1rem] flex flex-col py-[1rem] md:py-[0] md:pb-[2rem]">
          <div className="flex flex-col space-y-1">
            <h1 className="text-[1.1rem] font-[500]">
              Requirements for this course
            </h1>
            <Requirement />
          </div>

          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Enrollment status:</h1>
            <div className="capitalize">Open</div>
          </div>
          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Course duration:</h1>
            <span>3 weeks</span>
          </div>
          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Schedule:</h1>
            <span className="capitalize">Mondays</span>
          </div>
          <div className="flex space-x-[0.5rem] items-center">
            <h1 className="text-[1.1rem] font-[500]">Location:</h1>
            <span className="capitalize break-words">Online</span>
          </div>

          <div>
            <Syllabus />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CourseDetail;
