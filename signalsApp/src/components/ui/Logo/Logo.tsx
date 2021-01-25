import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import LogoImg from 'images/logo/logo.svg';
import classes from './Logo.module.css';

interface IProps {
  externalStyles?: string;
}
const cx = classnames.bind(classes);

export const Logo = ({ externalStyles }: IProps) => {
  const logoClassName = cx('logo', externalStyles);

  return (
    <Link className={logoClassName} to={'/'}>
      <LogoImg className={classes.img} />
      <p className={classes.text}>Twin Trades</p>
    </Link>
  );
};
