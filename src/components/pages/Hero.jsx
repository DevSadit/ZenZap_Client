import { Link } from "react-router-dom";

const Hero = ({ img, txt, p }) => {
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
            <h1 className="text-3xl md:text-4xl font-semibold text-white lg:text-5xl">
              {txt}
            </h1>
            <p className="md:w-1/2 hidden md:block md:px-0 text-gray-200 mt-4 mx-auto">{p}</p>
            <br />
            <Link
              to="/allblogs"
              className="w-full px-5 md:px-8 py-4  mt-5 text-sm md:text-lg font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-gray-500"
            >
              Explore Our Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
