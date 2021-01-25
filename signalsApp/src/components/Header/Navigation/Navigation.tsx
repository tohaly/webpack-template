import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import classes from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.linkActive} to={'/about'}>
            About company
          </NavLink>
        </li>
        <li className={classes.item}>
          <NavHashLink className={classes.link} activeClassName={classes.linkActive} to={'/faq#how-it-work'}>
            How It Works
          </NavHashLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.linkActive} to={'/experts'}>
            Our Experts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
