import React from 'react';
import './book.scss';
import BookCover from '../book-cover/book-cover';
import BookInfo from '../book-info/book-info';
import { connect } from 'react-redux';
import { showModalAction } from '../../actions';

interface IBook {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  price: number;
  genres: string[];
  showModal: (id, books) => void;
  books: [];
}

const Book = ({ id, title, author, image, rating, price, genres, showModal, books }: IBook) => {
  const onBookClick = (evt) => {
    evt.preventDefault();
    showModal(id, books);
  };

  return (
    <a href="#ref" className="book" onClick={onBookClick}>
      <BookCover title={title} image={image} rating={rating} />
      <BookInfo bookInfo={{ id, title, author, price, genres }} />
    </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(Book);
