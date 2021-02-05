import React, { useEffect } from 'react';
import Book from '../book/book';
import './book-list.scss';
import { booksUrl } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import ArrowIcon from '../../assets/images/arrow-icon.svg';
import { connect } from 'react-redux';
import { loadBooksAction } from '../../actions/index';
import { IBook } from '../../interfaces';

SwiperCore.use([Navigation]);

interface IBookList {
  booksData: IBook[];
  loadBooks: (books) => void;
}

const BookList = (props: IBookList) => {
  const { booksData, loadBooks } = props;

  useEffect(() => {
    fetch(booksUrl)
      .then((response) => response.json())
      .then((books) => loadBooks(books));
  }, []);

  console.log('Список книг:', booksData);

  const books = booksData.map((book) => {
    return (
      <SwiperSlide className="book-item" key={book.id} tag="li">
        <Book book={book} />
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
    >
      {books}
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
    booksData: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (books) => dispatch(loadBooksAction(books)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
