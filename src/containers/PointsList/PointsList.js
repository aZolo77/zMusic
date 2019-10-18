import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import classes from './PointsList.module.scss';

const initState = {
  points: [
    { id: 0, name: 'zMusic Studio' },
    { id: 1, name: 'Cleo' },
    { id: 2, name: 'Muze Zone' },
    { id: 3, name: 'Verona' },
    { id: 4, name: 'Milan' }
  ]
};

const PointsList = () => {
  const [{ points }] = useState(initState);

  const renderPointsList = () => {
    return points.map(({ id, name }) => {
      return (
        <div key={id} className={classes.PointsItem}>
          {name}
        </div>
      );
    });
  };

  return (
    <Container>
      <div className={classes.Wrapper}>{renderPointsList()}</div>
    </Container>
  );
};

export default PointsList;
