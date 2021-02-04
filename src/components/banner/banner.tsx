import React from 'react';
import './banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
SwiperCore.use([Pagination, Autoplay]);

const bannerImages = [
  {
    title: '',
    image: 'atomic-design',
  },
  {
    title: '',
    image: 'twilight',
  },
  {
    title: '',
    image: '1984',
  },
];

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={0}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="banner">
            <img className="banner__image" src="images/atomic-design-banner.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img className="banner__image" src="images/twilight-banner.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <img className="banner__image" src="images/1984-banner.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
