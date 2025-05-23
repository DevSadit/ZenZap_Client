
import { motion } from "framer-motion";
import { FaArrowRight, FaUser, FaTrophy } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturedRow = ({ blogData, i }) => {
  const { title, authorImg, authorName, _id, category } = blogData;
  
  // Trophy colors based on ranking
  const getTrophyColor = (index) => {
    switch(index) {
      case 0: return "text-yellow-500"; // Gold
      case 1: return "text-gray-400";  // Silver
      case 2: return "text-amber-700"; // Bronze
      default: return "text-blue-500"; // Others
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 items-center hover:bg-blue-50 transition-colors duration-300">
      {/* Rank Number - Mobile & Desktop */}
      <div className="hidden md:flex md:col-span-1 justify-center items-center">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${i < 3 ? 'bg-blue-100' : 'bg-gray-100'} font-bold`}>
          <FaTrophy className={`${getTrophyColor(i)} ${i < 3 ? 'block' : 'hidden'} mr-1`} />
          <span className={i < 3 ? 'hidden' : 'block'}>{i+1}</span>
        </div>
      </div>
      
      {/* Author - Mobile & Desktop */}
      <div className="flex items-center gap-3 md:col-span-3">
        <div className="relative">
          {i < 3 && (
            <div className="absolute -top-2 -left-2 md:hidden">
              <FaTrophy className={`${getTrophyColor(i)} text-lg`} />
            </div>
          )}
          <div className="avatar">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-100">
              <img 
                src={authorImg || "https://i.pravatar.cc/100"} 
                alt={authorName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="font-medium text-gray-900">{authorName || "Anonymous"}</div>
          <div className="text-xs text-gray-500 hidden md:block">Author</div>
        </div>
      </div>
      
      {/* Blog Title - Mobile & Desktop */}
      <div className="md:col-span-8 flex justify-between items-center">
        <div>
          <Link to={`/blogDetails/${_id}`}>
            <h3 className="font-semibold text-lg text-gray-800 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
          </Link>
          {category && (
            <span 
              className="text-xs px-2 py-1 rounded-full inline-block mt-2"
              style={{ 
                backgroundColor: 
                  category === "Technology" ? "#dbeafe" : 
                  category === "Lifestyle" ? "#fce7f3" : 
                  category === "Business" ? "#fef3c7" : 
                  "#e0f2fe",
                color: 
                  category === "Technology" ? "#2563eb" : 
                  category === "Lifestyle" ? "#db2777" : 
                  category === "Business" ? "#d97706" : 
                  "#0284c7"
              }}
            >
              {category}
            </span>
          )}
        </div>
        <Link 
          to={`/blogDetails/${_id}`}
          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          <motion.div 
            whileHover={{ x: 5 }}
            className="p-2"
          >
            <FaArrowRight />
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedRow;
