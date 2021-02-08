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
  favorite?: boolean;
  cart?: boolean;
}

interface IBookCover {
  title: string;
  image: string;
  rating: number;
}

interface IBookInfo {
  id: string;
  title: string;
  author: string;
  price: number;
  genres: string[];
}

interface IBookRating {
  rating: number;
}

export { IBook, IBookCover, IBookInfo, IBookRating };
