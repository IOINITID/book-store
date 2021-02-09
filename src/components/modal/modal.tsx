import React, { useEffect, useRef } from 'react';
import './modal.scss';
import FavoriteModalIcon from '../../assets/images/favorite-modal-icon.svg';
import CloseIcon from '../../assets/images/close-icon.svg';
import { connect } from 'react-redux';
import { addToCartAction, toggleFavoriteAction, closeModalAction } from '../../actions';
import { getColorByGenre } from '../../utils/common';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper.scss';

SwiperCore.use([Pagination, Autoplay]);

interface IModal {
  modalData: {
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
  };
  closeModal: () => void;
  toggleFavorite: (id) => void;
  addToCart: (id) => void;
}

const Modal = (props: IModal) => {
  const { modalData, closeModal, toggleFavorite, addToCart } = props;
  const {
    id,
    title,
    image,
    author,
    publisher,
    release,
    pages,
    cover,
    age,
    rating,
    price,
    genres,
    description,
  } = modalData[0];

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
    <Swiper pagination={{ clickable: true, el: '.swiper-pagination' }} slidesPerView={1} spaceBetween={0} loop={true}>
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
                <li className="modal__genre-item" key={genre + index}>
                  <span className="modal__genre" style={{ backgroundColor: background }}>
                    {genre}
                  </span>
                </li>
              );
            })}
          </ul>
          <h3 className="modal__description">Описание</h3>
          <p className="modal__description-text">{description}</p>
          <div className="modal__actions">
            <span className="modal__price">{price} ₽</span>
            <button className="modal__cart" type="button" title="Добавить в корзину" onClick={() => addToCart(id)}>
              Добавить в корзину
            </button>
            <button
              className="modal__favorite"
              type="button"
              title="Добавить в избранное"
              onClick={() => toggleFavorite(id)}
            >
              <FavoriteModalIcon width="20" height="18" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modalData: state.modalData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModalAction()),
    toggleFavorite: (id) => dispatch(toggleFavoriteAction(id)),
    addToCart: (id) => dispatch(addToCartAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
