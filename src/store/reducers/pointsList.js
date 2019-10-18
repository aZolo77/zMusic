import * as actions from '../actions/actionTypes';

const initialState = {
  points: [
    { id: 0, name: 'zMusic Studio' },
    { id: 1, name: 'Cleo' },
    { id: 2, name: 'Muze Zone' },
    { id: 3, name: 'Verona' },
    { id: 4, name: 'Milan' }
  ]
};

// const setPointsList = (state, payload) => {
// вернуть массив с реп точками
// };

const reducer = (state = initialState, { type, payload = {} }) => {
  switch (type) {
    case actions.INIT_POINTS_LIST:
      return state;
    case actions.SET_POINTS_LIST:
      return state;
    default:
      return state;
  }
};

export default reducer;
