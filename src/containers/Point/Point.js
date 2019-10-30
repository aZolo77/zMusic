import React from 'react';
import Showcase from './Showcase/Showcase';
import Description from './Description/Description';

import classes from './Point.module.scss';

const Point = ({ id, name, desc }) => {
  return (
    <div className={classes.PointsItem}>
      <Showcase name={name} pointsId={id} />
      <Description description={desc} />
    </div>
  );
};

export default Point;
