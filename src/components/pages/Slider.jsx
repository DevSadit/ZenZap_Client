import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import Hero from "./Hero";

import bg1 from '../../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg'
import bg2 from '../../assets/images/lukas-blazek-GnvurwJsKaY-unsplash.jpg'
import bg3 from '../../assets/images/thought-catalog-UK78i6vK3sc-unsplash.jpg'
const Slider = () => {
  return (
    <div>
      <div className="my-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Hero
              img={bg1}
              txt={`Welcome to ZenZap`}
              p={`Embark on a transformative journey with ZenZap, where innovation, entrepreneurship, and lifestyle blend seamlessly. Dive into our digital haven, where bytes of tech wisdom meet the art of business savvy and the essence of contemporary living. Unravel the mysteries of tomorrow's tech, decode the strategies of successful ventures, and unlock the secrets to a balanced, fulfilling life. From cutting-edge gadget reviews to in-depth market analyses and inspiring personal narratives, our curated content promises to inform, inspire, and invigorate. Join us in shaping the future, one click at a time, as we navigate the exhilarating realms of technology, business, and lifestyle`}
            ></Hero>
          </SwiperSlide>
          <SwiperSlide>
            <Hero img={bg2} txt="Where Every Click Unfolds a Story"></Hero>
          </SwiperSlide>
          <SwiperSlide>
            <Hero
              img={bg3}
              txt="We're ZenZap, Delving into Tech, lifestyle, and Busisness."
            ></Hero>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
