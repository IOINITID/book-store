import React, { useEffect, useState } from 'react';
import Book from '../book/book';
import './book-list.scss';
import { booksUrl } from '../../utils/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import ArrowIcon from '../../assets/images/arrow-icon.svg';

SwiperCore.use([Navigation]);

const BookList = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch(booksUrl)
      .then((response) => response.json())
      .then((result) => setBooksData(result));
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
      slidesPerView={4}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      wrapperTag="ul"
      loop={true}
      initialSlide={4}
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

export default BookList;
