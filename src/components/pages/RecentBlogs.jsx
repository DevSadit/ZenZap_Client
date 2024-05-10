import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import RecBlog from "./RecBlog";

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogss`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="text-center space-y-9">
      <div className="lg:space-y-3">
        <h1 className="font-bold text-4xl">Our Recent Blog Posts</h1>
        <p>
          Explore our vibrant collection of recent blog posts, where we share
          insights, stories, and ideas on a <br /> variety of topics. Stay
          up-to-date with our latest musings and join the conversation!
        </p>
      </div>

      {/* this div is for map the cart */}
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-28">
        {blogs.map((blog) => (
          <RecBlog key={blog._id} blog={blog}></RecBlog>
        ))}
      </div>
    </div>
  );
};

export default RecentBlogs;
