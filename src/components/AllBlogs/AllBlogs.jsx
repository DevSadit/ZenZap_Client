import axios from "axios";
import { useEffect, useState } from "react";
import RecBlog from "../pages/RecBlog";
import { FaSearch } from "react-icons/fa";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
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
  
  const filteredBlogs = blogs.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="bg-base-200 rounded-xl p-6 md:p-10 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-base-content">
              The Blogosphere
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Our Complete Collection
            </h2>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                className="input input-bordered w-full md:w-80 pl-10 pr-4 py-3"
                placeholder="Search by title..."
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/50" />
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
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
        <>
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No blogs found matching your search</h3>
              <p className="text-base-content/70">Try a different search term or browse all our blogs</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <RecBlog key={blog._id} blog={blog} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AllBlogs;
