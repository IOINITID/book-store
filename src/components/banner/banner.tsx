import React from 'react';
import './banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.scss';
SwiperCore.use([Pagination]);

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper pagination={{ clickable: true }} slidesPerView={1} spaceBetween={0}>
        <SwiperSlide>
          <div className="banner"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
