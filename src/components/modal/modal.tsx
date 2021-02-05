import React from 'react';
import './modal.scss';
import FavoriteModalIcon from '../../assets/images/favorite-modal-icon.svg';
import CloseIcon from '../../assets/images/close-icon.svg';
import { connect } from 'react-redux';
import { closeModalAction } from '../../actions/index';

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
}

const Modal = (props: IModal) => {
  const { modalData, closeModal } = props;
  const { image } = modalData[0];

  return (
    <div className="overlay">
      <div className="modal">
        <button className="modal__close" type="button" onClick={closeModal}>
          <CloseIcon width="16" height="16" />
        </button>
        <div className="modal__images">
          <div className="modal__image modal__image-preview">
            <img src={`images/${image}.jpg`} alt="" />
          </div>
          <div className="modal__image">
            <img src={`images/${image}.jpg`} alt="" />
          </div>
          <div className="modal__image">
            <img src={`images/${image}.jpg`} alt="" />
          </div>
          <div className="modal__image">
            <img src={`images/${image}.jpg`} alt="" />
          </div>
        </div>

        <div className="modal__info">
          <h2 className="modal__title">Хроники Нарнии</h2>

          <div className="modal__feature">
            <dl className="modal__feature-item">
              <dt>Автор</dt>
              <dd>Автор книги</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Издательство</dt>
              <dd>Название издательства</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Год выпуска</dt>
              <dd>2020 г.</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Страницы</dt>
              <dd>120 с.</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Тип обложки</dt>
              <dd>Мягкая обложка</dd>
            </dl>
            <dl className="modal__feature-item">
              <dt>Возрастные ограничения</dt>
              <dd>18+</dd>
            </dl>
          </div>

          <ul className="modal__genre-list">
            <li className="modal__genre-item">
              <span className="modal__genre">Фэнтези</span>
            </li>
            <li className="modal__genre-item">
              <span className="modal__genre">Приключения</span>
            </li>
          </ul>

          <h3 className="modal__description">Описание</h3>
          <p className="modal__description-text">
            Хроники Нарнии — цикл из семи фэнтезийных повестей, написанных Клайвом Стэйплзом Льюисом. В них
            рассказывается о приключениях детей в волшебной стране под названием Нарния, где животные могут
            разговаривать, магия никого не удивляет, а добро борется со злом. «Хроники Нарнии» содержат много намёков на
            христианские идеи в доступном для юных читателей виде.
          </p>
          <div className="modal__actions">
            <span className="modal__price">1 116 ₽</span>
            <button className="modal__cart" type="button" title="Добавить в корзину">
              Добавить в корзину
            </button>
            <button className="modal__favorite" type="button" title="Добавить в избранное">
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
