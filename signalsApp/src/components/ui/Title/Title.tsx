import React from 'react';
import classes from './Title.module.css';

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <h1 className={classes.text}>{text}</h1>;
};
