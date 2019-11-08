import React from 'react';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import classes from './Modal.module.scss';

const Modal = ({ children, onClose }) => {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Content}>
        <div>
          <CancelOutlinedIcon
            className={classes.CloseButton}
            onClick={onClose}
          />
        </div>
        {children}
        <div className={classes.Footer}>
          <div className={classes.FooterCloseButton} onClick={onClose}>
            Закрыть
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
