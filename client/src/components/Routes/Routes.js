// components/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/campaigns/:id" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
