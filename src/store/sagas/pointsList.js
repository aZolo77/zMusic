import { put } from 'redux-saga/effects';
import * as actions from '../actions/actionTypes';

export function* initPointsList() {
  try {
    yield put(actions.SET_POINTS_LIST()); // сюда приходит список с реп точками
  } catch (error) {
    console.log(error);
  }
}
