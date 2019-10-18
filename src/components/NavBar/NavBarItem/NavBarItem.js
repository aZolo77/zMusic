import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBarItem.module.scss';

const NavBarItem = ({ children, link }) => {
  return (
    <div className={classes.Item}>
      <NavLink to={link}>{children}</NavLink>
    </div>
  );
};

export default NavBarItem;
