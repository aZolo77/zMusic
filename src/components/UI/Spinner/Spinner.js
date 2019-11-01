import React from 'react';
// import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import Loader from 'react-bootstrap/Spinner';

import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinnerWrapper">
      <Loader animation="grow" variant="spinnerColor" />
    </div>
  );
};

export default Spinner;
