import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Display from './Display';
import Terms from './Terms';

const Routes = () => {
  return (
    <Switch>
      <Route to='/home'><Home /></Route>
      <Route to='/about'><About /></Route>
      <Route to='/display'><Display /></Route>
      <Route to='/edit'><Edit /></Route>
      <Route to='/terms'><Terms /></Route>
    </Switch>
  );
};

export default Routes;