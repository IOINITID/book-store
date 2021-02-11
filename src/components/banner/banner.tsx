import React from 'react';
import './banner.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import { showModalAction } from '../../actions';
import { connect } from 'react-redux';

SwiperCore.use([Pagination, Autoplay]);

const bannerData = [
  {
    id: '6',
    title: 'Атомарный дизайн',
    image: 'atomic-design',
  },
  {
    id: '1',
    title: 'Сумерки',
    image: 'twilight',
  },
  {
    id: '4',
    title: '1984',
    image: '1984',
  },
  {
    id: '3',
    title: 'И вспыхнет пламя',
    image: 'catching-fire',
  },
];

const Banner = (props: { showModal: (id) => void }) => {
  const { showModal } = props;
  const banners = bannerData.map((banner, index) => {
    return (
      <SwiperSlide key={banner.image + index}>
        <div className="banner">
          <a className="banner__link" href="#ref" onClick={() => showModal(banner.id)}>
            <picture>
              <source media="(min-width: 1344px)" srcSet={`images/${banner.image}-banner-desktop.jpg`} />
              <source media="(min-width: 704px)" srcSet={`images/${banner.image}-banner-tablet.jpg`} />
              <img
                className="banner__image"
                src={`images/${banner.image}-banner-mobile.jpg`}
                alt={`Баннер книги ${banner.title}.`}
              />
            </picture>
          </a>
        </div>
      </SwiperSlide>
    );
  });

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

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => dispatch(showModalAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(Banner);
