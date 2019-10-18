import React from 'react';
import { Container } from 'react-bootstrap';
import NavBarItem from './NavBarItem/NavBarItem';

import classes from './NavBar.module.scss';

const NavBar = () => {
  return (
    <Container>
      <nav className={classes.List}>
        <NavBarItem link="/">Home</NavBarItem>
        <NavBarItem link="/rehearsal-points">Rehearsal Points</NavBarItem>
      </nav>
    </Container>
  );
};

export default NavBar;
