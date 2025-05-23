import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const Comment = ({ cmnt }) => {
  const { comment, _id, userName, userPhoto } = cmnt;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          {userPhoto ? (
            <img 
              src={userPhoto} 
              alt={userName} 
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" 
            />
          ) : (
            <FaUserCircle className="w-12 h-12 text-gray-400" />
          )}
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-gray-800 mb-1">{userName || "Anonymous"}</h3>
          <p className="text-gray-700 whitespace-pre-line">{comment}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Comment;
