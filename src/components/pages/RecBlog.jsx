import { FaArrowRight, FaBookOpen } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
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
      console.log(wish);

      // sendind blog data to the server
      fetch(`http://localhost:5000/wishlist`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(wish),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Added to Wishlist");
            // Navigate("/");
          }
          // this.myFormRef.reset();
        });
    } else {
      toast.error("Login to Add Blogs in Wishlist");
    }
  };
  return (
    <div className="overflow-hidden h-[560px] bg-white mx-6 md:mx-0 rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover object-center w-full h-56"
        src={image}
        alt="avatar"
      />

      <div className="flex items-center px-6 py-3 bg-gray-900">
        <FaBookOpen className="text-white" />

        <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h1>

        <p className="py-2 text-gray-700 dark:text-gray-400">
          {shortDescription}
        </p>

        <div className="flex items-center mt-4 text-gray-700 gap-x-3 dark:text-gray-200">
          <FaArrowRight className="text-gray-800" />

          <Link to={`/blogDetails/${_id}`}>
            <button className="px-3 py-2 text-sm font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">
              Details
            </button>
          </Link>
        </div>

        <div className="flex items-center mt-4 text-gray-700 gap-x-3 dark:text-gray-200">
          <FaArrowRight className="text-gray-800" />
          <button
            onClick={() => {
              handleWishlist(_id);
            }}
            className="px-3 py-2 text-sm font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Add in Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecBlog;
