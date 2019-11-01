import React from 'react';
import { Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import classes from './Showcase.module.scss';

const Showcase = ({ name, src = 'https://picsum.photos/125', pointsId }) => {
  const history = useHistory();

  const showPointsPageHandler = () => {
    // ? Переход на страницу Репетиционной Студии
    history.push({
      pathname: `/rehearsal-points/point/${pointsId}`
    });
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Name}>{name}</div>
      <Image className={classes.Image} src={src} rounded />

      <button className={classes.Button} onClick={showPointsPageHandler}>
        Подробнее
      </button>
    </div>
  );
};

export default Showcase;
