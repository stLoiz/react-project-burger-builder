import React from 'react';

import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const sideDrawer = ({ closed, isShown, isAuth }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (isShown) {
    attachedClasses.splice(1, 1, classes.Open);
  }

  return (
    <>
      <Backdrop show={isShown} clicked={closed} />
      <div className={attachedClasses.join(' ')} onClick={closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems isAuthenticated={isAuth} />
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;
