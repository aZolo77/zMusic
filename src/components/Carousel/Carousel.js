import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from './Carousel.module.scss';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const Carousel = ({ imgs = [] }) => {
  const renderImgs = () => {
    return imgs.map((el, id) => {
      return (
        <div key={id} className={classes.Item}>
          <img alt="" className={classes.Image} src={el.src} />
        </div>
      );
    });
  };

  return (
    <div className={classes.Wrapper}>
      <Slider {...settings}>
        {renderImgs()}
        {/* <div className={classes.Item}>
          <h3>test 1</h3>
        </div>
        <div className={classes.Item}>
          <h3>test 2</h3>
        </div>
        <div className={classes.Item}>
          <h3>test 3</h3>
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;
