import NewsLetter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import Slider from "./Slider";


const Home = () => {
    return (
      <div>
        <Slider></Slider>
        <RecentBlogs></RecentBlogs>
        <NewsLetter></NewsLetter>
      </div>
    );
};

export default Home;