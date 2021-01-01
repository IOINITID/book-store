import React, {Component} from "react";
import "./book-list.css";
import BookListItem from "../book-list-item/book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {bookAddedToCart, fetchBooks} from "../../actions";
import {compose} from "redux";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const BookList = (props) => {
  const {books, onAddedToCart} = props;
  return (
    <ul className="book-list">
      {books.map((item) => {
        return (
          <li key={item.id}>
            <BookListItem
              book={item}
              onAddedToCart={() => onAddedToCart(item.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {books, loading, error, onAddedToCart} = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    loading: state.bookList.loading,
    error: state.bookList.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {bookstoreService} = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(withBookstoreService(), connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
