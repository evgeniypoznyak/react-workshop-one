import React, { Component } from 'react';
import classes from './App.module.scss';
import Login from '../Login/Login';
import { updateObject } from '../../shared/utility';

class App extends Component {
    state = {
        AppValue: 'App container'
    };

    changeStateInApp = (value: any) => {
        const newStateValue = updateObject(this.state, {AppValue: value});
        this.setState({...newStateValue});
    }

    render() {

        return (

            <div className={classes.App}>

                <section className={classes.AppSection}>

                    <Login
                        loginToApp={this.changeStateInApp}
                    />

                    {this.state.AppValue}

                </section>

            </div>

        );
    }
}

export default App;
