import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = ({ img, txt, p }) => {
  return (
    <div
      className="hero min-h-[600px] bg-fixed"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-70 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <motion.div 
          className="max-w-4xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {txt}
          </h1>
          {p && (
            <p className="mb-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {p}
            </p>
          )}
          <Link
            to="/allblogs"
            className="btn btn-primary btn-lg text-white normal-case"
          >
            Explore Our Blogs
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
