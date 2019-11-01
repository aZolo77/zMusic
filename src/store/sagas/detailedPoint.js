import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';

const points = [
  {
    id: 0,
    name: 'zMusic Studio',
    description: 'Подробное описание zMusic Studio',
    contacts: [
      { main: true, phone: '88127777777' },
      { main: false, phone: '89057777777' }
    ],
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
    name: 'Cleo',
    description: 'Подробное описание Cleo',
    contacts: [
      { main: true, phone: '88127777776' },
      { main: false, phone: '89057777776' }
    ],
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
    name: 'Muze Zone',
    description: 'Подробное описание Muze Zone',
    contacts: [
      { main: true, phone: '88127777775' },
      { main: false, phone: '89057777775' }
    ],
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
    name: 'Verona',
    description: 'Подробное описание Verona',
    contacts: [
      { main: true, phone: '88127777774' },
      { main: false, phone: '89057777774' }
    ],
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
    name: 'Milan',
    description: 'Подробное описание Milan',
    contacts: [
      { main: true, phone: '88127777773' },
      { main: false, phone: '89057777773' }
    ],
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
    // console.log(action);

    // * с помощью id ищем инфо о конкретной репетиционной студии
    const detailedPoint = points.reduce((el, next) => {
      if (el.id === +action.payload.id) return el;
      else return next;
    });

    // * set detailed Point
    yield put(actions.getPoint(detailedPoint));
  } catch (error) {
    console.log(error);
  }
}
