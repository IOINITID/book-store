import React, { useEffect, useRef } from 'react';
import './modal.scss';
import CloseIcon from '../../assets/images/close-icon.svg';
import { connect } from 'react-redux';
import { addToCartAction, toggleFavoriteAction, closeModalAction } from '../../actions';
import { getColorByGenre } from '../../utils/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import ArrowIcon from '../../assets/images/arrow-icon.svg';

import HeartOutlineIcon from '../../assets/images/heart-outline.svg';
import HeartInlineIcon from '../../assets/images/heart-inline.svg';

SwiperCore.use([Pagination, Autoplay, Navigation]);

interface IModalData {
  id: string;
  title: string;
  author: string;
  publisher: string;
  release: number;
  pages: number;
  cover: string;
  age: number;
  image: string;
  rating: number;
  price: number;
  genres: string[];
  description: string;
}

interface IModal {
  modalData: IModalData;
  books: [];
  closeModal: () => void;
  toggleFavorite: (id, books) => void;
  addToCart: (id, books) => void;
  favorite?: boolean;
}

const Modal = ({ modalData, books, closeModal, toggleFavorite, addToCart, favorite }: IModal) => {
  const { id, title, image, author, publisher, release, pages, cover, age, price, genres, description } = modalData;

  const modalRef = useRef(null);
  const imageRef = useRef(null);

  const imagesQuantity = [2, 3, 4];

  const onModalCloseClick = (evt) => {
    evt.preventDefault();

    if (!modalRef.current.contains(evt.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onModalCloseClick);
    return () => document.removeEventListener('click', onModalCloseClick);
  }, []);

  const isMobile = window.matchMedia('(max-width: 1343px)').matches;

  const sliderImages = (
    <Swiper
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      pagination={{ clickable: true, el: '.swiper-pagination' }}
      slidesPerView={1}
      spaceBetween={16}
      loop={true}
      updateOnWindowResize={false}
    >
      {[1, 2, 3, 4].map((item) => {
        return (
          <SwiperSlide key={image + item}>
            <a href="#ref">
              <img src={`images/${image}-${item}.jpg`} width="672" height="742" alt={`Обложка книги ${title}.`} />
            </a>
          </SwiperSlide>
        );
      })}
      <div className="swiper-pagination"></div>
      <button className="swiper-button-prev">
        <ArrowIcon className="swiper-button-prev-icon" />
      </button>
      <button className="swiper-button-next">
        <ArrowIcon className="swiper-button-next-icon" />
      </button>
    </Swiper>
  );

  return (
    <div className="overlay">
      <div className="modal" ref={modalRef}>
        <button className="modal__close" type="button" onClick={closeModal}>
          <CloseIcon width="16" height="16" />
        </button>

        {isMobile ? (
          sliderImages
        ) : (
          <div className="modal__images">
            <div className="modal__image">
              <img src={`images/${image}-1.jpg`} alt={`Обложка книги ${title}.`} ref={imageRef} />
            </div>
            {imagesQuantity.map((item) => {
              const onImageClick = (evt) => {
                evt.preventDefault();

                imageRef.current.src = `images/${image}-${item}.jpg`;
              };

              return (
                <div className="modal__image" key={item}>
                  <a href="#ref" onClick={onImageClick}>
                    <img src={`images/${image}-${item}.jpg`} alt={`Обложка книги ${title}.`} />
                  </a>
                </div>
              );
            })}
          </div>
        )}

        <div className="modal__info">
          <h2 className="modal__title">{title}</h2>

          <div className="modal__feature">
            <dl className="modal__feature-item">
              <dt>Автор</dt>
              <dd>{author}</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Издательство</dt>
              <dd>{publisher}</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Год выпуска</dt>
              <dd>{release} г.</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Страницы</dt>
              <dd>{pages} с.</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Тип обложки</dt>
              <dd>{cover}</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Возрастные ограничения</dt>
              <dd>{age}+</dd>
            </dl>
          </div>
          <ul className="modal__genre-list">
            {genres.map((genre, index) => {
              const background = getColorByGenre(genre);

              return (
                <li className="modal__genre-item" key={genre + index} style={{ backgroundColor: background }}>
                  {genre}
                </li>
              );
            })}
          </ul>
          <h3 className="modal__description">Описание</h3>
          <p className="modal__description-text">{description}</p>
          <span className="modal__price">{price} ₽</span>
          <button className="modal__cart" type="button" title="Добавить в корзину" onClick={() => addToCart(id, books)}>
            Добавить в корзину
          </button>
          <button
            className="modal__favorite"
            type="button"
            title="Добавить в избранное"
            onMouseDown={() => toggleFavorite(id, books)}
          >
            {favorite ? <HeartInlineIcon width="20" height="18" /> : <HeartOutlineIcon width="20" height="18" />}
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modalData: state.modal.modalData,
    books: state.books.books,
    favorite: state.modal.modalData.favorite,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModalAction()),
    toggleFavorite: (id, books) => dispatch(toggleFavoriteAction(id, books)),
    addToCart: (id, books) => dispatch(addToCartAction(id, books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
