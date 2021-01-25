import React from 'react';
import classNamesBind from 'classnames/bind';
import classes from './SessionStatus.module.css';

const cx = classNamesBind.bind(classes);

interface IProps {
  inPause: boolean;
  isActive: boolean;
  text?: string;
}

export const SessionStatus = ({ inPause, isActive, text }: IProps) => {
  const statusClassName = cx('minutes', { isActive }, { inPause });

  if (inPause) {
    return <p className={statusClassName}>Cancelled</p>;
  }

  if (isActive) {
    return <p className={statusClassName}>Active now</p>;
  }

  return <p className={classes.minutes}>{text}</p>;
};
