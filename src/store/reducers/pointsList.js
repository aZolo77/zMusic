import * as actions from '../actions/actionTypes';

const initialState = {
  points: []
};

const setPointsList = (state, payload) => ({
  ...state,
  points: payload.pointsList
});

const getPoint = (state, payload) => ({
  ...state
});

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actions.INIT_POINTS_LIST:
      return state;
    case actions.SET_POINTS_LIST:
      return setPointsList(state, payload);
    case actions.GET_POINT:
      return getPoint(state, payload);
    default:
      return state;
  }
};

export default reducer;
