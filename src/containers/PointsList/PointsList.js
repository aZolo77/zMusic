import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import classes from './PointsList.module.scss';

const PointsList = () => {
  // * [useSelector] react hook instead of [mapStateToProps]
  const { points } = useSelector(({ pointsList: { points } }) => ({
    points
  }));

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
