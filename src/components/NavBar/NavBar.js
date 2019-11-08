// ? [https://material-ui.com/ru/components/app-bar/]
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Menu } from '@material-ui/icons';
import NavBarItem from './NavBarItem/NavBarItem';
import NavBarItemMobile from './NavBarItemMobile/NavBarItemMobile';
import Modal from '../UI/Modal/Modal';

import classes from './NavBar.module.scss';

const initialState = {
  showModalNavs: false
};

const NavBar = () => {
  const [{ showModalNavs }, dispatch] = useState(initialState);

  const showNavs = () => {
    dispatch({ showModalNavs: true });
  };

  const hideNavs = () => {
    dispatch({ showModalNavs: false });
  };

  return (
    <Container>
      {showModalNavs ? (
        <Modal onClose={hideNavs}>
          <div className={classes.NavsMobile} onClick={hideNavs}>
            <NavBarItemMobile link="/">Home</NavBarItemMobile>
            <NavBarItemMobile link="/rehearsal-points">
              Rehearsal Points
            </NavBarItemMobile>
            <NavBarItemMobile link="/auth">Auth</NavBarItemMobile>
          </div>
        </Modal>
      ) : null}
      <nav className={classes.List}>
        <div className={classes.LogoWrapper}>zLogo</div>
        <div className={classes.MenuIconWrapper}>
          <Menu onClick={showNavs} />
        </div>
        <div className={classes.Navs}>
          <NavBarItem link="/">Home</NavBarItem>
          <NavBarItem link="/rehearsal-points">Rehearsal Points</NavBarItem>
          <NavBarItem link="/auth">Auth</NavBarItem>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
