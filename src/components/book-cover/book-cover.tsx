import React from 'react';
// import './book-cover.scss';
import BookRating from '../book-rating/book-rating';
import { IBookCover } from '../../interfaces';
import styled from 'styled-components';

const Cover = styled.div`
  position: relative;
  background-color: #d4d4d4;
`;

const CoverImage = styled.img`
  object-fit: cover;
`;

const CoverRating = styled(BookRating)`
  position: absolute;
  top: 0;
  right: 0;
`;

const BookCover = (props: IBookCover) => {
  const { title, image, rating } = props;

  return (
    <Cover>
      <CoverImage
        className="cover__image"
        src={`images/${image}-1.jpg`}
        width="136"
        height="160"
        loading="lazy"
        alt={`Обложка книги ${title}.`}
      />
      <CoverRating rating={rating} />
    </Cover>
  );
};

export default BookCover;
