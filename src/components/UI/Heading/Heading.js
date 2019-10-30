import React from 'react';

import classes from './heading.module.scss';

const Heading = ({ children }) => {
  return <div className={classes.Wrapper}>{children}</div>;
};

export default Heading;
