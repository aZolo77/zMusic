import * as actions from './ActionTypes';

export const initPointsList = () => ({
  type: actions.INIT_POINTS_LIST
});
export const setPointsList = pointsList => ({
  type: actions.SET_POINTS_LIST,
  payload: {
    pointsList
  }
});
