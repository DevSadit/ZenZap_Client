import { motion } from "framer-motion";
import { useState } from "react";
import { FaUsers, FaLightbulb, FaGlobe, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const AbouUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Reader",
      image: "https://i.pravatar.cc/150?img=5",
      text: "ZenZap has transformed how I consume content online. The articles are thoughtful, well-researched, and always leave me with something to ponder."
    },
    {
      name: "Michael Chen",
      role: "Content Creator",
      image: "https://i.pravatar.cc/150?img=8",
      text: "As a fellow content creator, I'm constantly inspired by the quality and depth of ZenZap's articles. They've set a new standard for digital publishing."
    },
    {
      name: "Aisha Patel",
      role: "Digital Marketer",
      image: "https://i.pravatar.cc/150?img=9",
      text: "I recommend ZenZap to all my clients as an example of content done right. Their approach to storytelling and user engagement is exemplary."
    }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <div className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4  text-blue-600">
            About Us
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto my-4 rounded"></div>
          <p className="text-base-content/80 max-w-3xl mx-auto text-lg">
            Discover the story behind ZenZap and our mission to create a vibrant community of curious minds
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary overflow-hidden"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-focus flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                <FaUsers />
              </div>
              <h2 className="card-title text-2xl font-bold">Our Team</h2>
              <p className="text-base-content/80 leading-relaxed">
                A diverse group of passionate writers, thinkers, and creators dedicated to bringing you the best content that inspires and informs.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary overflow-hidden"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-focus flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                <FaLightbulb />
              </div>
              <h2 className="card-title text-2xl font-bold">Our Mission</h2>
              <p className="text-base-content/80 leading-relaxed">
                To inspire, inform, and ignite the flames of passion within every reader who graces our pages, creating content that matters.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary overflow-hidden"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-focus flex items-center justify-center text-white text-2xl mb-4 shadow-lg">
                <FaGlobe />
              </div>
              <h2 className="card-title text-2xl font-bold">Our Vision</h2>
              <p className="text-base-content/80 leading-relaxed">
                Creating a global community of curious minds exploring the depths of knowledge and heights of imagination through engaging content.
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="card bg-base-100 shadow-xl overflow-hidden mb-16 border-l-4 border-primary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="card-body">
            <h2 className="card-title text-2xl md:text-3xl font-bold text-center md:text-left mb-6 text-primary">Our Story</h2>
            <div className="prose max-w-none text-base-content/90 leading-relaxed">
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
      {/* <div className="relative overflow-hidden py-12 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">What Our Readers Say</h2>
          <div className="max-w-4xl mx-auto relative">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-base-100 rounded-xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonials[activeTestimonial].name}</h3>
                  <p className="text-base-content/70">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="relative">
                <FaQuoteLeft className="text-primary/20 text-4xl absolute -top-4 -left-2" />
                <p className="text-lg text-base-content/80 italic px-8">
                  {testimonials[activeTestimonial].quote}
                </p>
                <FaQuoteRight className="text-primary/20 text-4xl absolute -bottom-4 -right-2" />
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={prevTestimonial}
                className="btn btn-circle btn-primary btn-outline"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="btn btn-circle btn-primary btn-outline"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AbouUs;
