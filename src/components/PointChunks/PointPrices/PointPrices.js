import React from 'react';

import classes from './PointPrices.module.scss';

const PointPrices = ({ prices }) => {
  return <div className={classes.Wrapper}>{prices}</div>;
};

export default PointPrices;
