import React, { useState } from 'react';
import PointDescription from '../../../components/PointChunks/PointDescription/PointDescription';
import Tabs from './Tabs/Tabs';

import classes from './Description.module.scss';

const initialState = {
  description: 'Описание',
  prices: [],
  workingHours: [],
  content: 'general'
};

const Description = ({
  description,
  prices = 'Цены',
  workingHours = 'Режим работы'
}) => {
  const [state, dispatch] = useState(initialState);

  let content;

  switch (state.content) {
    case 'general':
      content = <PointDescription>{description}</PointDescription>;
      break;
    case 'prices':
      content = <p>{prices}</p>;
      break;
    case 'hours':
      content = <p>{workingHours}</p>;
      break;

    default:
      content = <p>{description}</p>;
      break;
  }

  // ? рендерим контент в зависимости от выбора клиента
  const changeContentHandler = content => () => {
    dispatch({
      ...state,
      content
    });
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Content}>{content}</div>
      <Tabs changeContent={changeContentHandler} />
    </div>
  );
};

export default Description;
