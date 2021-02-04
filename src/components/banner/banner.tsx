import React from 'react';
import './banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
SwiperCore.use([Pagination, Autoplay]);

const bannerImages = [
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
        {bannerImages.map((item, index) => {
          return (
            <SwiperSlide key={item.image + index}>
              <div className="banner">
                <picture>
                  <source media="(min-width: 1344px)" srcSet={`images/${item.image}-banner-desktop.jpg`} />
                  <source media="(min-width: 704px)" srcSet={`images/${item.image}-banner-tablet.jpg`} />
                  <img
                    className="banner__image"
                    src={`images/${item.image}-banner-mobile.jpg`}
                    alt={`Баннер книги ${item.title}.`}
                  />
                </picture>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;
