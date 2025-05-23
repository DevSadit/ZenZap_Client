import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRow from "./FeaturedRow";
import { motion } from "framer-motion";
import { FaTrophy, FaSpinner } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FeaturedBlogs = () => {
  // getting data
  const [blogDatas, setBlogDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`https://blog-website-rho-henna.vercel.app/top-posts`);
        setBlogDatas(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-base-100 to-base-200 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-3">
            <FaTrophy className="text-yellow-500 text-3xl mr-3" />
            <h1 className="font-bold text-3xl md:text-4xl text-gray-800">Popular Posts</h1>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <h4 className="text-blue-600 font-semibold text-xl md:text-2xl mx-4">
              Top {blogDatas.length} Articles
            </h4>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore standout pieces that demand your attention
          </p>
        </motion.div>

        {/* Featured Blogs Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {loading ? (
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                <Skeleton width={100} height={30} />
                <Skeleton width={150} height={30} />
                <Skeleton width={200} height={30} />
              </div>
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="mb-6 pb-6 border-b border-gray-100 last:border-0">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    <Skeleton circle width={40} height={40} />
                    <div className="flex-1">
                      <Skeleton width={80} height={24} className="mb-2" />
                      <Skeleton width={"100%"} height={30} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : blogDatas.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-gray-500 text-lg">No popular posts available at the moment.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 text-gray-700 font-semibold hidden md:grid">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-3">Author</div>
                <div className="col-span-8">Title</div>
              </div>
              
              {blogDatas.map((blogData, i) => (
                <motion.div
                  key={blogData._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <FeaturedRow i={i} blogData={blogData} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
