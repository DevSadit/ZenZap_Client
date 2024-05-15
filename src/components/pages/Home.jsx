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
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          height: 15,
          background: "#1565c0",
          transformOrigin: "0%",
        }}
      ></motion.div>
      <Slider></Slider>
      <RecentBlogs></RecentBlogs>
      <Feedbacks></Feedbacks>
      <View></View>
      <AbouUs></AbouUs>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
