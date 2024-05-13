import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import Comment from "./Comment";
import { FaRegBookmark } from "react-icons/fa6";

const BlogDetails = () => {
  const { user } = useContext(AuthContext);
  const blogData = useLoaderData();
  const {
    title,
    image,
    shortDescription,
    longDescription,
    category,
    _id,
    authorEmail,
  } = blogData;
  // getting comment data from the server
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `https://blog-website-rho-henna.vercel.app/comments/${_id}`
        );
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, [_id]);

  //   handle the comment functionality
  const handleComment = (e) => {
    e.preventDefault();
    // console.log(`aso keli`);
    const comment = e.target.comment.value;
    const userUid = user?.uid;
    const userName = user?.displayName;
    const userEmail = user?.email;
    const userPhoto = user?.photoURL;
    const blogId = _id;

    const commentDetails = {
      userUid,
      comment,
      userName,
      userEmail,
      userPhoto,
      blogId,
    };

    // sending comment data to the server
    fetch(`https://blog-website-rho-henna.vercel.app/comments`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Comment Added");
        }
        // this.myFormRef.reset();
      });
  };
  return (
    <div className="container mx-auto mt-4 mb-10">
      {/*  */}
      <div className="text-left mb-4 border-b border-gray-800 pb-2 mb">
        <h1 className="font-bold  text-xl">category: {category}</h1>
        <h4 className="text-blue-600 font-semibold text-4xl ">{title}</h4>
      </div>
      {/*  */}
      <div className="flex flex-col gap-10">
        <div className="w-2/4 mx-auto ">
          <img src={image} className="rounded-md h-[500px] w-full " />
        </div>
        <div className="w-3/4 mx-auto text-left">
          <p className="font-semibold">{shortDescription}</p>
          <p>{longDescription}</p>
        </div>
      </div>
      {/* section for update */}
      {authorEmail === user?.email && (
        <div>
          <Link to={`/updateBlog/${_id}`}>
            <button className="btn btn-info w-full">Update</button>
          </Link>
        </div>
      )}
      {/* section for comments */}
      <div className="mt-10">
        <h1 className="font-bold text-4xl">{comments.length} Comments</h1>
        {
        user.email !== authorEmail && (
          <div className="flex gap-x-3 items-center mt-5">
            <div className="w-10 rounded-full">
              <img className="w-full rounded-full" src={user?.photoURL} />
            </div>
            <div className="w-full">
              <form onSubmit={handleComment} className="flex items-center">
                <textarea
                  name="comment"
                  className="p-3 w-full border rounded-lg border-black"
                  placeholder="Your Comment"
                ></textarea>
                <button className="btn bg-gray-800 text-white">Comment</button>
              </form>
            </div>
          </div>
        )
        }
        <hr
          className="my-7"
          style={{ backgroundColor: "black", height: "2px" }}
        />

        {/* this div is for maping the comments */}
        <div>
          {comments.map((cmnt) => (
            <Comment key={cmnt._id} cmnt={cmnt}></Comment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
