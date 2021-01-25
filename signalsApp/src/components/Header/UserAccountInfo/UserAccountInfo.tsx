import React from 'react';
import ExampleAvatar from 'images/header/exampleAvatar.svg';
import Arrow from 'images/header/arrowRight.svg';
import { Link } from 'react-router-dom';
import classes from './UserAccountInfo.module.css';

export const UserAccountInfo = () => {
  return (
    <Link className={classes.userAccountInfo} to={'/account'}>
      <ExampleAvatar className={classes.avatar} />
      <div className={classes.info}>
        <p className={classes.name}>Premium Account</p>
        <p className={classes.subscription}>12 days left</p>
      </div>
      <Arrow className={classes.arrow} />
    </Link>
  );
};
