import React, { Component } from 'react';
import classes from './App.module.scss';
import Login from '../Login/Login';

class App extends Component {
    state = {
        AppValue: 'App container'
    };

    changeStateInApp = (value: any) => {
        console.log('changeStateInApp: ', value)

        /*
        // Manipulating state
        const newStateValue = updateObject(this.state, {AppValue: value});
        this.setState({...newStateValue});
        function updateObject(oldState: Readonly<any>, updatedProperties: any): object {
            return {
                ...oldState,
                ...updatedProperties
            };
        }

        */
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
