import { handleActions } from "redux-actions";

const initialState = {
  photos: []
};

const actionMap = {};

actionMap.RECEIVE_PHOTOS = (state, action) => {
  const newState = {
    ...state,
    photos: action.payload
  };
  return newState;
};

export default handleActions(actionMap, initialState);
