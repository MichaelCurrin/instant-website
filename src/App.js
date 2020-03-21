import React, { Component } from 'react';
import MainPage from './MainPage';
import Nav from './Nav';
import history from './history';

class App extends Component {
    componentDidMount() {
        // Force an update if the URL changes.
        history.listen(() => this.forceUpdate());
    }

    render() {
        return (
            <div>
                <Nav />
                <main role="main">
                    <MainPage />
                </main>
            </div>
        );
    }
}

export default App;
