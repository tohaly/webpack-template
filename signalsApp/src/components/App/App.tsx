import React from 'react';
import { Aside, Header } from '../';
import classes from './App.module.css';
import ScreenRoot from '../../screens/ScreenRoot';

function App() {
  return (
    <div onScroll={event => console.log(event)} className={classes.app}>
      <Aside />
      <Header />
      <ScreenRoot />
    </div>
  );
}

export default App;
