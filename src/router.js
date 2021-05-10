import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Article from './screens/Article';
import Home from './screens/Home';

const Router = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/:id" component={Article} />
    {/* <Route component={}/> */}
  </Switch>
);

export default Router;
