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
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <div className="banner">
            <picture>
              <source media="(min-width: 1344px)" srcSet="images/atomic-design-banner-desktop.jpg" />
              <source media="(min-width: 704px)" srcSet="images/atomic-design-banner-tablet.jpg" />
              <img className="banner__image" src="images/atomic-design-banner-mobile.jpg" alt="" />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <picture>
              <source media="(min-width: 1344px)" srcSet="images/twilight-banner-desktop.jpg" />
              <source media="(min-width: 704px)" srcSet="images/twilight-banner-tablet.jpg" />
              <img className="banner__image" src="images/twilight-banner-mobile.jpg" alt="" />
            </picture>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner">
            <picture>
              <source media="(min-width: 1344px)" srcSet="images/1984-banner-desktop.jpg" />
              <source media="(min-width: 704px)" srcSet="images/1984-banner-tablet.jpg" />
              <img className="banner__image" src="images/1984-banner-mobile.jpg" alt="" />
            </picture>
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
