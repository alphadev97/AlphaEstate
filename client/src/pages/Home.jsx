import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Top */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-blue-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-blue-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Alpha Estate is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of property to choose from.
        </div>

        <Link
          to={"/search"}
          className="bg-blue-700 text-white p-4 rounded-lg mt-3 hover:opacity-90 w-[160px]"
        >
          Let's get started..
        </Link>
      </div>

      {/* Swiper */}

      {/* Listing  results for offer, sale and rent*/}
    </div>
  );
};

export default Home;
