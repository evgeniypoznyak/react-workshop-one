import React, { Component } from 'react';
import classes from './App.module.scss';
import Login from '../Login/Login';

class App extends Component {
    render() {
        const someValue: string = 'some props value';
        return (

            <div className={classes.App}>

                <section className={classes.AppSection}>

                    <Login/>

                    App container


                </section>

            </div>

        );
    }
}

export default App;
