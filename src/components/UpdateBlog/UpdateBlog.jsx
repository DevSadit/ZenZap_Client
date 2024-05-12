const UpdateBlog = () => {
  return (
    <div className="container mx-auto">
      <div className="text-left border-b border-gray-800">
        <h1 className="font-bold text-2xl">Add Blog</h1>
        <h4 className="text-blue-600 font-semibold text-4xl ">
          Showcase Your Writting Skill
        </h4>
      </div>
      <section className="max-w-4xl my-12 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        {/* <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          Post Blogs
        </h2> */}

        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200">Title</label>
              <input
                name="title"
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 dark:text-gray-200">
                Image Url
              </label>
              <input
                name="imgUrl"
                id="emailAddress"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div className="col-span-2">
              <label className="text-gray-700 dark:text-gray-200">
                Short Description
              </label>
              <input
                name="shortDescription"
                id=""
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="col-span-2">
              <p className="text-gray-700 mb-2 dark:text-gray-200">
                Description
              </p>
              <textarea
                name="longDescription"
                className="w-full min-h-80 h-3/4 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
                placeholder="Type your text here..."
              />
            </div>

            <div>
              <p className="text-gray-700 mb-2 dark:text-gray-200">
                Select Your Blog Category
              </p>
              <select name="category" className="select select-bordered w-full">
                <option disabled selected>
                  Chose Category
                </option>
                <option>Technology</option>
                <option>Busisness</option>
                <option>Food</option>
                <option>LifeStyle</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateBlog;
