import { ActionTypes } from './types';

const showModalAction = (id, books) => {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: { id, books },
  };
};

const closeModalAction = () => {
  return {
    type: ActionTypes.CLOSE_MODAL,
  };
};

export { showModalAction, closeModalAction };
