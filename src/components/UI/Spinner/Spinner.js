import React from 'react';
import Loader from 'react-bootstrap/Spinner';

import classes from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={classes.Wrapper}>
      <Loader animation="grow" variant="info" />
    </div>
  );
};

export default Spinner;
