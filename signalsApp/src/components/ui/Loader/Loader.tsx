import React from 'react';
import classes from './Loader.module.css';
import classNamesBind from 'classnames/bind';

const cx = classNamesBind.bind(classes);

export const Loader = () => {
  const classNameTwo = cx('cube', 'two');
  const classNameThree = cx('cube', 'three');
  const classNameFour = cx('cube', 'four');

  return (
    <div className={classes.item}>
      <div className={classes.wrapper}>
        <div className={classes.cube} />
        <div className={classNameTwo} />
        <div className={classNameFour} />
        <div className={classNameThree} />
      </div>
    </div>
  );
};
