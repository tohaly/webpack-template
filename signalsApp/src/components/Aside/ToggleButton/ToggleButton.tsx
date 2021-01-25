import React from 'react';
import classNamesBind from 'classnames/bind';
import More from 'images/aside/more.svg';
import Close from 'images/aside/close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectHeaderState, toggleHeader } from 'redux-root/headerSlice';
import classes from './ToggleButton.module.css';

const cx = classNamesBind.bind(classes);

export const ToggleButton = () => {
  const isShow = useSelector(selectHeaderState);
  const dispatch = useDispatch();

  const buttonClass = cx('button', { buttonActive: !isShow });

  return (
    <button className={buttonClass} onClick={() => dispatch(toggleHeader())}>
      {isShow ? <More /> : <Close />}
      <span className={classes.text}>More</span>
    </button>
  );
};
