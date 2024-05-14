import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
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
    <div className="text-center space-y-9">
      <div className="lg:space-y-3">
        <motion.h1
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            duration: "3",
            delay: "0.9",
          }}
          className="font-bold mb-3 text-5xl"
        >
          Our Recent Blog Posts
        </motion.h1>
        <motion.p
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{
            duration: "3",
            delay: "1",
          }}
          className="mx-5 md:my-0 mt-3"
        >
          Explore our vibrant collection of recent blog posts, where we share
          insights, stories, and ideas on a <br /> variety of topics. Stay
          up-to-date with our latest musings and join the conversation!
        </motion.p>
      </div>

      {/* this div is for map the cart */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-28">
        {loading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#2563EB">
            <Skeleton count={3} baseColor="#D1D5DB"></Skeleton>
          </SkeletonTheme>
        ) : (
          blogs.map((blog) => <RecBlog key={blog._id} blog={blog}></RecBlog>)
        )}
      </div>
      <Link to="/allblogs">
        <button className="btn text-white font-bold mt-10 px-7 py-3 bg-blue-600">
          All Blogs
        </button>
      </Link>
    </div>
  );
};

export default RecentBlogs;
