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

interface IBanner {
  showModal: (id, books) => void;
  books: [];
}

const Banner = ({ showModal, books }: IBanner) => {
  const banners = bannerData.map((banner, index) => {
    return (
      <SwiperSlide key={banner.image + index}>
        <div className="banner">
          <a className="banner__link" href="#ref" onClick={() => showModal(banner.id, books)}>
            <picture>
              <source
                media="(min-width: 1344px)"
                srcSet={`images/${banner.image}-banner-desktop@1x.jpg 1x, images/${banner.image}-banner-desktop@2x.jpg 2x`}
              />
              <source
                media="(min-width: 704px)"
                srcSet={`images/${banner.image}-banner-tablet@1x.jpg 1x, images/${banner.image}-banner-tablet@2x.jpg 2x`}
              />
              <img
                className="banner__image"
                src={`images/${banner.image}-banner-mobile@1x.jpg`}
                srcSet={`images/${banner.image}-banner-mobile@1x.jpg 1x, images/${banner.image}-banner-mobile@2x.jpg 2x`}
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
        updateOnWindowResize={false}
      >
        {banners}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id, books) => dispatch(showModalAction(id, books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
