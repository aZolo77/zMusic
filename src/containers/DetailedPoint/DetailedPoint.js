import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const DetailedPoint = () => {
  let params = useParams();
  console.log(params);
  return <Container>DetailedPoint</Container>;
};

export default DetailedPoint;
