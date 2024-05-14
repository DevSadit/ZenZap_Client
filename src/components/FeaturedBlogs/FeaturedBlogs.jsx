import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedRow from "./FeaturedRow";

const FeaturedBlogs = () => {
  // getting data
  const [blogDatas, setBlogDatas] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`https://blog-website-rho-henna.vercel.app/top-posts`);
        setBlogDatas(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogData();
  }, []);
  return (
    <div className="overflow-x-auto px-2 container mx-auto">
      <div className="text-left mb-4 border-b border-gray-800 pb-2 mb">
        <h1 className="font-bold  text-xl">Popular Posts</h1>
        <h4 className="text-blue-600 font-semibold text-4xl ">
          Explore standout pieces that demand your attention
        </h4>
      </div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Number</th>
            <th>Blog Author</th>
            <th>Blog Title</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {blogDatas.map((blogData, i) => (
            <FeaturedRow i={i} key={blogData._id} blogData={blogData}></FeaturedRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeaturedBlogs;
