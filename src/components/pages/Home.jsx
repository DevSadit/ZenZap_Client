import AbouUs from "./AbouUs";
import Faq from "./Faq";
import Feedbacks from "./Feedbacks";
import NewsLetter from "./NewsLetter";
import View from "./View";
import RecentBlogs from "./RecentBlogs";
import Slider from "./Slider";
import { motion, useScroll } from "framer-motion";

const Home = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen bg-base-200">
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 4,
          background: "#3B82F6",
          transformOrigin: "0%",
          zIndex: 50,
        }}
      ></motion.div>
      <Slider />
      <div className="divider divider-primary  max-w-6xl mx-auto my-8"></div>
      <RecentBlogs />
      <div className="divider divider-primary max-w-6xl mx-auto my-8"></div>
      <Feedbacks />
      <div className="divider divider-primary max-w-6xl mx-auto my-8"></div>
      <AbouUs />
      <div className="divider divider-primary max-w-6xl mx-auto my-8"></div>
      <Faq />
      <div className="divider divider-primary max-w-6xl mx-auto my-8"></div>
      <NewsLetter />
    </div>
  );
};

export default Home;
