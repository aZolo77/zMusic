import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Auth from './Auth/Auth';

import Layout from '../hoc/Layout/Layout';
import PointsList from './PointsList/PointsList';
import HomePage from './HomePage/HomePage';

// import classes from './App.module.scss';

function App() {
  const routes = (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/rehearsal-points" component={PointsList} />
      <Route path="/auth" component={Auth} />
    </Switch>
  );

  return <Layout>{routes}</Layout>;
}

export default withRouter(App);
