import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';

import { setPointsList } from './pointsList';
import { getDetailedPoint } from './detailedPoints';

// * watchers
export function* watchPointsList() {
  yield takeEvery(actions.INIT_POINTS_LIST, setPointsList);
}

export function* watchDetailedPoint() {
  yield takeEvery(actions.GET_POINT, getDetailedPoint);
}
