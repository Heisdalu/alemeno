import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="py-[1.5rem] flex items-center justify-center flex-col space-y-[1rem] md:flex-row md:justify-between md:space-y-0">
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
      <Link
        to="/"
        className="border-1 border-[#d1d7dc] p-[1rem] rounded-[0.5rem] text-black"
      >
        Go back home
      </Link>

      {!(pathname === "/dashboard") && (
        <Link
          to="/dashboard"
          className="bg-purple-600 p-[1rem] rounded-[0.5rem] text-white"
        >
          Enrolled Courses
        </Link>
      )}
    </div>
  );
};
export default Header;
