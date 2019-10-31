import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';

const points = [
  {
    id: 0,
    description: 'Подробное описание zMusic Studio',
    address: 'Адрес Студии zMusic Studio',
    mail: 'mail@test.com',
    social: {
      vk: 'vk.com',
      fb: 'facebook.com',
      site: 'sitename.ru'
    },
    rooms: [
      {
        id: 0,
        name: 'Комната 1'
      },
      {
        id: 1,
        name: 'Комната 2'
      },
      {
        id: 2,
        name: 'Комната 3'
      }
    ]
  },
  {
    id: 1,
    description: 'Подробное описание Cleo',
    address: 'Адрес Студии Cleo',
    mail: 'mail@test.com',
    social: {
      vk: 'vk.com',
      fb: 'facebook.com',
      site: 'sitename.ru'
    },
    rooms: [
      {
        id: 0,
        name: 'Комната 1'
      },
      {
        id: 1,
        name: 'Комната 2'
      },
      {
        id: 2,
        name: 'Комната 3'
      }
    ]
  },
  {
    id: 2,
    description: 'Подробное описание Muze Zone',
    address: 'Адрес Студии Muze Zone',
    mail: 'mail@test.com',
    social: {
      vk: 'vk.com',
      fb: 'facebook.com',
      site: 'sitename.ru'
    },
    rooms: [
      {
        id: 0,
        name: 'Комната 1'
      },
      {
        id: 1,
        name: 'Комната 2'
      },
      {
        id: 2,
        name: 'Комната 3'
      }
    ]
  },
  {
    id: 3,
    description: 'Подробное описание Verona',
    address: 'Адрес Студии Verona',
    mail: 'mail@test.com',
    social: {
      vk: 'vk.com',
      fb: 'facebook.com',
      site: 'sitename.ru'
    },
    rooms: [
      {
        id: 0,
        name: 'Комната 1'
      },
      {
        id: 1,
        name: 'Комната 2'
      },
      {
        id: 2,
        name: 'Комната 3'
      }
    ]
  },
  {
    id: 4,
    description: 'Подробное описание Milan',
    address: 'Адрес Студии Milan',
    mail: 'mail@test.com',
    social: {
      vk: 'vk.com',
      fb: 'facebook.com',
      site: 'sitename.ru'
    },
    rooms: [
      {
        id: 0,
        name: 'Комната 1'
      },
      {
        id: 1,
        name: 'Комната 2'
      },
      {
        id: 2,
        name: 'Комната 3'
      }
    ]
  }
];

export function* getDetailedPoint(action) {
  try {
    // * сюда приходит инфа о реп точке
    yield delay(700); // имитация задержки сервера

    // ? get pointed Data
    // yield put(actions.setPointsList(points));
    // yield put(
    //   actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    // );
  } catch (error) {
    console.log(error);
  }
}
