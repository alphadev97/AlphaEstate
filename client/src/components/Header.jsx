import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-500">Alpha97</span>
            <span className="text-blue-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-blue-50 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-blue-500" />
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-blue-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-blue-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/sign-in"}>
            <li className=" text-blue-700 hover:underline">Sign In</li>{" "}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;