import { motion } from "framer-motion";
import { useState } from "react";
import { FaUsers, FaLightbulb, FaGlobe } from "react-icons/fa";

const AbouUs = () => {
  const [showCard, setShowCard] = useState(false);
  
  return (
    <div className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          About Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4">
                <FaUsers />
              </div>
              <h2 className="card-title text-2xl font-bold">Our Team</h2>
              <p className="text-base-content/80">
                A diverse group of passionate writers, thinkers, and creators dedicated to bringing you the best content.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4">
                <FaLightbulb />
              </div>
              <h2 className="card-title text-2xl font-bold">Our Mission</h2>
              <p className="text-base-content/80">
                To inspire, inform, and ignite the flames of passion within every reader who graces our pages.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4">
                <FaGlobe />
              </div>
              <h2 className="card-title text-2xl font-bold">Our Vision</h2>
              <p className="text-base-content/80">
                Creating a global community of curious minds exploring the depths of knowledge and heights of imagination.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="card bg-base-100 shadow-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl font-bold text-center md:text-left mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p>
                Welcome to our blog, where words weave stories, ideas spark revolutions, and curiosity knows no bounds. Here, we embark on a journey through the vast landscape of human experience, exploring the depths of knowledge and the heights of imagination.
              </p>
              <p>
                At the heart of our endeavor lies a commitment to curiosity—the relentless pursuit of understanding, the insatiable thirst for knowledge that propels us forward. We believe that curiosity is the key that unlocks the doors to new worlds, new perspectives, and new possibilities.
              </p>
              <p>
                To truly explore the depths of human experience, we must also embrace diversity—in thought, in culture, in belief. Our blog is a celebration of the rich tapestry of humanity, a mosaic of voices and perspectives that reflect the kaleidoscope of the human experience.
              </p>
              <p>
                Our blog is more than just a collection of words on a screen; it is a community—a gathering place for kindred spirits to come together, to share ideas, to challenge assumptions, and to grow together.
              </p>
              <p>
                Whether you are a seasoned scholar or a curious newcomer, whether you seek knowledge or simply a moment of respite from the chaos of the world, we invite you to join us on this journey—a journey of discovery, of exploration, of wonder.
              </p>
            </div>
            <div className="card-actions justify-center mt-6">
              <button className="btn btn-primary btn-lg">Join Our Community</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AbouUs;
