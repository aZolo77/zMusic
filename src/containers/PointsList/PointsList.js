import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Point from '../Point/Point';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';
import Heading from '../../components/UI/Heading/Heading';

import classes from './PointsList.module.scss';

const PointsList = () => {
  const dispatch = useDispatch();

  const onInitPointsList = useCallback(
    () => dispatch(actions.initPointsList()),
    [dispatch]
  );

  useEffect(() => {
    onInitPointsList();
  }, [onInitPointsList]);

  // * [useSelector] react hook instead of [mapStateToProps]
  const { points } = useSelector(({ pointsList: { points } }) => ({
    points
  }));

  const renderPointsList = () => {
    return points.map(({ id, name, description, imgs }) => {
      return (
        <Point key={id} id={id} name={name} desc={description} imgs={imgs} />
      );
    });
  };

  const list =
    points.length === 0 ? (
      <Spinner />
    ) : (
      <div className={classes.Wrapper}>{renderPointsList()}</div>
    );

  return (
    <Container>
      <Heading>Репетиционные студии Санкт-Петербурга</Heading>
      {list}
    </Container>
  );
};

export default PointsList;
