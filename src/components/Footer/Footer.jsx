import { Link } from "react-router-dom";
import { 
  FaBlog, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart,
  FaArrowUp
} from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
                  <FaBlog className="text-white text-2xl" />
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ZenZap
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Delving into Tech, Lifestyle, and Business. Join our community of forward-thinkers as we navigate innovation and modern living.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: FaFacebookF, href: "#", color: "hover:text-blue-400" },
                  { icon: FaTwitter, href: "#", color: "hover:text-sky-400" },
                  { icon: FaInstagram, href: "#", color: "hover:text-pink-400" },
                  { icon: FaLinkedinIn, href: "#", color: "hover:text-blue-500" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "All Blogs", path: "/allblogs" },
                  { name: "Featured Blogs", path: "/featuredBlogs" },
                  { name: "FAQ", path: "/faq" },
                  { name: "About Us", path: "/about" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Categories</h3>
              <ul className="space-y-3">
                {[
                  "Technology",
                  "Lifestyle",
                  "Business",
                  "Innovation",
                  "Entrepreneurship"
                ].map((category, index) => (
                  <li key={index}>
                    <a 
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    123 Innovation Street<br />
                    Tech Valley, CA 90210
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-purple-400 flex-shrink-0" />
                  <a 
                    href="mailto:hello@zenzap.com" 
                    className="text-gray-300 text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    hello@zenzap.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-purple-400 flex-shrink-0" />
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 text-sm hover:text-purple-400 transition-colors duration-200"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-3 text-white">Stay Updated</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <div className="flex items-center space-x-1 text-gray-300 text-sm">
                <span>© 2024 ZenZap. Made with</span>
                <FaHeart className="text-red-500 animate-pulse" />
                <span>for amazing content.</span>
              </div>

              {/* Links */}
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </footer>
  );
};

export default Footer;