import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import * as actions from '../../store/actions/index';

import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './DetailedPoint.module.scss';

const DetailedPoint = () => {
  let params = useParams();
  const dispatch = useDispatch();

  const onInitPoint = useCallback(
    () => dispatch(actions.initPoint(params.point)),
    [dispatch, params.point]
  );

  useEffect(() => {
    onInitPoint();
  }, [onInitPoint]);

  // * [useSelector] react hook instead of [mapStateToProps]
  const { point } = useSelector(({ detailedPoint: { point } }) => ({
    point
  }));

  const renderPoint = () => {
    return <div className={classes.Wrapper}>{point.name}</div>;
  };

  const detailedPoint = point !== null ? renderPoint() : <Spinner />;

  return <Container>{detailedPoint}</Container>;
};

export default DetailedPoint;
