import * as actions from './actionTypes';

export const getPoint = id => ({
  type: actions.GET_POINT,
  payload: {
    id
  }
});
