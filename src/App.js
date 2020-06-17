import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Showcase from './Components/showcase/Showcase';
import Custom from './Components/custom/Custom';
import Terms from './Components/terms/Terms';
import Header from './Components/Header';

const App = () => {
  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <div style={{ flexGrow: 1, position: 'relative' }}>
        <Switch>
          <Route exact path='/'><Redirect to='/home' /></Route>
          <Route path='/home'><Home /></Route>
          <Route path='/custom'><Custom /></Route>
          <Route path='/showcase'><Showcase /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/terms'><Terms /></Route>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
