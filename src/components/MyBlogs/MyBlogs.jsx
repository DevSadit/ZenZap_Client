import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import TableRow from "./TableRow";

const MyBlogs = () => {
  const { user } = useContext(AuthContext);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blogsss/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [user]);

  return (
    <div className="container mx-auto">
      <div className="text-left pb-3 border-b border-gray-800">
        <h1 className="font-bold text-2xl">{user?.displayName}'s Blog</h1>
        <h4 className="text-blue-600 font-semibold text-4xl ">
          Total Blogs {blogs.length}
        </h4>
      </div>
      {/* this div is for map */}
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <span>Blog Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Update
                      </th>

                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y text-black divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {
                        blogs.map(blog=> <TableRow key={blog._id} blog={blog}></TableRow>)
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* this is the end */}
    </div>
  );
};

export default MyBlogs;
