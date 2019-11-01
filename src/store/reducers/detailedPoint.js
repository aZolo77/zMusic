import * as actions from '../actions/actionTypes';

const initialState = {
  point: null
};

const getPoint = (state, payload) => ({
  ...state,
  point: payload.pointInfo
});

const initPoint = (state, payload) => ({
  point: null
});

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actions.INIT_POINT:
      return initPoint(state, payload);
    case actions.GET_POINT:
      return getPoint(state, payload);
    default:
      return state;
  }
};

export default reducer;
