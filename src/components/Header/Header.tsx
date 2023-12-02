import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="border-1 py-[1.5rem] flex items-center justify-center flex-col space-y-[1rem] md:flex-row md:justify-between md:space-y-0">
      <div className="border-1 rounded-[0.5rem] flex items-center space-x-1 mx-auto px-1 md:mx-[0] md:w-[300px]">
        <label htmlFor="search">
          <CiSearch />
        </label>
        <input
          autoComplete="off"
          className="w-full border-[0] p-[0.5rem] outline-[0] md:py-[1rem]"
          type="search"
          name="search"
          id="search"
        />
      </div>

      <button className="bg-purple-600 p-[1rem] rounded-[0.5rem]">Enrolled Courses</button>
    </div>
  );
};
export default Header;
