import React from 'react';
import classes from './Aside.module.css';
import { Navigation } from './Navigation/Navigation';
import { Logo } from '../ui';

export const Aside = () => {
  return (
    <div className={classes.aside}>
      <Logo externalStyles={classes.logoAside} />
      <Navigation />
    </div>
  );
};
