import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://blog-website-rho-henna.vercel.app/blogsss/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://blog-website-rho-henna.vercel.app/blogss/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remaining = blogs.filter(blog => blog._id !== id);
              setBlogs(remaining);
              Swal.fire(
                "Deleted!",
                "Your blog has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {user?.displayName}'s Blog
          </h1>
          <div className="flex items-center justify-center">
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
            <h4 className="text-blue-600 font-semibold text-xl mx-4">
              Total Blogs: {blogs.length}
            </h4>
            <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Blog Cards Section */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Skeleton height={200} />
                <div className="p-5">
                  <Skeleton height={24} width="80%" />
                  <Skeleton height={20} width="40%" className="mt-2" />
                  <div className="mt-4">
                    <Skeleton height={36} width="100%" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-medium text-gray-600">You haven't created any blogs yet</h3>
            <Link to="/addblogs">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                Create Your First Blog
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {blog.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
                      {blog.title}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold text-white rounded-full" 
                          style={{ 
                            backgroundColor: 
                              blog.category === "Technology" ? "#6366f1" : 
                              blog.category === "Lifestyle" ? "#ec4899" : 
                              blog.category === "Business" ? "#f59e0b" : "#3b82f6" 
                          }}>
                      {blog.category}
                    </span>
                  </div>
                  
                  {blog.shortDescription && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.shortDescription}
                    </p>
                  )}
                  
                  <div className="flex justify-between items-center mt-4">
                    <Link to={`/blogDetails/${blog._id}`}>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-300">
                        Read More
                      </button>
                    </Link>
                    
                    <div className="flex space-x-2">
                      <Link to={`/updateBlog/${blog._id}`}>
                        <button className="p-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition duration-300">
                          <FaEdit size={18} />
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDelete(blog._id)}
                        className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition duration-300"
                      >
                        <FaTrashAlt size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBlogs;
