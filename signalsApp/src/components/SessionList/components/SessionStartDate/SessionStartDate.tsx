import React from 'react';
import classes from './SessionStartDate.module.css';

interface IProps {
  day: string;
  month: string;
  monthDay: number;
}

export const SessionStartDate = ({ day, month, monthDay }: IProps) => {
  if (day) {
    return (
      <div className={classes.dateContainer}>
        <p className={classes.month}>{day}</p>
      </div>
    );
  }

  return (
    <div className={classes.dateContainer}>
      <p className={classes.day}>{monthDay}</p>
      <p className={classes.month}>{month}</p>
    </div>
  );
};
