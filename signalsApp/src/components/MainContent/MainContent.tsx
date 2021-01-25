import React from 'react';
import classes from './MainContent.module.css';

export const MainContent = ({ children }: React.PropsWithChildren<{}>) => {
  return <main className={classes.main}>{children}</main>;
};
