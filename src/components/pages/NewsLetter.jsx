import React from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const NewsLetter = () => {
  const formRef = React.createRef();
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      if (email.length > 0) {
        toast.success("Thank you for subscribing to our newsletter!");
      }
    }

    // clear form
    formRef.current.reset();
  };
  
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-blue-600">
            Subscribe to Our Newsletter
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto my-4 rounded"></div>
          <p className="text-base-content/80 max-w-2xl mx-auto text-lg">
            Stay updated with our latest articles, exclusive content, and special offers
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Left Content Side */}
          <div className="lg:w-1/2 bg-gradient-to-br from-primary to-secondary p-10 lg:p-16 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                <FaEnvelope className="inline-block mr-3 mb-1" />
                Join Our Community
              </h3>
              
              <div className="h-1 w-24 bg-white/30 mb-8"></div>
              
              <p className="mb-8 text-white/90 text-lg leading-relaxed">
                Stay updated with our latest articles, exclusive content, and special offers delivered straight to your inbox.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Weekly curated content", "Exclusive subscriber-only articles", "Early access to new features"].map((item, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <FaCheckCircle className="mr-3 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* Right Form Side */}
          <div className="lg:w-1/2 bg-white p-10 lg:p-16 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Subscribe Now</h3>
              
              <form 
                onSubmit={handleSubscribe} 
                ref={formRef}
                className="space-y-6"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-gray-700 font-medium">Email Address</span>
                  </label>
                  <div className="relative">
                    <input
                      className="input input-bordered w-full bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-primary/50 transition-all duration-300 rounded-lg py-3 px-4"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      aria-label="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-control">
                  <button className="btn btn-primary text-white gap-2 w-full hover:shadow-lg transition-all duration-300 rounded-lg py-3">
                    <FaPaperPlane />
                    Subscribe Now
                  </button>
                </div>
                
                <p className="text-sm text-center text-gray-500 mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetter;