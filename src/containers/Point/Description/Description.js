import React, { useState } from 'react';
import PointDescription from '../../../components/PointChunks/PointDescription/PointDescription';
import PointHours from '../../../components/PointChunks/PointHours/PointHours';
import PointPrices from '../../../components/PointChunks/PointPrices/PointPrices';
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
      content = <PointDescription description={description} />;
      break;
    case 'prices':
      content = <PointPrices prices={prices} />;
      break;
    case 'hours':
      content = <PointHours workingHours={workingHours} />;
      break;

    default:
      content = null;
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
