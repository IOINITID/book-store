import React, { useEffect } from 'react';
import Book from '../book/book';
import './book-list.scss';
import { BOOKS_URL } from '../../services';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import ArrowIcon from '../../assets/images/arrow-icon.svg';
import { connect } from 'react-redux';
import { loadBooksAction } from '../../actions';

SwiperCore.use([Navigation]);

interface IBook {
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

interface IBookList {
  books: IBook[];
  loadBooks: (books) => void;
}

const BookList = (props: IBookList) => {
  const { books, loadBooks } = props;

  useEffect(() => {
    fetch(BOOKS_URL)
      .then((response) => response.json())
      .then((books) => loadBooks(books));
  }, []);

  console.log('Список книг:', books);

  const bookItems = books.map((book) => {
    return (
      <SwiperSlide className="book-item" key={book.id} tag="li">
        <Book
          id={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
          rating={book.rating}
          price={book.price}
          genres={book.genres}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={1}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      wrapperTag="ul"
      loop={true}
      initialSlide={4}
      breakpoints={{ 704: { slidesPerView: 2 }, 1344: { slidesPerView: 4 } }}
      simulateTouch={false}
      updateOnWindowResize={false}
    >
      {bookItems}
      <button className="swiper-button-prev">
        <ArrowIcon className="swiper-button-prev-icon" />
      </button>
      <button className="swiper-button-next">
        <ArrowIcon className="swiper-button-next-icon" />
      </button>
    </Swiper>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.books.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (books) => dispatch(loadBooksAction(books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
