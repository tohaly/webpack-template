import React, { useState } from 'react';
import classNamesBind from 'classnames/bind';
import Arrow from 'images/general/arrowTop.svg';
import classes from './DropAnswer.module.css';

interface IProps {
  buttonText: string;
  dropText: string;
  id?: string;
  initialState?: boolean;
}

const cx = classNamesBind.bind(classes);

export const DropAnswer = ({ buttonText, dropText, id, initialState }: IProps) => {
  const [state, setState] = useState(initialState);

  return (
    <div id={id} className={classes.dropAnswer}>
      <button className={classes.button} onClick={() => setState(!state)}>
        {buttonText}
        <Arrow className={cx('arrow', { arrowRotate: state })} />
      </button>
      <p className={cx('text', { textIsVisible: state })}>{dropText}</p>
    </div>
  );
};
