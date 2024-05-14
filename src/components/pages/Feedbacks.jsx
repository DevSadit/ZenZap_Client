import axios from "axios";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import SingleFeedback from "./SingleFeedback";
import { motion } from "framer-motion";
const Feedbacks = () => {
  const [feedbacks, setFeedback] = useState([]);
  useState(() => {
    axios
      .get(`https://blog-website-rho-henna.vercel.app/testimonials`)
      .then((res) => {
        setFeedback(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(feedbacks);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center my-12 border-t-2 text-white py-4 bg-gray-800">
        Feedbacks Spotligh
      </h1>
      {/* this div is for map */}
      <div>
        <Marquee gradient={false} speed={50}>
          {feedbacks.map((feedback) => (
            <SingleFeedback
              key={feedback._id}
              feedback={feedback}
            ></SingleFeedback>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Feedbacks;
