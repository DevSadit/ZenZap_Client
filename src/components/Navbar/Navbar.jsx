import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm lg:px-44 bg-[#CAF4FF]">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <Link to="/">
            <span className="font-extrabold text-xl">ZenZap</span>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div to="/">
              <div>Home</div>
            </div>
          </li>

          <li>
            <div to="/login">
              <div>All Blogs</div>
            </div>
          </li>
          <li>
            <div to="/login">
              <div>Featured Blogs</div>
            </div>
          </li>
        </ul>
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full" title="">
              <img
                referrerPolicy="no-referrer"
                alt="User Profile Photo"
                src=""
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <div>Add Blogs</div>
            </li>
            <li>
              <div>Wishlist</div>
            </li>
            <li className="mt-2">
              <button className="bg-gray-200 block text-center">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
