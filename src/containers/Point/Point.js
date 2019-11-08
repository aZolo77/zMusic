import React from 'react';
import Showcase from './Showcase/Showcase';
import Description from './Description/Description';

import classes from './Point.module.scss';

const Point = ({ id, name, desc, imgs }) => {
  return (
    <div className={classes.PointsItem}>
      <Showcase name={name} pointsId={id} imgs={imgs} />
      <Description description={desc} />
    </div>
  );
};

export default Point;
