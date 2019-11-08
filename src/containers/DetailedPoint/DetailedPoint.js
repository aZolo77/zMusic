import React, { useEffect, useCallback } from 'react';
import * as actions from '../../store/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Map from '../../components/Map/Map';
import Spinner from '../../components/UI/Spinner/Spinner';
import Carousel from '../../components/Carousel/Carousel';

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

  const renderHeading = () => {
    return <div className={classes.Wrapper}>{point.name}</div>;
  };

  const detailedPoint = point !== null ? renderHeading() : <Spinner />;

  return (
    <div>
      <Container>{detailedPoint}</Container>
      <Container>
        <div className={classes.DescWrapper}>
          <Row>
            <Col xs={12} md={6}>
              {point ? <Carousel imgs={point.imgs} /> : <Spinner />}
            </Col>
            <Col xs={12} md={6}>
              <div className={classes.Description}>Description</div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        {point ? <Map coords={point.coords} /> : <Spinner />}
      </Container>
    </div>
  );
};

export default DetailedPoint;
