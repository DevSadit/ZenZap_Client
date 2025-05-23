import { FaTrash, FaArrowRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const WishCard = ({ wish, wishes, setWishes }) => {
  // destructuring the wish.
  const { title, _id, blogId, image, shortDescription, category, authorName } = wish;

  const handleDeleteWish = (blogId) => {
    Swal.fire({
      title: "Remove from wishlist?",
      text: "You can always add it back later",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
      borderRadius: "10px",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete card
        fetch(`https://blog-website-rho-henna.vercel.app/wishlists/${blogId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Removed!",
                text: "Blog removed from your wishlist",
                icon: "success",
                confirmButtonColor: "#3085d6",
              });

              // now reset the state to update update the ui
              const remaining = wishes.filter((wish) => {
                return wish.blogId !== blogId;
              });
              setWishes([...remaining]);
            }
          });
      }
    });
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-6 p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">
      {/* Image Container */}
      <div className="md:w-1/4 h-60 md:h-auto overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      {/* Content Container */}
      <div className="md:w-3/4 flex flex-col justify-between">
        <div>
          {/* Category Badge */}
          <div className="mb-3">
            <span 
              className="px-3 py-1 text-xs font-semibold text-white rounded-full inline-block" 
              style={{ 
                backgroundColor: 
                  category === "Technology" ? "#6366f1" : 
                  category === "Lifestyle" ? "#ec4899" : 
                  category === "Business" ? "#f59e0b" : "#3b82f6" 
              }}
            >
              {category}
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
            {title}
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-3">
            {shortDescription}
          </p>
          
          {/* Author */}
          <div className="flex items-center text-gray-500 mb-4">
            <FaUser className="mr-2 text-blue-500" />
            <span className="italic">By {authorName}</span>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
          <Link
            to={`/blogDetails/${blogId}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-sm hover:shadow-md"
          >
            Read Now
            <FaArrowRight className="ml-2" />
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleDeleteWish(blogId)}
            className="p-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition duration-300"
            aria-label="Remove from wishlist"
          >
            <FaTrash className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
