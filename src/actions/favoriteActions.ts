import { ActionTypes } from './types';

const toggleFavoriteAction = (id, books) => {
  return {
    type: ActionTypes.TOGGLE_FAVORITE,
    payload: { id, books },
  };
};

export { toggleFavoriteAction };
