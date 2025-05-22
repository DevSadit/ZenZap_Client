import { FaArrowRight, FaBookOpen, FaRegBookmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const RecBlog = ({ blog }) => {
  const { user } = useContext(AuthContext);
  const currentUserEmail = user?.email;

  // destructuring
  const {
    title,
    image,
    shortDescription,
    category,
    _id,
    authorEmail,
    authorName,
  } = blog;

  // handle WishList
  const handleWishlist = (_id) => {
    const blogId = _id;

    if (user) {
      const wish = {
        title,
        image,
        shortDescription,
        category,
        blogId,
        authorEmail,
        authorName,
        currentUserEmail,
      };

      // sending blog data to the server
      fetch(`https://blog-website-rho-henna.vercel.app/wishlist`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(wish),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Added to Wishlist");
          }
        });
    } else {
      toast.error("Login to Add Blogs in Wishlist");
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full"
    >
      <figure className="relative overflow-hidden h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 m-2 rounded-md text-sm font-medium">
          {category}
        </div>
      </figure>
      
      <div className="card-body p-6">
        <h2 className="card-title text-xl font-bold text-base-content line-clamp-2">
          {title}
        </h2>
        
        <p className="text-base-content/70 my-3 line-clamp-3">
          {shortDescription}
        </p>
        
        <div className="card-actions justify-between mt-auto pt-4 border-t border-base-300">
          <Link to={`/blogDetails/${_id}`} className="btn btn-primary btn-sm">
            Read More <FaArrowRight size={14} />
          </Link>
          
          <button
            onClick={() => handleWishlist(_id)}
            className="btn btn-outline btn-sm"
            aria-label="Add to wishlist"
          >
            <FaRegBookmark size={14} /> Wishlist
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RecBlog;
