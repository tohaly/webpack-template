import React from 'react';
import classNamesBind from 'classnames/bind';
import { useDateSessionCard } from 'utils/useDateSesionCard';
import { SessionType } from 'services';
import example from 'images/exampleAvatar.jpg';
import classes from './Session.module.css';
import { SessionStatus } from '../SessionStatus/SessionStatus';

interface IProps extends SessionType {
  isModuleView?: boolean;
}

const cx = classNamesBind.bind(classes);

export const Session = ({ isModuleView, name, about, text, startDate, inPause }: IProps) => {
  const cardClassName = cx('card', { moduleCard: isModuleView });
  const { minutesText, month, monthDay, time, day, isSessionActive, isVisible } = useDateSessionCard({ startDate });

  return (
    <div className={cardClassName}>
      <header className={classes.header}>
        <div className={classes.dateContainer}>
          {day ? (
            <p className={classes.month}>{day}</p>
          ) : (
            <>
              <p className={classes.day}>{monthDay}</p>
              <p className={classes.month}>{month}</p>
            </>
          )}
        </div>
        <img className={classes.img} src={example} alt="avatar" />
        <time className={classes.time}>{time}</time>
        {(inPause || isVisible) && <SessionStatus inPause={inPause} isActive={isSessionActive} text={minutesText} />}
        <div className={classes.ownerInfo}>
          <p className={classes.name}>{name}</p>
          <p className={classes.about}>{about}</p>
        </div>
      </header>
      <div className={classes.content}>
        <div className={classes.text}>{text}</div>
        <button className={classes.button}>Присоедениться</button>
      </div>
    </div>
  );
};
