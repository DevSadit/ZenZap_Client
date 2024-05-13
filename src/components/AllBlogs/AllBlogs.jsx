import axios from "axios";
import { useEffect, useState } from "react";
import RecBlog from "../pages/RecBlog";
import { Form } from "react-router-dom";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  // console.log(search);
  useEffect(() => {
    axios
      .get(`https://blog-website-rho-henna.vercel.app/blogss`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div className="my-3 container mx-auto flex justify-between items-center border-b border-gray-800 pb-2">
        <div className="text-left">
          <h1 className="font-bold text-2xl">The Blogosphere</h1>
          <h4 className="text-blue-600 font-semibold text-4xl ">
            Our Complete Collection
          </h4>
        </div>
        <div className="relative mt-4 md:mt-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
              ></path>
            </svg>
          </span>

          <form onChange={(e) => setSearch(e.target.value)}>
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
              placeholder="Search By Title"
            />
          </form>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-28 my-12">
        {blogs
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((blog) => (
            <RecBlog key={blog._id} blog={blog}></RecBlog>
          ))}
      </div>
    </div>
  );
};

export default AllBlogs;
