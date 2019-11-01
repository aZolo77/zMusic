import React from 'react';

import classes from './PointHours.module.scss';

const PointHours = ({ workingHours }) => {
  return <div className={classes.Wrapper}>{workingHours}</div>;
};

export default PointHours;
