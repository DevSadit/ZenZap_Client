import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import Comment from "./Comment";
import { FaRegBookmark, FaEdit, FaComment, FaUser, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

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
    authorName,
  } = blogData;
  
  // getting comment data from the server
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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

  //   handle the comment button functionality
  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    if (comment.length > 0) {
      setIsSubmitting(true);
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
          if (data.insertedId) {
            toast.success("Comment Added");
            e.target.comment.value = "";
            // Refresh comments
            axios.get(`https://blog-website-rho-henna.vercel.app/comments/${_id}`)
              .then(res => {
                setComments(res.data);
                setIsSubmitting(false);
              });
          }
        })
        .catch(err => {
          console.error(err);
          setIsSubmitting(false);
          toast.error("Failed to add comment");
        });
    } else {
      toast.error(`Please write something to add a comment`);
    }
  };
  
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header Section with Category and Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
            <FaTag className="mr-2" /> {category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            {title}
          </h1>
          <div className="flex items-center justify-center mt-6 text-gray-600">
            <div className="flex items-center">
              <FaUser className="mr-2 text-blue-600" />
              <span>{authorName || "Anonymous"}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {/* Featured Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src={image} 
              alt={title} 
              className="w-full h-auto md:h-[500px] object-cover" 
            />
          </motion.div>
          
          {/* Blog Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-10"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-xl font-medium text-gray-800 mb-6">{shortDescription}</p>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {longDescription}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Update Button for Author */}
        {authorEmail === user?.email && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 max-w-4xl mx-auto"
          >
            <Link to={`/updateBlog/${_id}`}>
              <button className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition duration-300 flex items-center justify-center">
                <FaEdit className="mr-2" /> Update This Blog
              </button>
            </Link>
          </motion.div>
        )}

        {/* Comments Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10"
        >
          <div className="flex items-center mb-8">
            <FaComment className="text-blue-600 mr-3" size={24} />
            <h2 className="text-2xl font-bold text-gray-800">
              {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
            </h2>
          </div>
          
          {/* Add Comment Form */}
          {user.email !== authorEmail && (
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Leave a comment</h3>
              <div className="flex gap-x-4">
                <div className="flex-shrink-0">
                  <img 
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" 
                    src={user?.photoURL || "https://i.pravatar.cc/100"} 
                    alt={user?.displayName || "User"}
                  />
                </div>
                <div className="flex-grow">
                  <form onSubmit={handleComment} className="space-y-4">
                    <div className="relative">
                      <textarea
                        name="comment"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[120px] text-gray-700"
                        placeholder="Share your thoughts..."
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300 flex items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Posting...' : 'Post Comment'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
          
          {/* Comments List */}
          <div className="space-y-6 mt-8">
            {comments.length === 0 ? (
              <div className="text-center py-10 text-gray-500">
                <p>No comments yet. Be the first to share your thoughts!</p>
              </div>
            ) : (
              comments.map((cmnt) => (
                <Comment key={cmnt._id} cmnt={cmnt} />
              ))
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetails;
