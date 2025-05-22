import axios from "axios";
import { useEffect, useState } from "react";
import RecBlog from "./RecBlog";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`https://blog-website-rho-henna.vercel.app/blogss`)
      .then((res) => {
        setBlogs(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
            Our Recent Blog Posts
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-base-content/80 max-w-3xl mx-auto text-lg">
            Explore our vibrant collection of recent blog posts, where we share insights, 
            stories, and ideas on a variety of topics. Stay up-to-date with our latest 
            musings and join the conversation!
          </p>
        </motion.div>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-base-200 shadow-xl animate-pulse h-96">
              <div className="h-48 bg-base-300 rounded-t-xl"></div>
              <div className="card-body">
                <div className="h-6 bg-base-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-base-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-base-300 rounded w-5/6 mb-2"></div>
                <div className="h-4 bg-base-300 rounded w-4/6 mb-6"></div>
                <div className="flex justify-between">
                  <div className="h-10 bg-base-300 rounded w-1/3"></div>
                  <div className="h-10 bg-base-300 rounded w-1/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog) => (
            <RecBlog key={blog._id} blog={blog} />
          ))}
        </div>
      )}
      
      <div className="text-center mt-12">
        <Link to="/allblogs">
          <button className="btn btn-primary btn-lg text-white normal-case">
            View All Blogs
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RecentBlogs;
