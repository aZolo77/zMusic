import React from 'react';
import {
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap';

import classes from './Tabs.module.scss';

const Tabs = ({ changeContent }) => {
  return (
    <ButtonToolbar
      className={[classes.Wrapper, 'd-flex', 'flex-column'].join(' ')}
    >
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton
          className={classes.Button}
          style={{ padding: 0 }}
          size="sm"
          variant="outline-info"
          value={1}
        >
          <div
            className={classes.ButtonText}
            onClick={changeContent('general')}
          >
            Описание
          </div>
        </ToggleButton>
        <ToggleButton
          className={classes.Button}
          style={{ padding: 0 }}
          size="sm"
          variant="outline-info"
          value={2}
        >
          <div className={classes.ButtonText} onClick={changeContent('prices')}>
            Цены
          </div>
        </ToggleButton>
        <ToggleButton
          className={classes.Button}
          style={{ padding: 0 }}
          size="sm"
          variant="outline-info"
          value={3}
        >
          <div className={classes.ButtonText} onClick={changeContent('hours')}>
            Режим работы
          </div>
        </ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
  );
};

export default Tabs;
