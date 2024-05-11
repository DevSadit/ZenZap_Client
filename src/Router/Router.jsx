import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/pages/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AllBlogs from "../components/AllBlogs/AllBlogs";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allblogs",
        element: <AllBlogs></AllBlogs>,
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/blogss/${params.id}`),
      },
    ],
  },
]);

export default router;