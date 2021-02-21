import { ActionTypes } from '../actions/types';

interface ISearchState {
  searchValue: string;
}

interface ISearchChangeAction {
  type: ActionTypes.SEARCH_CHANGE;
  payload: string;
}

const initialState = {
  searchValue: '',
};

const searchReducer = (state: ISearchState = initialState, action: ISearchChangeAction): ISearchState => {
  switch (action.type) {
    case ActionTypes.SEARCH_CHANGE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
