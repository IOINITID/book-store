import { ActionTypes } from '../actions/types';

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
  quantity?: number;
  totalPrice?: number;
}

interface IModalState {
  modalData: IBook | null;
}

interface IShowModalAction {
  type: ActionTypes.SHOW_MODAL;
  payload: {
    id: string;
    books: IBook[];
  };
}

interface ICloseModalAction {
  type: ActionTypes.CLOSE_MODAL;
}

type IModalAction = IShowModalAction | ICloseModalAction;

const initialState = {
  modalData: null,
};

const modalReducer = (state: IModalState = initialState, action: IModalAction): IModalState => {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return {
        ...state,
        modalData: action.payload.books.find((book) => book.id === action.payload.id),
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        modalData: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
