import React from 'react';

import classes from './PointDescription.module.scss';

const PointDescription = ({ children }) => {
  return <div className={classes.Wrapper}>{children}</div>;
};

export default PointDescription;
