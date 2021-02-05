import React from 'react';
import './banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Pagination, Autoplay]);

const bannerData = [
  {
    title: 'Атомарный дизайн',
    image: 'atomic-design',
  },
  {
    title: 'Сумерки',
    image: 'twilight',
  },
  {
    title: '1984',
    image: '1984',
  },
  {
    title: 'И вспыхнет пламя',
    image: 'catching-fire',
  },
];

const banners = bannerData.map((banner, index) => {
  return (
    <SwiperSlide key={banner.image + index}>
      <div className="banner">
        <picture>
          <source media="(min-width: 1344px)" srcSet={`images/${banner.image}-banner-desktop.jpg`} />
          <source media="(min-width: 704px)" srcSet={`images/${banner.image}-banner-tablet.jpg`} />
          <img
            className="banner__image"
            src={`images/${banner.image}-banner-mobile.jpg`}
            alt={`Баннер книги ${banner.title}.`}
          />
        </picture>
      </div>
    </SwiperSlide>
  );
});

const Banner = () => {
  return (
    <div className="banner-container">
      <Swiper
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
      >
        {banners}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Banner;
