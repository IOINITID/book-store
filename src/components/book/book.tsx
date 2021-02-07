import React from 'react';
import './book.scss';
import BookCover from '../book-cover/book-cover';
import BookInfo from '../book-info/book-info';
import { IBook } from '../../interfaces';
import { connect } from 'react-redux';
import { showModalAction } from '../../actions';

const Book = (props: { book: IBook; showModal: (id) => void }) => {
  const {
    book: { id, title, author, publisher, release, pages, cover, age, image, rating, price, genres, description },
    showModal,
  } = props;

  const onBookClick = (evt) => {
    evt.preventDefault();
    showModal(id);
  };

  return (
    <div className="book">
      <a className="book__link" href="#ref" onClick={onBookClick}>
        <BookCover title={title} image={image} rating={rating} />
        <BookInfo bookInfo={{ title, author, price, genres }} />
      </a>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => dispatch(showModalAction(id)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
