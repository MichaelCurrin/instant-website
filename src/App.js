import React, { Component } from 'react';
import MainPage from './MainPage';
import history from './history';

import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Showcase from './Components/showcase/Showcase';
import Custom from './Components/custom/Custom';
import Terms from './Components/terms/Terms';
import Header from './Components/Header';

class App extends Component {
    componentDidMount() {
        // Force an update if the URL changes.
        history.listen(() => this.forceUpdate());
    }

    render() {
        return (
          <Router>
            <Header />
            <Switch>
              <Route exact path='/'><Redirect to='/home' /></Route>
              <Route path='/home'><Home /></Route>
              <Route path='/custom'><Custom /></Route>
              <Route path='/showcase'><Showcase /></Route>
              <Route path='/about'><About /></Route>
              <Route path='/terms'><Terms /></Route>
            </Switch>
          </Router>
        );
    }
}

export default App;
