import React, { Component } from 'react';
import classes from './App.module.scss';
import Login from '../Login/Login';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <section className={classes.AppSection}>
            App container
            <Login/>
        </section>
      </div>
    );
  }
}

export default App;
