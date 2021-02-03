interface IBook {
  book: {
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
}

interface IBookCover {
  bookCover: {
    title: string;
    image: string;
    rating: number;
  };
}

interface IBookInfo {
  bookInfo: {
    title: string;
    author: string;
    price: number;
    genres: string[];
  };
}

interface IBookRating {
  rating: number;
}

export { IBook, IBookCover, IBookInfo, IBookRating };
