import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TradeSession, Trends, Faq, About, OurExperts, Account, NotFound } from './';

const ScreenRoot = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={TradeSession} />
      <Route exact path={'/trends'} component={Trends} />
      <Route exact path={'/faq'} component={Faq} />
      <Route exact path={'/about'} component={About} />
      <Route exact path={'/experts'} component={OurExperts} />
      <Route exact path={'/account'} component={Account} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default ScreenRoot;
