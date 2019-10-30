import React from 'react';
import { Image } from 'react-bootstrap';

import classes from './Showcase.module.scss';

const Showcase = ({ name, src = 'https://picsum.photos/120', pointsId }) => {
  const showPointsPageHandler = () => {
    console.log('Show Points page by ID: ', pointsId);
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Name}>{name}</div>
      <Image className={classes.Image} src={src} rounded />

      <button className={classes.Button} onClick={showPointsPageHandler}>
        Подронее
      </button>
    </div>
  );
};

export default Showcase;
