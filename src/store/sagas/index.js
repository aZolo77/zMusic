import { takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';

import { initPointsList } from './pointsList';

// * watchers
export function* watchPointsList() {
  yield takeEvery(actions.INIT_POINTS_LIST, initPointsList);
}
