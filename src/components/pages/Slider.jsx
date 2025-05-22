import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Hero from "./Hero";

import bg1 from '../../assets/images/andrew-neel-cckf4TsHAuw-unsplash.jpg'
import bg2 from '../../assets/images/lukas-blazek-GnvurwJsKaY-unsplash.jpg'
import bg3 from '../../assets/images/thought-catalog-UK78i6vK3sc-unsplash.jpg'

const Slider = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Hero
            img={bg1}
            txt={`Welcome to ZenZap`}
            p={`Embark on a transformative journey with ZenZap, where innovation, entrepreneurship, and lifestyle blend seamlessly. Dive into our digital haven of tech wisdom, business savvy, and contemporary living.`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero 
            img={bg2} 
            txt="Where Every Click Unfolds a Story"
            p="Discover thought-provoking content that inspires, informs, and ignites your passion for technology, business, and lifestyle."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Hero
            img={bg3}
            txt="We're ZenZap, Delving into Tech, Lifestyle, and Business"
            p="Join our community of forward-thinkers as we navigate the exhilarating realms of innovation, entrepreneurship, and modern living."
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
