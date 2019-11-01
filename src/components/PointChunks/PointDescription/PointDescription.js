import React from 'react';

import classes from './PointDescription.module.scss';

const PointDescription = ({ description }) => {
  return <div className={classes.Wrapper}>{description}</div>;
};

export default PointDescription;
