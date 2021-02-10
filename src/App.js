import React, { Component } from 'react';
import history from './history';
import MainPage from './MainPage';

class App extends Component {
  componentDidMount() {
    // Force an update if the URL changes.
    history.listen(() => this.forceUpdate());
  }

  render() {
    return (
      <main role="main">
        <MainPage />
      </main>
    );
  }
}

export default App;
