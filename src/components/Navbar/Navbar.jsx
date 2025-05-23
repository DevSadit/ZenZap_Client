import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaBlog, FaBars, FaTimes, FaPlus, FaHeart, FaNewspaper, FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-white/90 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg group-hover:scale-105 transition-transform duration-200">
                <FaBlog className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-200">
                ZenZap
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {user && (
                <Link 
                  to="/" 
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive('/') 
                      ? 'text-purple-600' 
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  Home
                </Link>
              )}
              <Link 
                to="/allblogs" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/allblogs') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                All Blogs
              </Link>
              <Link 
                to="/featuredBlogs" 
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/featuredBlogs') 
                    ? 'text-purple-600' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Featured
              </Link>
            </div>
            
            {/* Right side */}
            <div className="flex items-center space-x-4">
              {!user ? (
                <Link 
                  to="/login" 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Login
                </Link>
              ) : (
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                    <img
                      src={user?.photoURL || 'https://i.pravatar.cc/150?img=3'}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="hidden sm:block text-sm font-medium text-gray-700">
                      {user?.displayName?.split(' ')[0] || 'User'}
                    </span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-3 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">
                        {user?.displayName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user?.email}
                      </p>
                    </div>
                    <div className="py-2">
                      <Link 
                        to="/myblogs" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <FaNewspaper className="mr-3 text-gray-400" />
                        My Blogs
                      </Link>
                      <Link 
                        to="/addblogs" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <FaPlus className="mr-3 text-gray-400" />
                        Add Blog
                      </Link>
                      <Link 
                        to="/wishlist" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150"
                      >
                        <FaHeart className="mr-3 text-gray-400" />
                        Wishlist
                      </Link>
                    </div>
                    <div className="border-t border-gray-100 py-2">
                      <button
                        onClick={logOut}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                      >
                        <FaSignOutAlt className="mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Mobile menu button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="w-5 h-5 text-gray-700" />
                ) : (
                  <FaBars className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-3 space-y-3">
              {user && (
                <Link 
                  to="/" 
                  className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive('/') 
                      ? 'text-purple-600' 
                      : 'text-gray-700'
                  }`}
                >
                  Home
                </Link>
              )}
              <Link 
                to="/allblogs" 
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/allblogs') 
                    ? 'text-purple-600' 
                    : 'text-gray-700'
                }`}
              >
                All Blogs
              </Link>
              <Link 
                to="/featuredBlogs" 
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/featuredBlogs') 
                    ? 'text-purple-600' 
                    : 'text-gray-700'
                }`}
              >
                Featured Blogs
              </Link>
              <Link 
                to="/faq" 
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive('/faq') 
                    ? 'text-purple-600' 
                    : 'text-gray-700'
                }`}
              >
                FAQ
              </Link>
              
            </div>
          </div>
      </nav>
      
      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;