import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';

import { setPointsList } from './pointsList';

// * watchers
export function* watchPointsList() {
  yield takeEvery(actions.INIT_POINTS_LIST, setPointsList);
}
