import React from 'react';
import './book.scss';
import BookCover from '../book-cover/book-cover';
import BookInfo from '../book-info/book-info';
import { IBook } from '../../interfaces';
import { connect } from 'react-redux';
import { searchChangeAction, showModalAction } from '../../actions';

const Book = (props: { book: IBook; showModal: (id) => void; searchChange: (searchValue) => void }) => {
  const {
    book: { id, title, author, image, rating, price, genres },
    showModal,
    searchChange,
  } = props;

  const onBookClick = (evt) => {
    evt.preventDefault();
    showModal(id);
    searchChange('');
  };

  return (
    <a href="#ref" className="book" onClick={onBookClick}>
      <BookCover title={title} image={image} rating={rating} />
      <BookInfo bookInfo={{ id, title, author, price, genres }} />
    </a>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (id) => dispatch(showModalAction(id)),
    searchChange: (searchValue) => dispatch(searchChangeAction(searchValue)),
  };
};

export default connect(null, mapDispatchToProps)(Book);
