import { put, delay } from 'redux-saga/effects';
// import { put } from 'redux-saga/effects';
import * as actions from '../actions';

const points = [
  {
    id: 0,
    name: 'zMusic Studio',
    imgs: [],
    description: 'Описание zMusic Studio'
  },
  { id: 1, name: 'Cleo', imgs: [], description: 'Описание Cleo' },
  { id: 2, name: 'Muze Zone', imgs: [], description: 'Описание Muze Zone' },
  { id: 3, name: 'Verona', imgs: [], description: 'Описание Verona' },
  { id: 4, name: 'Milan', imgs: [], description: 'Описание Milan' }
];

export function* setPointsList() {
  try {
    // * сюда приходит список с реп точками (axios)
    yield delay(300); // имитация задержки сервера

    yield put(actions.setPointsList(points));
  } catch (error) {
    console.log(error);
  }
}
