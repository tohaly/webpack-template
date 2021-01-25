import React from 'react';
import { ToggleSessionList, ToggleViewSessions } from '../index';
import classes from './ControlPanel.module.css';

export const ControlPanel = () => {
  return (
    <div className={classes.panel}>
      <ToggleSessionList />
      <ToggleViewSessions />
    </div>
  );
};
