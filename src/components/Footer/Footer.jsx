import { Link } from "react-router-dom";
import { 
  FaBlog, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope, 
  FaArrowUp,
  FaHeart
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      if (email.length > 0) {
        toast.success("Thank you for subscribing us");
      }
    }

    // clear form
    formRef.current.reset();
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            
            {/* Brand Section */}
            <div className="text-center md:text-left md:max-w-xs">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                  <FaBlog className="text-white text-lg" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ZenZap
                </span>
              </div>
              <p className="text-gray-300 text-sm mb-6 max-w-xs">
                Exploring tech, lifestyle, and business insights for the modern thinker.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                {[
                  { icon: FaFacebookF, href: "#", color: "hover:text-blue-400" },
                  { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
                  { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="text-xs" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links & Newsletter */}
            <div className="flex flex-col items-center md:items-end">
              {/* Quick Links */}
              <div className="mb-8 text-center md:text-right">
                <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Blogs", path: "/allblogs" },
                    { name: "Featured", path: "/featuredBlogs" },
                    { name: "About", path: "/about" }
                  ].map((link, index) => (
                    <Link 
                      key={index}
                      to={link.path}
                      className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="w-full max-w-md">
                <h4 className="text-lg font-medium mb-3 text-center md:text-right text-white">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="flex">
                  <div 
                    className={`flex-1 relative transition-all duration-300 ${isEmailFocused ? 'ring-2 ring-blue-500' : ''}`}
                  >
                    <input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none transition-colors duration-200"
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                      required
                    />
                    <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-r-lg hover:shadow-lg transition-all duration-200 font-medium"
                  >
                    Subscribe
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="flex items-center text-gray-400 text-sm">
                <span>© 2024 ZenZap. Made with</span>
                <FaHeart className="text-red-500 mx-1 animate-pulse" />
                <span>for readers.</span>
              </div>

              {/* Essential Links */}
              <div className="flex items-center space-x-4 text-xs">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Privacy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm" />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;