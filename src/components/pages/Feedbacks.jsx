import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import SingleFeedback from "./SingleFeedback";
import { motion } from "framer-motion";

const Feedbacks = () => {
  const [feedbacks, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`https://blog-website-rho-henna.vercel.app/testimonials`)
      .then((res) => {
        setFeedback(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-content">
            Feedback Spotlight
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto my-4 rounded"></div>
          <p className="text-base-content/80 max-w-2xl mx-auto">
            See what our readers have to say about their ZenZap experience
          </p>
        </motion.div>
      </div>
      
      {loading ? (
        <div className="flex gap-6 overflow-hidden py-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="min-w-[300px] h-64 bg-base-100 rounded-xl shadow-lg animate-pulse p-6">
              <div className="h-4 bg-base-300 rounded w-3/4 mb-8"></div>
              <div className="h-4 bg-base-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-base-300 rounded w-5/6 mb-2"></div>
              <div className="h-4 bg-base-300 rounded w-4/6 mb-8"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-base-300"></div>
                <div>
                  <div className="h-4 bg-base-300 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-base-300 rounded w-32"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <Marquee 
          gradient={true} 
          gradientColor={[245, 245, 245]}
          gradientWidth={100}
          speed={40}
          pauseOnHover={true}
        >
          <div className="py-8 flex gap-6">
            {feedbacks.map((feedback) => (
              <SingleFeedback key={feedback._id} feedback={feedback} />
            ))}
          </div>
        </Marquee>
      )}
    </section>
  );
};

export default Feedbacks;
