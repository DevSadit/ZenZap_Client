import axios from "axios";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import SingleFeedback from "./SingleFeedback";

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
      <h1 className="font-bold text-4xl text-center my-12 border border-b-2 border-t-2 text-gray-800 py-4">
        Feedback Spotlight
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
