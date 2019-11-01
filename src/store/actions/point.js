import * as actions from './actionTypes';

export const initPoint = id => ({
  type: actions.INIT_POINT,
  payload: {
    id
  }
});

export const getPoint = pointInfo => ({
  type: actions.GET_POINT,
  payload: {
    pointInfo
  }
});
