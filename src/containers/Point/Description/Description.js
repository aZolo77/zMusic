import React, { useState } from 'react';
import PointDescription from '../../../components/PointChunks/PointDescription/PointDescription';
import PointHours from '../../../components/PointChunks/PointHours/PointHours';
import PointPrices from '../../../components/PointChunks/PointPrices/PointPrices';
import Tabs from './Tabs/Tabs';

import classes from './Description.module.scss';

const initialState = {
  description: 'Описание',
  prices: [],
  contacts: [],
  content: 'general',
  activeBtn: 1
};

const Description = ({
  description,
  prices = 'Цены',
  contacts = 'Контакты'
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
    case 'contacts':
      content = <PointHours workingHours={contacts} />;
      break;

    default:
      content = null;
      break;
  }

  // ? рендерим контент в зависимости от выбора клиента
  const changeContentHandler = (content, btnNum = 1) => () => {
    dispatch({
      ...state,
      content,
      activeBtn: btnNum
    });
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Content}>{content}</div>
      <Tabs changeContent={changeContentHandler} activeBtn={state.activeBtn} />
    </div>
  );
};

export default Description;
