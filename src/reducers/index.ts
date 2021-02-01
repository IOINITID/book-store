import { ActionTypes } from '../utils/constants';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes:
      return state;
    default:
      return state;
  }
};

export default reducer;
