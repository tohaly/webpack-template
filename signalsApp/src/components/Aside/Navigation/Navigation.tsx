import React from 'react';
import { Item } from './Item/Item';
import { ToggleButton } from '../ToggleButton/ToggleButton';
import HomeLogo from 'images/aside/home.svg';
import TrendLogo from 'images/aside/trends.svg';
import Faq from 'images/aside/faq.svg';
import classes from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <Item exact={true} Logo={HomeLogo} text="Home" path={''} />
        <Item Logo={TrendLogo} text="Trends" path={'/trends'} />
        <Item Logo={Faq} text="FAQ" path={'/faq'} />
        <ToggleButton />
      </ul>
    </nav>
  );
};
