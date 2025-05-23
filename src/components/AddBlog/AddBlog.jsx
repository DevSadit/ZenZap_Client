import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { motion } from 'framer-motion';
import { FaPen, FaImage, FaListAlt, FaQuoteLeft, FaTag, FaPaperPlane } from 'react-icons/fa';

const AddBlog = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState('');
    const [loading, setLoading] = useState(false);

    // Handle image URL preview
    const handleImageUrlChange = (e) => {
        setImagePreview(e.target.value);
    };

    const handleAddBlog = e => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;

        const category = form.category.value;
        const title = form.title.value;
        const image = form.imgUrl.value;
        const shortDescription = form.shortDescription.value;
        const longDescription = form.longDescription.value;
        const authorName = user.displayName;
        const authorImg = user.photoURL;
        const authorEmail = user.email;

        const blogData = {
            category,
            title,
            image,
            shortDescription,
            longDescription,
            authorEmail,
            authorImg,
            authorName,
        };

        // sending blog data to the server
        fetch(`https://blog-website-rho-henna.vercel.app/blogss`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(blogData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setLoading(false);
                if (data.insertedId) {
                    toast.success("Blog Posted Successfully");
                    navigate("/");
                }
            })
            .catch(error => {
                console.error("Error posting blog:", error);
                setLoading(false);
                toast.error("Failed to post blog. Please try again.");
            });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Add Blog</h1>
                    <h2 className="text-blue-600 font-semibold text-2xl mb-4">
                        Showcase Your Writing Skill
                    </h2>
                    <div className="flex items-center justify-center">
                        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                        <p className="text-gray-600 mx-4 max-w-2xl">
                            Share your thoughts, ideas, and stories with our community. Create engaging content that inspires and informs.
                        </p>
                        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
                    </div>
                </motion.div>

                {/* Main Form Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-xl shadow-xl overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row">
                        {/* Left Preview Panel (visible on lg screens and up) */}
                        <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white hidden lg:block">
                            <div className="sticky top-8">
                                <h3 className="text-2xl font-bold mb-6 flex items-center">
                                    <FaPen className="mr-3" /> Blog Preview
                                </h3>
                                <div className="h-1 w-16 bg-white/30 mb-6"></div>
                                
                                {imagePreview ? (
                                    <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
                                        <img 
                                            src={imagePreview} 
                                            alt="Preview" 
                                            className="w-full h-48 object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://placehold.co/600x400?text=Invalid+Image+URL';
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <div className="mb-6 rounded-lg overflow-hidden bg-white/10 h-48 flex items-center justify-center">
                                        <FaImage className="text-white/50 text-5xl" />
                                        <p className="text-white/50 ml-3">Image Preview</p>
                                    </div>
                                )}
                                
                                <p className="text-white/80 mb-6">
                                    Your blog will appear in our collection of posts, where readers can explore your insights and ideas.
                                </p>
                                
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                            <FaListAlt className="text-white" />
                                        </div>
                                        <span>Choose a relevant category</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                            <FaQuoteLeft className="text-white" />
                                        </div>
                                        <span>Write a compelling description</span>
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                                            <FaImage className="text-white" />
                                        </div>
                                        <span>Add an eye-catching image</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        {/* Right Form Panel */}
                        <div className="lg:w-3/5 p-8">
                            <form onSubmit={handleAddBlog} className="space-y-6">
                                {/* Title Field */}
                                <div className="form-control">
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <FaPen className="mr-2 text-blue-600" /> Title
                                    </label>
                                    <input 
                                        name='title'
                                        type="text"
                                        required
                                        placeholder="Enter an engaging title"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white text-gray-800 outline-none"
                                    />
                                </div>

                                {/* Image URL Field */}
                                <div className="form-control">
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <FaImage className="mr-2 text-blue-600" /> Image URL
                                    </label>
                                    <input 
                                        name='imgUrl'
                                        type="text"
                                        required
                                        placeholder="Enter image URL for your blog"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white text-gray-800 outline-none"
                                        onChange={handleImageUrlChange}
                                    />
                                </div>

                                {/* Short Description Field */}
                                <div className="form-control">
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <FaQuoteLeft className="mr-2 text-blue-600" /> Short Description
                                    </label>
                                    <input 
                                        name='shortDescription'
                                        type="text"
                                        required
                                        placeholder="Write a brief summary of your blog"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white text-gray-800 outline-none"
                                    />
                                </div>

                                {/* Long Description Field */}
                                <div className="form-control">
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <FaQuoteLeft className="mr-2 text-blue-600" /> Description
                                    </label>
                                    <textarea 
                                        name='longDescription'
                                        required
                                        placeholder="Write your full blog content here..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white text-gray-800 outline-none min-h-[200px] resize-y"
                                    />
                                </div>

                                {/* Category Selection */}
                                <div className="form-control">
                                    <label className="block text-gray-700 font-medium mb-2 flex items-center">
                                        <FaTag className="mr-2 text-blue-600" /> Select Your Blog Category
                                    </label>
                                    <select 
                                        name='category' 
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-200 bg-white text-gray-800 outline-none appearance-none"
                                    >
                                        <option value="" disabled selected>Choose Category</option>
                                        <option value="Technology">Technology</option>
                                        <option value="Business">Business</option>
                                        <option value="Food">Food</option>
                                        <option value="Lifestyle">Lifestyle</option>
                                    </select>
                                </div>

                                {/* Submit Button */}
                                <div className="form-control mt-8">
                                    <button 
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Publishing...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane className="mr-2" /> Publish Blog
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AddBlog;
