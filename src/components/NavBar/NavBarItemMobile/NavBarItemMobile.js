import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavBarItemMobile.module.scss';

const NavBarItemMobile = ({ children, link }) => {
  return (
    <div className={classes.Item}>
      <NavLink to={link}>{children}</NavLink>
    </div>
  );
};

export default NavBarItemMobile;
