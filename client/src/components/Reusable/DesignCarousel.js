import React from "react";
import "../../styles/designCarousel.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

function DesignCarousel() {
  const images = [
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719444781/Portfolio_Files/Design%20Works/vclnffixfdtviathwqbm.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719444782/Portfolio_Files/Design%20Works/hmapezph8yxfwaehltei.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719444782/Portfolio_Files/Design%20Works/pdp31mcavof2bod9sxgx.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719444781/Portfolio_Files/Design%20Works/pene8ucno808xkzz7gnd.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719444781/Portfolio_Files/Design%20Works/fl9yptzjs3dvcqwivka4.webp",
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719444780/Portfolio_Files/Design%20Works/svrobopga4kds5blrdhj.webp",
  ];
  return (
    <Swiper
      id="designCarousel"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 500,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{ delay: 4000 }}
      loop={true}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="designCarousel"
    >
      {images.map((image) => (
        <SwiperSlide>
          <img src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DesignCarousel;
