import { Link } from "react-router-dom";

const Hero = ({ img, txt }) => {
  return (
    <div>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">
              {txt}
            </h1>
            <br />
            <Link className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-gray-500">
              Explore Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
