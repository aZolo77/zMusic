import React from 'react';
// * https://react-yandex-maps.now.sh/map#basic-usage
import { YMaps, Map as Panorama } from 'react-yandex-maps';

import classes from './Map.module.scss';

const Map = ({ coords }) => {
  return (
    <YMaps>
      <div className={classes.Wrapper}>
        <Panorama
          defaultState={{ center: [coords.x, coords.y], zoom: 9 }}
          width
        />
      </div>
    </YMaps>
  );
};

export default Map;
