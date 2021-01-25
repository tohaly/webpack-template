import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Item.module.css';

interface IProps {
  Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
  path: string;
  exact?: boolean;
}

export const Item = ({ Logo, text, path, exact }: IProps) => {
  return (
    <li className={classes.item}>
      <NavLink exact={exact} to={path} className={classes.link} activeClassName={classes.activeLink}>
        <Logo className={classes.logo} />
        <span className={classes.linkText}>{text}</span>
      </NavLink>
    </li>
  );
};
