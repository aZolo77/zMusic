import React from 'react';
import { Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import Carousel from '../../../components/Carousel/Carousel';

import classes from './Showcase.module.scss';

const Showcase = ({ name, imgs, pointsId }) => {
  const history = useHistory();

  const showPointsPageHandler = () => {
    // ? Переход на страницу Репетиционной Студии
    history.push({
      pathname: `/rehearsal-points/point/${pointsId}`
    });
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.NameWrapper}>
        <span className={classes.Name}>{name}</span>
      </div>

      <Image src={imgs[0].src} className={classes.Image} />

      <div className={classes.ButtonWrapper} onClick={showPointsPageHandler}>
        <div className={classes.Button}>Подробнее</div>
      </div>
    </div>
  );
};

export default Showcase;
