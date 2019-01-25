import React, { Component } from 'react';
import classes from './App.module.scss';
import Login from '../Login/Login';
import { updateObject } from '../../shared/utility';
import Layout from '../../hoc/Layout/Layout';

class App extends Component {
    state = {
        AppValue: 'App container'
    };

    changeStateInApp = (value: any) => {
        const newStateValue = updateObject(this.state, {AppValue: value});
        this.setState({...newStateValue});
    }

    render() {

        let app = <div className={classes.App}>
                    <section className={classes.AppSection}>
                        <Login
                            loginToApp={this.changeStateInApp}
                        />
                        {this.state.AppValue}
                    </section>
                  </div>;

        if ('some condition') {
            // app = <div>LOADING...</div>
        }

        return (

            <Layout>
                {app}
            </Layout>

        );
    }
}

export default App;
