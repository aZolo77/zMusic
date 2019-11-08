import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions';

const points = [
  {
    id: 0,
    coords: {
      x: 55.75,
      y: 37.57
    },
    imgs: [
      {
        main: true,
        src:
          'https://lh3.googleusercontent.com/BpcmFLl8Nr7prVJc5aNTgfetYZU5dVh3IfeY9Xrp43_1R-F5cip81biQsdQ98XDSkYDI70b19sbUVaAovGUU4z2JIIy5PibZczZ_N5vjDevFsAjhWGeIG7DCqp_8uF2xjnGJCb5G4QacBTFJo3aodeXItpC2nuR_BrUhW5l-aP_MdMryygwjemy_BZRJM2R9xBh8HqOceVijLHsTJyN_LLcnPcJlb6IsSVD0dlAA05a-vVNKVuNfr2oURpCy6Em_l_3jEXiHLD-key1cVyh_SnwL5jzwoZ-ZXDsz8JCZct9D0T5Oqcfj7e3gRyKFbtbnSaeCeDox-4HB-ffOar7vGg9YpgmPQZI6pTiVtHCE8BKOXbopr_kcDe_EtfvBWkAzRlbFk70iqnnk4Wvheh8qrRqpApeDB5o8BiF20pmDXbuGXgDXyRthQpo1bcXvH6k6T0LD4l2ztl_nDK4-r-rwAI-2OLssbTERO-O69kXYkixDoK8hnfmkSIoER-2d-P-r7aSA6FvhFnnAWcMTL56Qb3Qy_SlFsHOp6GJNoV844H4NPMkWMYY-97zxcQMuVDpSWE2M0q7fdn116fntogAV5RqH0Vg9rJfRUIgCUhxgBVkdGbBz2Nd8q-sZFK-_bCd4CVBzRDZK3nsLYkuHzI5DlwWZQZ08sE5fK_lEgSSSh6kl8XAWcPuLFw=w1343-h895-no'
      },
      {
        main: false,
        src:
          'https://lh3.googleusercontent.com/iB0waEHzQ-wKmlLP3MXaoOnsq_oiuJNuKIImVpsCRpw0YB3YhDJJfuLNev5wgrsC1B62GK7C4L4-I3uPtA3p_PW6rXeDm6uqBYRLF8dikj5i1R8EFNYtyD7OhCkgY7_tqo5uqEBKk3llt1qbf6hPLOQjnwXQ2k8KJEAF1VfreApwuPULkQSgJK-eaQ1mzjPBXi0HiQyqFaz2zEXHyDyO50TbIR9Xsv8CUmB1JWc1zSyhl3qfo4wr8-T3J0Zm7gpny97BVLkd66MVFHDIqsmWNHMACbNwmxJXJlTiz9awYg1RVjr-VgFJOYkAFwgkPEbLUw6XovMBt4iHKEEvY8qmSdNOiI88ngdhwZkoJCes0s7V4VQD_uHPolF9k1FR_7zijBv9exj8ab9zdMZi0lpfia8aihrXgEJQ88I6a2s98oJD0axOQp6zDIKmZUXTX5kU14FS94MHFW9H3qtAZazjgmZVuZjjCKwN1bnBBsSaOxstDDVfEjvGdGPfx1CHJUqU520XoOvM4nLTZVLkn84UtrlNTF3-ENyIlaYB9wg8Bj6jn1JMCqjmzmdiPgPzPPYNMV0oTT1NiN1qWcaichfM_nGaVPPVSvE41wGHfTHFE5OSLOpsO0DK4TbEPBBBkXPJN6x-m0OR7lTO7qMJKOFiGydehdLc989TuyRU2IM-2tD8K_5ZfYvy_A=w1592-h895-no'
      }
    ],
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
    coords: {
      x: 55.75,
      y: 37.57
    },
    imgs: [
      {
        main: true,
        src:
          'https://lh3.googleusercontent.com/Tp4HFP0_m_vYw8EmheSiANCtDBSbwGmg5kry0KOayP3EGO7Anzqf3tJRlFfX-POw4tjvUz6ks5lLbcLxZXAyg2DhnKL2d_TjpfpvSY6D-zxLyyq5h4FWbqsUoT7qkVqLTR0Qj6i9OOu7uN78s_Mamd2OSlXVdhfl4uzWj17WKjZcnBJ3uXBsG7jd1-Np-IR4anixbSO-atByTKoP8RonKq9-RWHIvoTXpXluxN7LGq2gdW2Sj_1nYnXIYPnfc0FXpKmJGNw5ZZXXce3NQa3teTBWnLfWf4gFzx6uj5ZmxP7tnwbTwt2eq1tP0eMXf18u60x_yt2gFDSw96fnWRBZ6jJa3FI_iWCRn4dUl4IL7t9HT91dz9HAIbVjAYjudSOP_pLGA2d2tssJV1dyU5LC-Dv1BfUXjTiy2gerpU7HfY0DRDYoFutrCeUxFwGG_b1pPBZVF0qeSXsSQIYMY1M75fK6-Q_ddUGS__Wd1MzOlBpwGKXEKzHKlweylrjVdkyeWwNR6pMQE8R6DaYkWCVJShK9fMYZl3_SxImIhbQajNmqDDp3zuDWBbFREkb10E3Jm9YekDwVR1BkiToywY1_9md5OsDa0s47N_C-zornTeAk6mVZFNxmEzRauflAahSfctXtyMLEB4hrwcRdXnme5zn3Sn6M_HC_EXnHMI3uhY3z9z0ru3m9kw=w1592-h895-no'
      },
      {
        main: false,
        src:
          'https://lh3.googleusercontent.com/iB0waEHzQ-wKmlLP3MXaoOnsq_oiuJNuKIImVpsCRpw0YB3YhDJJfuLNev5wgrsC1B62GK7C4L4-I3uPtA3p_PW6rXeDm6uqBYRLF8dikj5i1R8EFNYtyD7OhCkgY7_tqo5uqEBKk3llt1qbf6hPLOQjnwXQ2k8KJEAF1VfreApwuPULkQSgJK-eaQ1mzjPBXi0HiQyqFaz2zEXHyDyO50TbIR9Xsv8CUmB1JWc1zSyhl3qfo4wr8-T3J0Zm7gpny97BVLkd66MVFHDIqsmWNHMACbNwmxJXJlTiz9awYg1RVjr-VgFJOYkAFwgkPEbLUw6XovMBt4iHKEEvY8qmSdNOiI88ngdhwZkoJCes0s7V4VQD_uHPolF9k1FR_7zijBv9exj8ab9zdMZi0lpfia8aihrXgEJQ88I6a2s98oJD0axOQp6zDIKmZUXTX5kU14FS94MHFW9H3qtAZazjgmZVuZjjCKwN1bnBBsSaOxstDDVfEjvGdGPfx1CHJUqU520XoOvM4nLTZVLkn84UtrlNTF3-ENyIlaYB9wg8Bj6jn1JMCqjmzmdiPgPzPPYNMV0oTT1NiN1qWcaichfM_nGaVPPVSvE41wGHfTHFE5OSLOpsO0DK4TbEPBBBkXPJN6x-m0OR7lTO7qMJKOFiGydehdLc989TuyRU2IM-2tD8K_5ZfYvy_A=w1592-h895-no'
      }
    ],
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
    coords: {
      x: 55.75,
      y: 37.57
    },
    imgs: [
      {
        main: true,
        src:
          'https://lh3.googleusercontent.com/tiWnX3qE_69cGRz4DRKUoU23SnIbnygZ0A7Yjm1uNsxsbPHgPpI6B_c61L5YkbBII9WvW_U-fcYLR7jj1GCVH3ZcGOiX1HVtWRteDb2QQn7_X18VgdFYa51kbEGLtdiepCP2VEJKqMsUUF4aIdhwVL2AoYjHUlJPzqPaPeURWiwVItSpuyTgiBjBi9u9sevX-M65x14XojrH2Fs4lr-BoTj-sCn1aL1wffVaDFx60N8kyC5rK0KpOs2WyFHzT2LrMgW0puQA1liluF47oXXzXDXbOs7Lf3Bcd2-vp50mOyyJZ48_Yddi3JOmanHpY812n1zBL4BKqHuUAV0NGPghIKSxnYGQdmkJ1TXb1V4s0wmQhAs_6qg76wi5clS3JtHQdqYe6XKfpSOQMS4gyRKWnlpLniuZaVSfgPCTUUni5uaIPeREJFyvlJuHC7FrENTroFqhGZ0OBnKXsbxdhYiJdgGdXKXwUqaiwwSGzWpTMyqw6u7HQULBLLh5DSz3dLLR2xI8wEVzjkV_u1vDnjg73qK1JLb9SK_BeJlCSuzww3R-nx9256xM-CEX5ant3_fdgILeyAFLCejTixoK1Fqs2MJi4HSMSXM5EncjdzAdbqmqocUvjNO2eUN78qWP8oEo-X4s03uva1KfFTnKEDpOJA4_eCeu97ogFTBYSt2_Fc-SZ30ruoLSiA=w1343-h895-no'
      },
      {
        main: false,
        src:
          'https://lh3.googleusercontent.com/iB0waEHzQ-wKmlLP3MXaoOnsq_oiuJNuKIImVpsCRpw0YB3YhDJJfuLNev5wgrsC1B62GK7C4L4-I3uPtA3p_PW6rXeDm6uqBYRLF8dikj5i1R8EFNYtyD7OhCkgY7_tqo5uqEBKk3llt1qbf6hPLOQjnwXQ2k8KJEAF1VfreApwuPULkQSgJK-eaQ1mzjPBXi0HiQyqFaz2zEXHyDyO50TbIR9Xsv8CUmB1JWc1zSyhl3qfo4wr8-T3J0Zm7gpny97BVLkd66MVFHDIqsmWNHMACbNwmxJXJlTiz9awYg1RVjr-VgFJOYkAFwgkPEbLUw6XovMBt4iHKEEvY8qmSdNOiI88ngdhwZkoJCes0s7V4VQD_uHPolF9k1FR_7zijBv9exj8ab9zdMZi0lpfia8aihrXgEJQ88I6a2s98oJD0axOQp6zDIKmZUXTX5kU14FS94MHFW9H3qtAZazjgmZVuZjjCKwN1bnBBsSaOxstDDVfEjvGdGPfx1CHJUqU520XoOvM4nLTZVLkn84UtrlNTF3-ENyIlaYB9wg8Bj6jn1JMCqjmzmdiPgPzPPYNMV0oTT1NiN1qWcaichfM_nGaVPPVSvE41wGHfTHFE5OSLOpsO0DK4TbEPBBBkXPJN6x-m0OR7lTO7qMJKOFiGydehdLc989TuyRU2IM-2tD8K_5ZfYvy_A=w1592-h895-no'
      }
    ],
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
    coords: {
      x: 55.75,
      y: 37.57
    },
    imgs: [
      {
        main: true,
        src:
          'https://lh3.googleusercontent.com/dDRCBN5L6aeP34DDyI5ap8PCjWOU-I7MorFL0Sjg7Amiz0ekrPr4hpCwi19s-L-Xf85O7NVFOZnAGjW6HFodxAKBoISF1si2x3j2XoW_1xFSwX2P4zHXKAFHl4zkTjy8xhMf-BpSANverMSI5ogZhW3OF-khRmnPEydGZRhuH7nHZ3pX6BqlgJQJR06QGqj7y9Y2z7Gp6fgGhj4hNDN9lPan6o1JCYhes_4PgiLdoZwKlxxo3ZRjHe_pahCMsBpE4pQFzFN5N2dLv3qVo_gOqNbMZ_uDbG_R7BrIAogDi8vuGt0DaT9m2rlMSXBvsq0Vi9og3WzJ4MvC07G-jWFluLfXuVteYRp-6E8dN7xdjvzbTZoBUW19H3wrYuxNbUese_REvGkKHHy9YCZxrtxpXTyhbTYQrkm4xZbU0bW9M-_yyoxk3FrOv9-YW3MdcABo3kahba5eGtlaCgt0PlUc9nFcQDNh_Jc3j95YDB6hVSCSi0ifJHun2KTuZ8g1z1-y8LYeEA2UI3BSy_QX6ON7YC7guzA-M4oH7XZuFHqYeIVdZBUhUEHQAVhTWRUhMyxDJsH8EnlVTy3dWB_8ZnWFYIB3jZAZFbX5lAoIsszb50ZxlSo5q5Abho1ceA87RP8JNqYH87j9oUimpfWKTqoK8GytX8rW9Yb30d4ZuEcRsXpo_u6gxFtrww=w672-h896-no'
      },
      {
        main: false,
        src:
          'https://lh3.googleusercontent.com/iB0waEHzQ-wKmlLP3MXaoOnsq_oiuJNuKIImVpsCRpw0YB3YhDJJfuLNev5wgrsC1B62GK7C4L4-I3uPtA3p_PW6rXeDm6uqBYRLF8dikj5i1R8EFNYtyD7OhCkgY7_tqo5uqEBKk3llt1qbf6hPLOQjnwXQ2k8KJEAF1VfreApwuPULkQSgJK-eaQ1mzjPBXi0HiQyqFaz2zEXHyDyO50TbIR9Xsv8CUmB1JWc1zSyhl3qfo4wr8-T3J0Zm7gpny97BVLkd66MVFHDIqsmWNHMACbNwmxJXJlTiz9awYg1RVjr-VgFJOYkAFwgkPEbLUw6XovMBt4iHKEEvY8qmSdNOiI88ngdhwZkoJCes0s7V4VQD_uHPolF9k1FR_7zijBv9exj8ab9zdMZi0lpfia8aihrXgEJQ88I6a2s98oJD0axOQp6zDIKmZUXTX5kU14FS94MHFW9H3qtAZazjgmZVuZjjCKwN1bnBBsSaOxstDDVfEjvGdGPfx1CHJUqU520XoOvM4nLTZVLkn84UtrlNTF3-ENyIlaYB9wg8Bj6jn1JMCqjmzmdiPgPzPPYNMV0oTT1NiN1qWcaichfM_nGaVPPVSvE41wGHfTHFE5OSLOpsO0DK4TbEPBBBkXPJN6x-m0OR7lTO7qMJKOFiGydehdLc989TuyRU2IM-2tD8K_5ZfYvy_A=w1592-h895-no'
      }
    ],
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
    coords: {
      x: 55.75,
      y: 37.57
    },
    imgs: [
      {
        main: true,
        src:
          'https://lh3.googleusercontent.com/vkp0pMlN435RCPj8lG305wxuX6DbddjPN3czzYSpGVQB2AZeO3TC0ZYzskrJJCuHG913X-tRYo2DpssqFmvMvEbtqBfeXbeD6p_3q8f6mH-K9rQBshdfEZtJU0VQ0PaGSrEI121pLqaf4TVnHwG0Jfx8wQtY8hjHjjEcCwGwCB_9zqxoIylMJPb7YBPT_YLY5CAna4vbI-PK7XFiBjLY1kjyDOt7CXmVTrEfwdFiN2U5-I3G_SAqoy2K46hECbpWtbOX2lgmYl5jPVoTHlAVuNlzF-_f0k4HHgAatBlKvjKolW0iDxPOFKZEK7BK6nbX4ryQZvWeEqvEdpsZqPySkIxkKYhimyXQJx0CIrD7-s5NLjjt4pH1PSaEsaQ1h009CQ1htmVrDWvTpJKl873BS40zblgaPIigB1fCBmgKZIIeydZSpgOyWN5_nHMjlVpOl5kDtLOJllj2VT3cPYYy24OwdadFIT1yk5A4s4aAuDrvFc-M98WyzB4IpJ0212CwDQAHJrWdkVjOSvYVyHez0sa5qI6v3KnyUAuD7TyrWiU5V-QXgFxDxAD4QYuqHSS8lUzz7KwT_hDRwgpb1GsPZOOOdjbLPC5JtvP2qWY-PlRbnkEMQAb7zHdkd5lfZE5cyFwDILQE65KGpy7qV8_uc4-lORM6X7SDCQNWDyRhqbQMx8j2v54JAw=w597-h895-no'
      },
      {
        main: false,
        src:
          'https://lh3.googleusercontent.com/iB0waEHzQ-wKmlLP3MXaoOnsq_oiuJNuKIImVpsCRpw0YB3YhDJJfuLNev5wgrsC1B62GK7C4L4-I3uPtA3p_PW6rXeDm6uqBYRLF8dikj5i1R8EFNYtyD7OhCkgY7_tqo5uqEBKk3llt1qbf6hPLOQjnwXQ2k8KJEAF1VfreApwuPULkQSgJK-eaQ1mzjPBXi0HiQyqFaz2zEXHyDyO50TbIR9Xsv8CUmB1JWc1zSyhl3qfo4wr8-T3J0Zm7gpny97BVLkd66MVFHDIqsmWNHMACbNwmxJXJlTiz9awYg1RVjr-VgFJOYkAFwgkPEbLUw6XovMBt4iHKEEvY8qmSdNOiI88ngdhwZkoJCes0s7V4VQD_uHPolF9k1FR_7zijBv9exj8ab9zdMZi0lpfia8aihrXgEJQ88I6a2s98oJD0axOQp6zDIKmZUXTX5kU14FS94MHFW9H3qtAZazjgmZVuZjjCKwN1bnBBsSaOxstDDVfEjvGdGPfx1CHJUqU520XoOvM4nLTZVLkn84UtrlNTF3-ENyIlaYB9wg8Bj6jn1JMCqjmzmdiPgPzPPYNMV0oTT1NiN1qWcaichfM_nGaVPPVSvE41wGHfTHFE5OSLOpsO0DK4TbEPBBBkXPJN6x-m0OR7lTO7qMJKOFiGydehdLc989TuyRU2IM-2tD8K_5ZfYvy_A=w1592-h895-no'
      }
    ],
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
