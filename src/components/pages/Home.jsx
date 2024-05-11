import Faq from "./Faq";
import Feedbacks from "./Feedbacks";
import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <RecentBlogs></RecentBlogs>
      <Feedbacks></Feedbacks>
      <Faq></Faq>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
