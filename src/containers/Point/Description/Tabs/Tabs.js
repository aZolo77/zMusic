import React from 'react';

import classes from './Tabs.module.scss';

const Tabs = ({ changeContent, activeBtn = 1 }) => {
  const btnClass = {
    1: activeBtn === 1 ? classes.ActiveButton : classes.SimpleButton,
    2: activeBtn === 2 ? classes.ActiveButton : classes.SimpleButton,
    3: activeBtn === 3 ? classes.ActiveButton : classes.SimpleButton
  };

  return (
    <div className={classes.Wrapper}>
      <div
        className={[classes.Button, btnClass['1']].join(' ')}
        onClick={changeContent('general', 1)}
      >
        Описание
      </div>
      <div
        className={[classes.Button, btnClass['2']].join(' ')}
        onClick={changeContent('prices', 2)}
      >
        Цены
      </div>
      <div
        className={[classes.Button, btnClass['3']].join(' ')}
        onClick={changeContent('contacts', 3)}
      >
        Контакты
      </div>
    </div>
  );
};

export default Tabs;
