import React from 'react';
import './book-cover.scss';
import BookRating from '../book-rating/book-rating';
import { IBookCover } from '../../interfaces/index';
import { connect } from 'react-redux';
import { showModalAction } from '../../actions/index';

const BookCover = (props: IBookCover) => {
  const {
    bookCover: { id, title, image, rating },
    showModal,
  } = props;

  const onImageClick = (evt) => {
    evt.preventDefault();

    console.log(id);

    showModal(id);
  };

  return (
    <div className="cover">
      <a href="#ref" onClick={onImageClick}>
        <img
          className="image"
          src={`images/${image}-1.jpg`}
          width="136"
          height="160"
          loading="lazy"
          alt={`Обложка книги ${title}.`}
        />
        <BookRating rating={rating} />
      </a>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    booksData: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => dispatch(showModalAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookCover);
