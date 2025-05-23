import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import WishCard from "./WishCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import { FaHeart, FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { user } = useContext(AuthContext);
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`https://blog-website-rho-henna.vercel.app/wishlist/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setWishes(data);
        setLoading(false);
      });
  }, [user]);

  return (
    <div className="bg-gradient-to-b from-base-100 to-base-200 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center">
            <FaHeart className="text-red-500 mr-3" /> Your Wishlist
          </h1>
          <div className="flex items-center justify-center">
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <h4 className="text-blue-600 font-semibold text-xl mx-4">
              Wishlisted Blogs: {wishes.length}
            </h4>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>

        {/* Wishlist Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {loading ? (
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex flex-col md:flex-row gap-6 p-4 border-b border-gray-200">
                  <div className="md:w-1/4">
                    <Skeleton height={180} className="rounded-lg" />
                  </div>
                  <div className="md:w-3/4">
                    <Skeleton height={30} width="70%" className="mb-4" />
                    <Skeleton count={3} className="mb-2" />
                    <div className="flex justify-between mt-4">
                      <Skeleton width={100} height={36} />
                      <Skeleton width={40} height={36} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : wishes.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16 px-4"
            >
              <FaBookmark className="text-blue-500 text-5xl mx-auto mb-6 opacity-50" />
              <h3 className="text-2xl font-medium text-gray-600 mb-4">Your wishlist is empty</h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">Browse our blogs and add your favorites to your wishlist to read them later.</p>
              <Link to="/allblogs">
                <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg">
                  Explore Blogs
                </button>
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-8">
              {wishes.map((wish) => (
                <motion.div
                  key={wish._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <WishCard
                    wish={wish}
                    wishes={wishes}
                    setWishes={setWishes}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
