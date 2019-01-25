import React, { Component } from 'react';
import classes from './Login.module.scss';
import Input from '../../components/UI/Input/Input';
import { updateObject } from '../../shared/utility';

class Login extends Component<any, any> {

    state = {
        loginValue: 'Hello world from login!'
    };

    onChangeLoginButtonClicked = () => {
        const newStateValue = updateObject(this.state, {loginValue: 'Hello world from ButtonClicked!'});
        this.setState(newStateValue);
    };


    changeAppState = (value: any) => {
        this.props.loginToApp(value);
    }

    onChangeLoginTextHandler = (event: any) => {
        const newStateValue = updateObject(this.state, {loginValue: event.target.value});
        this.setState(newStateValue);
        this.changeAppState(event.target.value);
    };


    render() {

        const localLoginVariable = 'value from Login';

        return (

            <div className={classes.Login}>

                Login container - {this.state.loginValue}

                <h1>{this.props.example}</h1>
                <div>
                    <button
                        className={classes.loginButton}
                        onClick={this.onChangeLoginButtonClicked}
                    >
                        Change value Hello world from login!
                    </button>
                </div>

                <Input inputHandler={this.onChangeLoginTextHandler} randomPropsName={localLoginVariable}/>

            </div>
        )

    }

}

export default Login;
