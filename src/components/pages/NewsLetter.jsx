import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
const NewsLetter = () => {
  const formRef = React.createRef();
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      if (email.length > 0) {
        toast.success("Thank you for subscribing to our newsletter!");
      }
    }

    // clear form
    formRef.current.reset();
  };
  //
  return (
    <section className="flex flex-col container md:my-28 max-w-5xl mx-auto overflow-hidden bg-white rounded-xl shadow-xl shadow-[#7da2f2] dark:bg-gray-800 md:flex-row md:h-80">
      <div className="md:flex md:items-center md:justify-center md:w-1/2  md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
          <h2 className="text-3xl font-bold text-black dark:text-white text-center md:text-left">
            Subscribe to
            <span className="text-blue-600 dark:text-blue-400">
              {" "}
              ZenZap Newsletter
            </span>{" "}
            and stay updated.
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
            {"Don't"} miss anything. Get all the latest posts delivered straight
            to your inbox. {"It's"} free!
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
        <form onSubmit={handleSubscribe} ref={formRef}>
          <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
              type="email"
              name="email"
              placeholder="your email"
              aria-label="Enter your email"
            />

            <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:bg-gray-600 focus:outline-none">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
